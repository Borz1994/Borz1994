import React, { useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useProgress } from '../context/ProgressContext';
import { getBlocksForTheme, getBlockStatus, getThemeProgress } from '../utils/blocks';
import BlockRow from '../components/BlockRow';
import ProgressBar from '../components/ProgressBar';
import { colors, spacing } from '../theme/colors';

export default function ThemeDetailScreen({ route, navigation }) {
  const { themeId, themeName } = route.params;
  const { learned } = useProgress();

  const blocks = useMemo(() => getBlocksForTheme(themeId), [themeId]);
  const progress = getThemeProgress(themeId, learned);

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        data={blocks}
        keyExtractor={(_, index) => `${themeId}-block-${index}`}
        contentContainerStyle={styles.container}
        ListHeaderComponent={
          <View style={{ marginBottom: spacing.md }}>
            <Text style={styles.subtitle}>
              {progress.learnedCount} / {progress.total} Wörter gelernt · {blocks.length} Blöcke à
              max. 30
            </Text>
            <View style={{ marginTop: spacing.sm }}>
              <ProgressBar value={progress.learnedCount} total={progress.total} height={8} />
            </View>
          </View>
        }
        renderItem={({ item, index }) => {
          const status = getBlockStatus(item, learned);
          return (
            <BlockRow
              index={index}
              status={status}
              onPress={() =>
                navigation.navigate('Flashcards', { themeId, blockIndex: index, themeName })
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
  subtitle: { fontSize: 13, color: colors.textMuted },
});
