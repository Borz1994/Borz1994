import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import ThemesScreen from '../screens/ThemesScreen';
import ReviewScreen from '../screens/ReviewScreen';
import ThemeDetailScreen from '../screens/ThemeDetailScreen';
import FlashcardScreen from '../screens/FlashcardScreen';
import QuizScreen from '../screens/QuizScreen';
import { colors } from '../theme/colors';
import { useLocale } from '../context/LocaleContext';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabIcon({ symbol, focused }) {
  return (
    <Text style={{ fontSize: 20, opacity: focused ? 1 : 0.5 }}>{symbol}</Text>
  );
}

function Tabs() {
  const { t } = useLocale();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
      }}
    >
      <Tab.Screen
        name="Start"
        component={HomeScreen}
        options={{
          tabBarLabel: t.tabStart,
          tabBarIcon: ({ focused }) => <TabIcon symbol="🏠" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Themen"
        component={ThemesScreen}
        options={{
          tabBarLabel: t.tabThemes,
          tabBarIcon: ({ focused }) => <TabIcon symbol="📚" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Prüfungen"
        component={ReviewScreen}
        options={{
          tabBarLabel: t.tabReview,
          tabBarIcon: ({ focused }) => <TabIcon symbol="📝" focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function RootNavigator() {
  const { t } = useLocale();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTintColor: colors.primary }}>
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen
          name="ThemeDetail"
          component={ThemeDetailScreen}
          options={({ route }) => ({ title: route.params?.themeName || '' })}
        />
        <Stack.Screen
          name="Flashcards"
          component={FlashcardScreen}
          options={{ title: t.continueLearning, headerBackTitle: t.back }}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={{ title: t.tabReview, headerBackTitle: t.back }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
