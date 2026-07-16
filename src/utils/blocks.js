import { BLOCK_SIZE } from '../data/themes';
import { WORDS_BY_THEME } from '../data/words';

// Zerlegt die Wortliste eines Themas in Blöcke von maximal BLOCK_SIZE Wörtern.
export function getBlocksForTheme(themeId) {
  const words = WORDS_BY_THEME[themeId] || [];
  const blocks = [];
  for (let i = 0; i < words.length; i += BLOCK_SIZE) {
    blocks.push(words.slice(i, i + BLOCK_SIZE));
  }
  return blocks;
}

// Liefert Fortschrittsinfos für einen Block anhand der gelernten Wort-IDs.
export function getBlockStatus(block, learned) {
  const learnedCount = block.reduce((n, w) => n + (learned[w.id] ? 1 : 0), 0);
  const remaining = block.filter((w) => !learned[w.id]);
  return {
    total: block.length,
    learnedCount,
    remaining,
    isComplete: learnedCount === block.length,
    isStarted: learnedCount > 0,
  };
}

export function getThemeProgress(themeId, learned) {
  const words = WORDS_BY_THEME[themeId] || [];
  const learnedCount = words.reduce((n, w) => n + (learned[w.id] ? 1 : 0), 0);
  return { total: words.length, learnedCount };
}

// Sucht den ersten Block mit noch offenen Wörtern (für "Weiter lernen").
export function findNextBlock(themeIds, learned) {
  for (const themeId of themeIds) {
    const blocks = getBlocksForTheme(themeId);
    for (let i = 0; i < blocks.length; i++) {
      const status = getBlockStatus(blocks[i], learned);
      if (!status.isComplete) {
        return { themeId, blockIndex: i };
      }
    }
  }
  return null;
}
