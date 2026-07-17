import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useProgress } from '../context/ProgressContext';
import { useLocale } from '../context/LocaleContext';
import { THEMES, themeName } from '../data/themes';
import { getThemeProgress } from '../utils/blocks';
import ThemeCard from '../components/ThemeCard';
import { colors, spacing } from '../theme/colors';

export default function ThemesScreen({ navigation }) {
  const { learned } = useProgress();
  const { t, locale } = useLocale();

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        data={THEMES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
        ListHeaderComponent={
          <View style={{ marginBottom: spacing.md }}>
            <Text style={styles.title}>{t.themesTitle}</Text>
            <Text style={styles.subtitle}>{t.themesSubtitle(THEMES.length)}</Text>
          </View>
        }
        renderItem={({ item }) => {
          const progress = getThemeProgress(item.id, learned);
          return (
            <ThemeCard
              icon={item.icon}
              name={themeName(item, locale)}
              learnedCount={progress.learnedCount}
              total={progress.total}
              countLabel={t.blockProgress(progress.learnedCount, progress.total)}
              onPress={() =>
                navigation.navigate('ThemeDetail', {
                  themeId: item.id,
                  themeName: themeName(item, locale),
                })
              }
            />
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  container: { padding: spacing.lg, paddingBottom: spacing.xl * 2 },
  title: { fontSize: 24, fontWeight: '700', color: colors.text },
  subtitle: { fontSize: 13, color: colors.textMuted, marginTop: 4 },
});
