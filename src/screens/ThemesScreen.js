import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useProgress } from '../context/ProgressContext';
import { THEMES } from '../data/themes';
import { getThemeProgress } from '../utils/blocks';
import ThemeCard from '../components/ThemeCard';
import { colors, spacing } from '../theme/colors';

export default function ThemesScreen({ navigation }) {
  const { learned } = useProgress();

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        data={THEMES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
        ListHeaderComponent={
          <View style={{ marginBottom: spacing.md }}>
            <Text style={styles.title}>Themen</Text>
            <Text style={styles.subtitle}>{THEMES.length} Kategorien · nach Thema gruppiert</Text>
          </View>
        }
        renderItem={({ item }) => {
          const progress = getThemeProgress(item.id, learned);
          return (
            <ThemeCard
              theme={item}
              learnedCount={progress.learnedCount}
              total={progress.total}
              onPress={() =>
                navigation.navigate('ThemeDetail', { themeId: item.id, themeName: item.name })
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
