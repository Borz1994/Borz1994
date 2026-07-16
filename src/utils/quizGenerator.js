import { ALL_WORDS } from '../data/words';

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function sample(array, n) {
  return shuffle(array).slice(0, n);
}

export const MAX_QUIZ_LENGTH = 20;

// Erstellt Multiple-Choice-Fragen: Wort -> richtige Definition unter 3 Distraktoren.
export function buildQuiz(words, { maxLength = MAX_QUIZ_LENGTH } = {}) {
  const pool = sample(words, Math.min(maxLength, words.length));

  return pool.map((word) => {
    const distractorPool = ALL_WORDS.filter(
      (w) => w.id !== word.id && w.definition !== word.definition
    );
    const distractors = sample(distractorPool, 3).map((w) => w.definition);
    const options = shuffle([word.definition, ...distractors]);
    return {
      wordId: word.id,
      question: word.word,
      options,
      correctAnswer: word.definition,
    };
  });
}
