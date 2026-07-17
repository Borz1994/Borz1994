// Themen des Grundwortschatzes. "count" ist die Ziel-Wortanzahl je Thema
// und wird von den Datendateien in ./words/*.js erfüllt.
export const THEMES = [
  { id: 'begruessung', name: 'Begrüßung & Höflichkeit', nameRu: 'Приветствие и вежливость', icon: '👋', count: 40 },
  { id: 'zahlen', name: 'Zahlen', nameRu: 'Числа', icon: '🔢', count: 100 },
  { id: 'zeit', name: 'Zeit, Datum & Jahreszeiten', nameRu: 'Время, даты и времена года', icon: '🕒', count: 100 },
  { id: 'familie', name: 'Familie & Beziehungen', nameRu: 'Семья и отношения', icon: '👨‍👩‍👧', count: 70 },
  { id: 'koerper', name: 'Körper & Gesundheit', nameRu: 'Тело и здоровье', icon: '🩺', count: 140 },
  { id: 'essen', name: 'Essen & Trinken', nameRu: 'Еда и напитки', icon: '🍽️', count: 190 },
  { id: 'kleidung', name: 'Kleidung & Aussehen', nameRu: 'Одежда и внешность', icon: '👕', count: 80 },
  { id: 'wohnen', name: 'Wohnen & Haus', nameRu: 'Жильё и дом', icon: '🏠', count: 140 },
  { id: 'stadt', name: 'Stadt & Orte', nameRu: 'Город и места', icon: '🏙️', count: 100 },
  { id: 'verkehr', name: 'Verkehr & Reisen', nameRu: 'Транспорт и путешествия', icon: '🚆', count: 140 },
  { id: 'schule', name: 'Schule & Bildung', nameRu: 'Школа и образование', icon: '🎓', count: 100 },
  { id: 'beruf', name: 'Beruf & Arbeit', nameRu: 'Профессия и работа', icon: '💼', count: 110 },
  { id: 'natur', name: 'Natur & Wetter', nameRu: 'Природа и погода', icon: '🌳', count: 110 },
  { id: 'tiere', name: 'Tiere', nameRu: 'Животные', icon: '🐾', count: 100 },
  { id: 'farben', name: 'Farben & Formen', nameRu: 'Цвета и формы', icon: '🎨', count: 40 },
  { id: 'gefuehle', name: 'Gefühle & Charakter', nameRu: 'Чувства и характер', icon: '😊', count: 110 },
  { id: 'freizeit', name: 'Freizeit & Hobbys', nameRu: 'Досуг и хобби', icon: '🎭', count: 100 },
  { id: 'sport', name: 'Sport', nameRu: 'Спорт', icon: '⚽', count: 80 },
  { id: 'technik', name: 'Technik & Medien', nameRu: 'Техника и медиа', icon: '💻', count: 90 },
  { id: 'einkaufen', name: 'Einkaufen & Geld', nameRu: 'Покупки и деньги', icon: '🛒', count: 90 },
  { id: 'kommunikation', name: 'Kommunikation & Sprache', nameRu: 'Общение и язык', icon: '💬', count: 80 },
  { id: 'gesellschaft', name: 'Politik & Gesellschaft', nameRu: 'Политика и общество', icon: '🏛️', count: 80 },
  { id: 'umwelt', name: 'Umwelt', nameRu: 'Экология', icon: '🌍', count: 60 },
  { id: 'verben', name: 'Wichtige Verben', nameRu: 'Важные глаголы', icon: '🏃', count: 220 },
  { id: 'adjektive', name: 'Wichtige Adjektive', nameRu: 'Важные прилагательные', icon: '✨', count: 180 },
  { id: 'praepositionen', name: 'Präpositionen & Adverbien', nameRu: 'Предлоги и наречия', icon: '🧭', count: 100 },
  { id: 'pronomen', name: 'Pronomen & Fragewörter', nameRu: 'Местоимения и вопросительные слова', icon: '❓', count: 50 },
  { id: 'konjunktionen', name: 'Konjunktionen & Füllwörter', nameRu: 'Союзы и слова-связки', icon: '🔗', count: 50 },
  { id: 'alltag', name: 'Alltag & Routine', nameRu: 'Повседневная жизнь', icon: '📅', count: 110 },
  { id: 'notfall', name: 'Notfall & Sicherheit', nameRu: 'Экстренные ситуации и безопасность', icon: '🚨', count: 40 },
];

export const TOTAL_TARGET = THEMES.reduce((sum, t) => sum + t.count, 0);

export const BLOCK_SIZE = 30;

export function themeName(theme, locale) {
  return locale === 'ru' ? theme.nameRu : theme.name;
}
