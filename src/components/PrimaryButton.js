import React from 'react';
import { Pressable, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { colors, radius, spacing } from '../theme/colors';

export default function PrimaryButton({
  title,
  onPress,
  disabled,
  variant = 'primary',
  loading = false,
  style,
}) {
  const isOutline = variant === 'outline';
  const isGhost = variant === 'ghost';
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.base,
        isOutline && styles.outline,
        isGhost && styles.ghost,
        !isOutline && !isGhost && { backgroundColor: colors.primary },
        (disabled || loading) && styles.disabled,
        pressed && !disabled && styles.pressed,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={isOutline || isGhost ? colors.primary : colors.white} />
      ) : (
        <Text
          style={[
            styles.text,
            isOutline && { color: colors.primary },
            isGhost && { color: colors.primary },
            !isOutline && !isGhost && { color: colors.white },
          ]}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outline: {
    borderWidth: 1.5,
    borderColor: colors.primary,
    backgroundColor: 'transparent',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  disabled: {
    opacity: 0.45,
  },
  pressed: {
    opacity: 0.85,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
