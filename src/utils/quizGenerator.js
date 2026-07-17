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

// Erstellt Multiple-Choice-Fragen: Wort -> richtige Bedeutung unter 3 Distraktoren.
// getMeaning bestimmt die angezeigte Sprache (deutsche Definition oder russische Übersetzung).
export function buildQuiz(words, { maxLength = MAX_QUIZ_LENGTH, getMeaning = (w) => w.definition } = {}) {
  const pool = sample(words, Math.min(maxLength, words.length));

  return pool.map((word) => {
    const correctAnswer = getMeaning(word);
    const distractorPool = ALL_WORDS.filter(
      (w) => w.id !== word.id && getMeaning(w) !== correctAnswer
    );
    const distractors = sample(distractorPool, 3).map((w) => getMeaning(w));
    const options = shuffle([correctAnswer, ...distractors]);
    return {
      wordId: word.id,
      question: word.word,
      options,
      correctAnswer,
    };
  });
}
