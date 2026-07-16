import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, radius } from '../theme/colors';

export default function ProgressBar({ value, total, height = 8, color = colors.primary }) {
  const pct = total > 0 ? Math.min(100, Math.round((value / total) * 100)) : 0;
  return (
    <View style={[styles.track, { height }]}>
      <View style={[styles.fill, { width: `${pct}%`, backgroundColor: color, height }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    width: '100%',
    backgroundColor: colors.border,
    borderRadius: radius.pill,
    overflow: 'hidden',
  },
  fill: {
    borderRadius: radius.pill,
  },
});
