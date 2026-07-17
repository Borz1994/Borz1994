import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STRINGS, WORD_TYPE_LABELS } from '../i18n/strings';

const STORAGE_KEY = 'grundwortschatz_locale_v1';

const LocaleContext = createContext(null);

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState('de');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (saved === 'de' || saved === 'ru') {
          setLocaleState(saved);
        }
      } catch (e) {
        // Keine gespeicherte Sprache vorhanden: bei Deutsch bleiben.
      } finally {
        setIsLoaded(true);
      }
    })();
  }, []);

  const setLocale = useCallback((next) => {
    setLocaleState(next);
    AsyncStorage.setItem(STORAGE_KEY, next).catch(() => {});
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'de' ? 'ru' : 'de');
  }, [locale, setLocale]);

  const t = useMemo(() => STRINGS[locale], [locale]);

  const typeLabel = useCallback(
    (type) => (WORD_TYPE_LABELS[type] ? WORD_TYPE_LABELS[type][locale] : type),
    [locale]
  );

  const wordMeaning = useCallback(
    (word) => (locale === 'ru' ? word.ru || word.definition : word.definition),
    [locale]
  );

  const value = useMemo(
    () => ({ locale, setLocale, toggleLocale, isLoaded, t, typeLabel, wordMeaning }),
    [locale, setLocale, toggleLocale, isLoaded, t, typeLabel, wordMeaning]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error('useLocale muss innerhalb von LocaleProvider verwendet werden');
  }
  return ctx;
}
