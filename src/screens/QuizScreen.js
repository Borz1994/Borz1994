import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView } from 'react-native';
import { WORD_BY_ID } from '../data/words';
import { buildQuiz } from '../utils/quizGenerator';
import PrimaryButton from '../components/PrimaryButton';
import ProgressBar from '../components/ProgressBar';
import { colors, radius, spacing } from '../theme/colors';

export default function QuizScreen({ route, navigation }) {
  const { wordIds, title } = route.params;

  const words = useMemo(
    () => wordIds.map((id) => WORD_BY_ID[id]).filter(Boolean),
    [wordIds]
  );
  const questions = useMemo(() => buildQuiz(words), [words]);

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  if (questions.length === 0) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.center}>
          <Text style={styles.title}>Keine Wörter für eine Prüfung gefunden.</Text>
          <PrimaryButton title="Zurück" onPress={() => navigation.goBack()} style={{ marginTop: spacing.lg }} />
        </View>
      </SafeAreaView>
    );
  }

  if (finished) {
    const pct = Math.round((correctCount / questions.length) * 100);
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.center}>
          <Text style={styles.emoji}>{pct >= 70 ? '🏆' : '💪'}</Text>
          <Text style={styles.title}>
            {correctCount} / {questions.length} richtig ({pct}%)
          </Text>
          <PrimaryButton title="Fertig" onPress={() => navigation.goBack()} style={{ marginTop: spacing.lg, width: '100%' }} />
        </View>
      </SafeAreaView>
    );
  }

  const q = questions[index];
  const isLast = index === questions.length - 1;

  function choose(option) {
    if (selected) return;
    setSelected(option);
    if (option === q.correctAnswer) setCorrectCount((c) => c + 1);
  }

  function next() {
    if (isLast) {
      setFinished(true);
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
    }
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.progressText}>
          {title ? `${title} · ` : ''}Frage {index + 1} / {questions.length}
        </Text>
        <ProgressBar value={index + 1} total={questions.length} />

        <View style={styles.questionCard}>
          <Text style={styles.questionLabel}>Was bedeutet</Text>
          <Text style={styles.questionWord}>{q.question}</Text>
        </View>

        <View style={{ gap: spacing.sm }}>
          {q.options.map((option) => {
            const isCorrect = option === q.correctAnswer;
            const isSelected = option === selected;
            let style = styles.option;
            if (selected) {
              if (isCorrect) style = [styles.option, styles.optionCorrect];
              else if (isSelected) style = [styles.option, styles.optionWrong];
            }
            return (
              <Pressable key={option} onPress={() => choose(option)} style={style}>
                <Text style={styles.optionText}>{option}</Text>
              </Pressable>
            );
          })}
        </View>

        <PrimaryButton
          title={isLast ? 'Ergebnis anzeigen' : 'Weiter'}
          disabled={!selected}
          onPress={next}
          style={{ marginTop: spacing.md }}
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
  progressText: { textAlign: 'center', color: colors.textMuted, fontSize: 13 },
  questionCard: {
    backgroundColor: colors.primaryDark,
    borderRadius: radius.lg,
    padding: spacing.lg,
    alignItems: 'center',
  },
  questionLabel: { color: '#CFE3DA', fontSize: 12, textTransform: 'uppercase' },
  questionWord: { color: colors.white, fontSize: 26, fontWeight: '700', marginTop: spacing.xs, textAlign: 'center' },
  option: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
  },
  optionCorrect: { borderColor: colors.success, backgroundColor: '#E5F3EA' },
  optionWrong: { borderColor: colors.error, backgroundColor: '#FBE9E5' },
  optionText: { fontSize: 15, color: colors.text },
});
