export interface Answer {
  text: string;           // Texte de la réponse
  points: number;         // Points associés (0, 1 ou 2)
}

export interface Question {
  id: number;
  question: string;       // Énoncé de la question
  answers: Answer[];      // 3 réponses possibles
}

export interface UserData {
  name: string;
  score: number;
  maxScore: number;
}

export type Screen = 'welcome' | 'quiz' | 'results';
