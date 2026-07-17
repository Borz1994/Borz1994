import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView } from 'react-native';
import { useProgress } from '../context/ProgressContext';
import { useLocale } from '../context/LocaleContext';
import { getBlocksForTheme, getBlockStatus } from '../utils/blocks';
import PrimaryButton from '../components/PrimaryButton';
import ProgressBar from '../components/ProgressBar';
import { colors, radius, spacing } from '../theme/colors';

export default function FlashcardScreen({ route, navigation }) {
  const { themeId, blockIndex } = route.params;
  const { learned, markWordsLearned } = useProgress();
  const { t, typeLabel, wordMeaning } = useLocale();

  const block = useMemo(() => getBlocksForTheme(themeId)[blockIndex] || [], [themeId, blockIndex]);
  const status = useMemo(() => getBlockStatus(block, learned), [block, learned]);

  const [phase, setPhase] = useState('setup'); // setup | learning | done
  const maxCount = status.remaining.length;
  const [count, setCount] = useState(Math.min(maxCount, 30));
  const [session, setSession] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  if (status.isComplete) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.center}>
          <Text style={styles.emoji}>✅</Text>
          <Text style={styles.title}>{t.blockAlreadyComplete}</Text>
          <PrimaryButton title={t.back} onPress={() => navigation.goBack()} style={{ marginTop: spacing.lg }} />
        </View>
      </SafeAreaView>
    );
  }

  if (phase === 'setup') {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.center}>
          <Text style={styles.title}>{t.howManyWords}</Text>
          <Text style={styles.subtitle}>{t.wordsOpenInBlock(maxCount, block.length)}</Text>

          <View style={styles.stepperRow}>
            <Pressable
              onPress={() => setCount((c) => Math.max(0, c - 1))}
              style={styles.stepperBtn}
            >
              <Text style={styles.stepperBtnText}>−</Text>
            </Pressable>
            <Text style={styles.stepperValue}>{count}</Text>
            <Pressable
              onPress={() => setCount((c) => Math.min(maxCount, c + 1))}
              style={styles.stepperBtn}
            >
              <Text style={styles.stepperBtnText}>+</Text>
            </Pressable>
          </View>

          <PrimaryButton
            title={count === 0 ? t.chooseAtLeastOne : t.learnNWords(count)}
            disabled={count === 0}
            onPress={() => {
              setSession(status.remaining.slice(0, count));
              setCardIndex(0);
              setFlipped(false);
              setPhase('learning');
            }}
            style={{ marginTop: spacing.lg, width: '100%' }}
          />
        </View>
      </SafeAreaView>
    );
  }

  if (phase === 'learning') {
    const word = session[cardIndex];
    const isLast = cardIndex === session.length - 1;

    function next() {
      if (isLast) {
        markWordsLearned(session.map((w) => w.id));
        setPhase('done');
      } else {
        setCardIndex((i) => i + 1);
        setFlipped(false);
      }
    }

    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <Text style={styles.progressText}>
            {cardIndex + 1} / {session.length}
          </Text>
          <ProgressBar value={cardIndex + 1} total={session.length} />

          <Pressable style={styles.card} onPress={() => setFlipped((f) => !f)}>
            {!flipped ? (
              <>
                <Text style={styles.cardType}>{typeLabel(word.type)}</Text>
                <Text style={styles.cardWord}>{word.word}</Text>
                <Text style={styles.cardHint}>{t.tapToFlip}</Text>
              </>
            ) : (
              <>
                <Text style={styles.cardType}>{t.meaning}</Text>
                <Text style={styles.cardDefinition}>{wordMeaning(word)}</Text>
                <Text style={styles.cardHint}>{t.tapToFlip}</Text>
              </>
            )}
          </Pressable>

          <PrimaryButton title={isLast ? t.finish : t.next} onPress={next} />
        </View>
      </SafeAreaView>
    );
  }

  // phase === 'done'
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.center}>
        <Text style={styles.emoji}>🎉</Text>
        <Text style={styles.title}>{t.nWordsLearned(session.length)}</Text>
        <Text style={styles.subtitle}>{t.countsForReview}</Text>
        <PrimaryButton
          title={t.startBlockQuiz}
          onPress={() =>
            navigation.replace('Quiz', {
              wordIds: session.map((w) => w.id),
              title: t.blockQuizTitle,
            })
          }
          style={{ marginTop: spacing.lg, width: '100%' }}
        />
        <PrimaryButton
          title={t.backToThemeOverview}
          variant="outline"
          onPress={() => navigation.goBack()}
          style={{ marginTop: spacing.sm, width: '100%' }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  container: { flex: 1, padding: spacing.lg, gap: spacing.md },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: spacing.lg },
  emoji: { fontSize: 48, marginBottom: spacing.sm },
  title: { fontSize: 20, fontWeight: '700', color: colors.text, textAlign: 'center' },
  subtitle: { fontSize: 14, color: colors.textMuted, textAlign: 'center', marginTop: spacing.xs },
  stepperRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.lg,
    marginTop: spacing.xl,
    marginBottom: spacing.md,
  },
  stepperBtn: {
    width: 48,
    height: 48,
    borderRadius: radius.pill,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepperBtnText: { fontSize: 24, color: colors.primary, fontWeight: '700' },
  stepperValue: { fontSize: 32, fontWeight: '700', color: colors.text, minWidth: 60, textAlign: 'center' },
  progressText: { textAlign: 'center', color: colors.textMuted, fontSize: 13 },
  card: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
    minHeight: 220,
  },
  cardType: {
    fontSize: 12,
    color: colors.accent,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: spacing.sm,
    fontWeight: '600',
  },
  cardWord: { fontSize: 28, fontWeight: '700', color: colors.text, textAlign: 'center' },
  cardDefinition: { fontSize: 18, color: colors.text, textAlign: 'center', lineHeight: 26 },
  cardHint: { fontSize: 12, color: colors.textMuted, marginTop: spacing.lg },
});
