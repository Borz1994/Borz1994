import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import ProgressBar from './ProgressBar';
import { colors, radius, spacing } from '../theme/colors';

export default function ThemeCard({ theme, learnedCount, total, onPress }) {
  const isComplete = total > 0 && learnedCount === total;
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={styles.row}>
        <Text style={styles.icon}>{theme.icon}</Text>
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{theme.name}</Text>
          <Text style={styles.count}>
            {learnedCount} / {total} gelernt
          </Text>
        </View>
        {isComplete && <Text style={styles.badge}>✓</Text>}
      </View>
      <ProgressBar value={learnedCount} total={total} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.sm,
  },
  pressed: {
    opacity: 0.85,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  icon: {
    fontSize: 26,
    marginRight: spacing.xs,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  count: {
    fontSize: 13,
    color: colors.textMuted,
    marginTop: 2,
  },
  badge: {
    fontSize: 18,
    color: colors.success,
    fontWeight: '700',
  },
});
