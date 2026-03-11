import React, { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { Quiz } from './components/Quiz';
import { Results } from './components/Results';
import { Screen, UserData } from './types';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [userData, setUserData] = useState<UserData>({
    name: '',
    score: 0,
    maxScore: 20 // 10 questions * 2 points max
  });

  const handleStart = (name: string) => {
    setUserData(prev => ({ ...prev, name }));
    setCurrentScreen('quiz');
  };

  const handleQuizComplete = (score: number) => {
    setUserData(prev => ({ ...prev, score }));
    setCurrentScreen('results');
  };

  return (
    <LanguageProvider>
      <div className="antialiased min-h-screen">
        {currentScreen === 'welcome' && (
          <WelcomeScreen onStart={handleStart} />
        )}
        {currentScreen === 'quiz' && (
          <Quiz onComplete={handleQuizComplete} />
        )}
        {currentScreen === 'results' && (
          <Results data={userData} />
        )}
      </div>
    </LanguageProvider>
  );
}

export default App;
