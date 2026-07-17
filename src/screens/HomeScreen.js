import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Pressable } from 'react-native';
import { useProgress } from '../context/ProgressContext';
import { useLocale } from '../context/LocaleContext';
import { THEMES, themeName } from '../data/themes';
import { TOTAL_WORDS } from '../data/words';
import { findNextBlock, getBlocksForTheme } from '../utils/blocks';
import { isYesterday, isWithinLastWeek, isWithinLastMonth } from '../utils/dateHelpers';
import ProgressBar from '../components/ProgressBar';
import PrimaryButton from '../components/PrimaryButton';
import LanguageSwitch from '../components/LanguageSwitch';
import { colors, radius, spacing } from '../theme/colors';

export default function HomeScreen({ navigation }) {
  const { learned, isLoaded } = useProgress();
  const { t, locale } = useLocale();

  const learnedCount = Object.keys(learned).length;
  const timestamps = Object.values(learned);

  const stats = useMemo(() => {
    return {
      yesterday: timestamps.filter((ts) => isYesterday(ts)).length,
      week: timestamps.filter((ts) => isWithinLastWeek(ts)).length,
      month: timestamps.filter((ts) => isWithinLastMonth(ts)).length,
    };
  }, [timestamps]);

  const nextBlock = useMemo(() => {
    if (!isLoaded) return null;
    return findNextBlock(THEMES.map((theme) => theme.id), learned);
  }, [isLoaded, learned]);

  const nextTheme = nextBlock ? THEMES.find((theme) => theme.id === nextBlock.themeId) : null;

  function goToNextBlock() {
    if (!nextBlock) return;
    navigation.navigate('Flashcards', {
      themeId: nextBlock.themeId,
      blockIndex: nextBlock.blockIndex,
    });
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{t.appTitle}</Text>
            <Text style={styles.subtitle}>{t.appSubtitle}</Text>
          </View>
          <LanguageSwitch />
        </View>

        <View style={styles.progressCard}>
          <Text style={styles.progressNumber}>
            {learnedCount} / {TOTAL_WORDS || 3000}
          </Text>
          <Text style={styles.progressLabel}>{t.wordsLearned}</Text>
          <View style={{ marginTop: spacing.sm }}>
            <ProgressBar value={learnedCount} total={TOTAL_WORDS || 3000} height={10} />
          </View>
        </View>

        {nextBlock ? (
          <View style={styles.nextCard}>
            <Text style={styles.nextLabel}>{t.continueWith}</Text>
            <Text style={styles.nextTheme}>
              {nextTheme?.icon} {nextTheme && themeName(nextTheme, locale)}
            </Text>
            <Text style={styles.nextBlock}>
              {t.block(nextBlock.blockIndex + 1)} / {getBlocksForTheme(nextBlock.themeId).length}
            </Text>
            <PrimaryButton title={t.continueLearning} onPress={goToNextBlock} style={{ marginTop: spacing.sm }} />
          </View>
        ) : (
          isLoaded && (
            <View style={styles.nextCard}>
              <Text style={styles.nextTheme}>{t.allWordsLearned(TOTAL_WORDS)}</Text>
            </View>
          )
        )}

        <Text style={styles.sectionTitle}>{t.recentlyLearned}</Text>
        <View style={styles.statsRow}>
          <StatCard label={t.yesterday} value={stats.yesterday} />
          <StatCard label={t.thisWeek} value={stats.week} />
          <StatCard label={t.thisMonth} value={stats.month} />
        </View>
        <Text style={styles.hint}>{t.reviewHint}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

function StatCard({ label, value }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  container: { padding: spacing.lg, paddingBottom: spacing.xl * 2 },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.lg,
    gap: spacing.sm,
  },
  title: { fontSize: 24, fontWeight: '700', color: colors.text },
  subtitle: { fontSize: 14, color: colors.textMuted, marginTop: 4 },
  progressCard: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  progressNumber: { fontSize: 30, fontWeight: '700', color: colors.primary },
  progressLabel: { fontSize: 13, color: colors.textMuted, marginTop: 2 },
  nextCard: {
    backgroundColor: colors.primaryDark,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  nextLabel: { color: '#CFE3DA', fontSize: 12, textTransform: 'uppercase', letterSpacing: 0.5 },
  nextTheme: { color: colors.white, fontSize: 18, fontWeight: '700', marginTop: spacing.xs },
  nextBlock: { color: '#CFE3DA', fontSize: 13, marginTop: 2 },
  sectionTitle: { fontSize: 16, fontWeight: '600', color: colors.text, marginBottom: spacing.sm },
  statsRow: { flexDirection: 'row', gap: spacing.sm },
  statCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  statValue: { fontSize: 20, fontWeight: '700', color: colors.text },
  statLabel: { fontSize: 12, color: colors.textMuted, marginTop: 2, textAlign: 'center' },
  hint: { fontSize: 12, color: colors.textMuted, marginTop: spacing.md, textAlign: 'center' },
});
