import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useProgress } from '../context/ProgressContext';
import { useLocale } from '../context/LocaleContext';
import { isYesterday, isWithinLastWeek, isWithinLastMonth, formatDate } from '../utils/dateHelpers';
import PrimaryButton from '../components/PrimaryButton';
import { colors, radius, spacing } from '../theme/colors';

export default function ReviewScreen({ navigation }) {
  const { learned } = useProgress();
  const { t, locale } = useLocale();

  const entries = useMemo(() => Object.entries(learned), [learned]);

  const sections = useMemo(() => {
    const yesterday = entries.filter(([, ts]) => isYesterday(ts)).map(([id]) => id);
    const week = entries.filter(([, ts]) => isWithinLastWeek(ts)).map(([id]) => id);
    const month = entries.filter(([, ts]) => isWithinLastMonth(ts)).map(([id]) => id);
    return { yesterday, week, month };
  }, [entries]);

  const today = formatDate(Date.now(), locale);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{t.reviewTitle}</Text>
        <Text style={styles.subtitle}>{t.reviewSubtitle(today)}</Text>

        <ReviewCard
          emoji="📆"
          title={t.yesterdayLearned}
          description={t.yesterdayDescription}
          count={sections.yesterday.length}
          noWordsLabel={t.noWordsAvailable}
          startLabel={t.startQuiz}
          onStart={() =>
            navigation.navigate('Quiz', { wordIds: sections.yesterday, title: t.reviewYesterdayTitle })
          }
        />
        <ReviewCard
          emoji="🗓️"
          title={t.weekLearned}
          description={t.weekDescription}
          count={sections.week.length}
          noWordsLabel={t.noWordsAvailable}
          startLabel={t.startQuiz}
          onStart={() =>
            navigation.navigate('Quiz', { wordIds: sections.week, title: t.reviewWeekTitle })
          }
        />
        <ReviewCard
          emoji="📅"
          title={t.monthLearned}
          description={t.monthDescription}
          count={sections.month.length}
          noWordsLabel={t.noWordsAvailable}
          startLabel={t.startQuiz}
          onStart={() =>
            navigation.navigate('Quiz', { wordIds: sections.month, title: t.reviewMonthTitle })
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
}

function ReviewCard({ emoji, title, description, count, noWordsLabel, startLabel, onStart }) {
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
        title={count === 0 ? noWordsLabel : startLabel}
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
