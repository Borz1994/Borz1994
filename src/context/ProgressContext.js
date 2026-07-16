import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'grundwortschatz_progress_v1';

const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  const [learned, setLearned] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (raw) {
          setLearned(JSON.parse(raw));
        }
      } catch (e) {
        // Kein gespeicherter Fortschritt vorhanden oder Lesefehler: mit leerem Stand starten.
      } finally {
        setIsLoaded(true);
      }
    })();
  }, []);

  const persist = useCallback((next) => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next)).catch(() => {});
  }, []);

  const markWordsLearned = useCallback(
    (wordIds) => {
      setLearned((prev) => {
        const now = Date.now();
        const next = { ...prev };
        wordIds.forEach((id) => {
          next[id] = now;
        });
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const resetProgress = useCallback(() => {
    setLearned({});
    persist({});
  }, [persist]);

  const value = useMemo(
    () => ({ learned, isLoaded, markWordsLearned, resetProgress }),
    [learned, isLoaded, markWordsLearned, resetProgress]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) {
    throw new Error('useProgress muss innerhalb von ProgressProvider verwendet werden');
  }
  return ctx;
}
