import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useProgress } from '../context/ProgressContext';
import { THEMES, BLOCK_SIZE } from '../data/themes';
import { TOTAL_WORDS } from '../data/words';
import { findNextBlock, getBlocksForTheme } from '../utils/blocks';
import { isYesterday, isWithinLastWeek, isWithinLastMonth } from '../utils/dateHelpers';
import ProgressBar from '../components/ProgressBar';
import PrimaryButton from '../components/PrimaryButton';
import { colors, radius, spacing } from '../theme/colors';

export default function HomeScreen({ navigation }) {
  const { learned, isLoaded } = useProgress();

  const learnedCount = Object.keys(learned).length;
  const timestamps = Object.values(learned);

  const stats = useMemo(() => {
    return {
      yesterday: timestamps.filter((t) => isYesterday(t)).length,
      week: timestamps.filter((t) => isWithinLastWeek(t)).length,
      month: timestamps.filter((t) => isWithinLastMonth(t)).length,
    };
  }, [timestamps]);

  const nextBlock = useMemo(() => {
    if (!isLoaded) return null;
    return findNextBlock(THEMES.map((t) => t.id), learned);
  }, [isLoaded, learned]);

  const nextTheme = nextBlock ? THEMES.find((t) => t.id === nextBlock.themeId) : null;

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
        <Text style={styles.title}>Deutsch Grundwortschatz</Text>
        <Text style={styles.subtitle}>3000 Vokabeln für den Alltagsdialog</Text>

        <View style={styles.progressCard}>
          <Text style={styles.progressNumber}>
            {learnedCount} / {TOTAL_WORDS || 3000}
          </Text>
          <Text style={styles.progressLabel}>Wörter gelernt</Text>
          <View style={{ marginTop: spacing.sm }}>
            <ProgressBar value={learnedCount} total={TOTAL_WORDS || 3000} height={10} />
          </View>
        </View>

        {nextBlock ? (
          <View style={styles.nextCard}>
            <Text style={styles.nextLabel}>Weiter geht's mit</Text>
            <Text style={styles.nextTheme}>
              {nextTheme?.icon} {nextTheme?.name}
            </Text>
            <Text style={styles.nextBlock}>
              Block {nextBlock.blockIndex + 1} von {getBlocksForTheme(nextBlock.themeId).length}
            </Text>
            <PrimaryButton title="Weiter lernen" onPress={goToNextBlock} style={{ marginTop: spacing.sm }} />
          </View>
        ) : (
          isLoaded && (
            <View style={styles.nextCard}>
              <Text style={styles.nextTheme}>🎉 Alle {TOTAL_WORDS} Wörter gelernt!</Text>
            </View>
          )
        )}

        <Text style={styles.sectionTitle}>Kürzlich gelernt</Text>
        <View style={styles.statsRow}>
          <StatCard label="Gestern" value={stats.yesterday} />
          <StatCard label="Diese Woche" value={stats.week} />
          <StatCard label="Diesen Monat" value={stats.month} />
        </View>
        <Text style={styles.hint}>
          Prüfungen zu diesen Wörtern findest du im Tab „Prüfungen“.
        </Text>
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
  title: { fontSize: 24, fontWeight: '700', color: colors.text },
  subtitle: { fontSize: 14, color: colors.textMuted, marginTop: 4, marginBottom: spacing.lg },
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
