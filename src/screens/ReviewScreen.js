import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useProgress } from '../context/ProgressContext';
import { isYesterday, isWithinLastWeek, isWithinLastMonth, formatDate } from '../utils/dateHelpers';
import PrimaryButton from '../components/PrimaryButton';
import { colors, radius, spacing } from '../theme/colors';

export default function ReviewScreen({ navigation }) {
  const { learned } = useProgress();

  const entries = useMemo(() => Object.entries(learned), [learned]);

  const sections = useMemo(() => {
    const yesterday = entries.filter(([, ts]) => isYesterday(ts)).map(([id]) => id);
    const week = entries.filter(([, ts]) => isWithinLastWeek(ts)).map(([id]) => id);
    const month = entries.filter(([, ts]) => isWithinLastMonth(ts)).map(([id]) => id);
    return { yesterday, week, month };
  }, [entries]);

  const today = formatDate(Date.now());

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Prüfungen</Text>
        <Text style={styles.subtitle}>Heute ist der {today} · Multiple-Choice-Test deiner gelernten Wörter</Text>

        <ReviewCard
          emoji="📆"
          title="Gestern gelernt"
          description="Wörter, die du gestern gelernt hast"
          count={sections.yesterday.length}
          onStart={() =>
            navigation.navigate('Quiz', { wordIds: sections.yesterday, title: 'Prüfung: Gestern' })
          }
        />
        <ReviewCard
          emoji="🗓️"
          title="Diese Woche gelernt"
          description="Wörter der letzten 7 Tage"
          count={sections.week.length}
          onStart={() =>
            navigation.navigate('Quiz', { wordIds: sections.week, title: 'Prüfung: Diese Woche' })
          }
        />
        <ReviewCard
          emoji="📅"
          title="Diesen Monat gelernt"
          description="Wörter der letzten 30 Tage"
          count={sections.month.length}
          onStart={() =>
            navigation.navigate('Quiz', { wordIds: sections.month, title: 'Prüfung: Diesen Monat' })
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
}

function ReviewCard({ emoji, title, description, count, onStart }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.emoji}>{emoji}</Text>
        <View style={{ flex: 1 }}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
        <Text style={styles.count}>{count}</Text>
      </View>
      <PrimaryButton
        title={count === 0 ? 'Keine Wörter verfügbar' : 'Prüfung starten'}
        disabled={count === 0}
        onPress={onStart}
        style={{ marginTop: spacing.sm }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  container: { padding: spacing.lg, paddingBottom: spacing.xl * 2, gap: spacing.md },
  title: { fontSize: 24, fontWeight: '700', color: colors.text },
  subtitle: { fontSize: 13, color: colors.textMuted, marginTop: 4, marginBottom: spacing.sm },
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  emoji: { fontSize: 26, marginRight: spacing.xs },
  cardTitle: { fontSize: 16, fontWeight: '600', color: colors.text },
  cardDescription: { fontSize: 12, color: colors.textMuted, marginTop: 2 },
  count: { fontSize: 22, fontWeight: '700', color: colors.primary },
});
