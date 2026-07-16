import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import ProgressBar from './ProgressBar';
import { colors, radius, spacing } from '../theme/colors';

export default function BlockRow({ index, status, onPress }) {
  const { total, learnedCount, isComplete } = status;
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
      <View style={styles.left}>
        <Text style={styles.title}>Block {index + 1}</Text>
        <Text style={styles.subtitle}>
          {isComplete ? 'Abgeschlossen' : `${learnedCount} / ${total} gelernt`}
        </Text>
        <View style={{ marginTop: spacing.xs, width: 140 }}>
          <ProgressBar value={learnedCount} total={total} height={6} />
        </View>
      </View>
      <Text style={[styles.chevron, isComplete && { color: colors.success }]}>
        {isComplete ? '✓' : '›'}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  pressed: {
    opacity: 0.85,
  },
  left: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
  },
  subtitle: {
    fontSize: 13,
    color: colors.textMuted,
    marginTop: 2,
  },
  chevron: {
    fontSize: 22,
    color: colors.textMuted,
    marginLeft: spacing.sm,
  },
});
