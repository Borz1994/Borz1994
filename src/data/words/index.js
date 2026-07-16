import begruessung from './begruessung';
import zahlen from './zahlen';
import zeit from './zeit';
import familie from './familie';
import koerper from './koerper';
import essen from './essen';
import kleidung from './kleidung';
import wohnen from './wohnen';
import stadt from './stadt';
import verkehr from './verkehr';
import schule from './schule';
import beruf from './beruf';
import natur from './natur';
import tiere from './tiere';
import farben from './farben';
import gefuehle from './gefuehle';
import freizeit from './freizeit';
import sport from './sport';
import technik from './technik';
import einkaufen from './einkaufen';
import kommunikation from './kommunikation';
import gesellschaft from './gesellschaft';
import umwelt from './umwelt';
import verben from './verben';
import adjektive from './adjektive';
import praepositionen from './praepositionen';
import pronomen from './pronomen';
import konjunktionen from './konjunktionen';
import alltag from './alltag';
import notfall from './notfall';

// Wörter je Thema-ID, in der Reihenfolge, in der sie gelernt werden.
export const WORDS_BY_THEME = {
  begruessung,
  zahlen,
  zeit,
  familie,
  koerper,
  essen,
  kleidung,
  wohnen,
  stadt,
  verkehr,
  schule,
  beruf,
  natur,
  tiere,
  farben,
  gefuehle,
  freizeit,
  sport,
  technik,
  einkaufen,
  kommunikation,
  gesellschaft,
  umwelt,
  verben,
  adjektive,
  praepositionen,
  pronomen,
  konjunktionen,
  alltag,
  notfall,
};

export const ALL_WORDS = Object.values(WORDS_BY_THEME).flat();

export const WORD_BY_ID = ALL_WORDS.reduce((map, word) => {
  map[word.id] = word;
  return map;
}, {});

export const TOTAL_WORDS = ALL_WORDS.length;
