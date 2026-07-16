// Themen des Grundwortschatzes. "count" ist die Ziel-Wortanzahl je Thema
// und wird von den Datendateien in ./words/*.js erfüllt.
export const THEMES = [
  { id: 'begruessung', name: 'Begrüßung & Höflichkeit', icon: '👋', count: 40 },
  { id: 'zahlen', name: 'Zahlen', icon: '🔢', count: 100 },
  { id: 'zeit', name: 'Zeit, Datum & Jahreszeiten', icon: '🕒', count: 100 },
  { id: 'familie', name: 'Familie & Beziehungen', icon: '👨‍👩‍👧', count: 70 },
  { id: 'koerper', name: 'Körper & Gesundheit', icon: '🩺', count: 140 },
  { id: 'essen', name: 'Essen & Trinken', icon: '🍽️', count: 190 },
  { id: 'kleidung', name: 'Kleidung & Aussehen', icon: '👕', count: 80 },
  { id: 'wohnen', name: 'Wohnen & Haus', icon: '🏠', count: 140 },
  { id: 'stadt', name: 'Stadt & Orte', icon: '🏙️', count: 100 },
  { id: 'verkehr', name: 'Verkehr & Reisen', icon: '🚆', count: 140 },
  { id: 'schule', name: 'Schule & Bildung', icon: '🎓', count: 100 },
  { id: 'beruf', name: 'Beruf & Arbeit', icon: '💼', count: 110 },
  { id: 'natur', name: 'Natur & Wetter', icon: '🌳', count: 110 },
  { id: 'tiere', name: 'Tiere', icon: '🐾', count: 100 },
  { id: 'farben', name: 'Farben & Formen', icon: '🎨', count: 40 },
  { id: 'gefuehle', name: 'Gefühle & Charakter', icon: '😊', count: 110 },
  { id: 'freizeit', name: 'Freizeit & Hobbys', icon: '🎭', count: 100 },
  { id: 'sport', name: 'Sport', icon: '⚽', count: 80 },
  { id: 'technik', name: 'Technik & Medien', icon: '💻', count: 90 },
  { id: 'einkaufen', name: 'Einkaufen & Geld', icon: '🛒', count: 90 },
  { id: 'kommunikation', name: 'Kommunikation & Sprache', icon: '💬', count: 80 },
  { id: 'gesellschaft', name: 'Politik & Gesellschaft', icon: '🏛️', count: 80 },
  { id: 'umwelt', name: 'Umwelt', icon: '🌍', count: 60 },
  { id: 'verben', name: 'Wichtige Verben', icon: '🏃', count: 220 },
  { id: 'adjektive', name: 'Wichtige Adjektive', icon: '✨', count: 180 },
  { id: 'praepositionen', name: 'Präpositionen & Adverbien', icon: '🧭', count: 100 },
  { id: 'pronomen', name: 'Pronomen & Fragewörter', icon: '❓', count: 50 },
  { id: 'konjunktionen', name: 'Konjunktionen & Füllwörter', icon: '🔗', count: 50 },
  { id: 'alltag', name: 'Alltag & Routine', icon: '📅', count: 110 },
  { id: 'notfall', name: 'Notfall & Sicherheit', icon: '🚨', count: 40 },
];

export const TOTAL_TARGET = THEMES.reduce((sum, t) => sum + t.count, 0);

export const BLOCK_SIZE = 30;
