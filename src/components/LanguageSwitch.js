import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { useLocale } from '../context/LocaleContext';
import { colors, radius, spacing } from '../theme/colors';

export default function LanguageSwitch() {
  const { locale, toggleLocale } = useLocale();
  return (
    <Pressable onPress={toggleLocale} style={({ pressed }) => [styles.pill, pressed && styles.pressed]}>
      <Text style={[styles.option, locale === 'de' && styles.optionActive]}>DE</Text>
      <Text style={styles.divider}>/</Text>
      <Text style={[styles.option, locale === 'ru' && styles.optionActive]}>RU</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.sm,
    paddingVertical: 6,
    gap: 4,
  },
  pressed: { opacity: 0.7 },
  option: { fontSize: 12, fontWeight: '700', color: colors.textMuted },
  optionActive: { color: colors.primary },
  divider: { fontSize: 12, color: colors.border },
});
