export interface Answer {
  text: {
    fr: string;
    ar: string;
  };                      // Texte de la réponse / نص الجواب
  points: number;         // Points associés (0, 1 ou 2)
}

export interface Question {
  id: number;
  question: {
    fr: string;
    ar: string;
  };                      // Énoncé de la question / نص السؤال
  answers: Answer[];      // 3 réponses possibles
}

export interface UserData {
  name: string;
  score: number;
  maxScore: number;
}

export type Screen = 'welcome' | 'quiz' | 'results';
