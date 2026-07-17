const DAY_MS = 24 * 60 * 60 * 1000;

function startOfDay(timestamp) {
  const d = new Date(timestamp);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

export function daysAgo(timestamp, referenceNow = Date.now()) {
  return Math.floor((startOfDay(referenceNow) - startOfDay(timestamp)) / DAY_MS);
}

// "Gestern" = genau der Kalendertag vor heute.
export function isYesterday(timestamp, referenceNow = Date.now()) {
  return daysAgo(timestamp, referenceNow) === 1;
}

// "Diese Woche" = rollierendes 7-Tage-Fenster (heute und die 6 Tage davor).
export function isWithinLastWeek(timestamp, referenceNow = Date.now()) {
  const diff = daysAgo(timestamp, referenceNow);
  return diff >= 0 && diff <= 6;
}

// "Diesen Monat" = rollierendes 30-Tage-Fenster (heute und die 29 Tage davor).
export function isWithinLastMonth(timestamp, referenceNow = Date.now()) {
  const diff = daysAgo(timestamp, referenceNow);
  return diff >= 0 && diff <= 29;
}

export function formatDate(timestamp, locale = 'de') {
  const intlLocale = locale === 'ru' ? 'ru-RU' : 'de-DE';
  return new Date(timestamp).toLocaleDateString(intlLocale, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}
