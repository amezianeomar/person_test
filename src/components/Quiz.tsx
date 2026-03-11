import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { questions } from '../data/questions';
import { useLanguage } from '../contexts/LanguageContext';

interface QuizProps {
  onComplete: (score: number) => void;
}

export const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const { t, language } = useLanguage();

  const question = questions[currentQuestion];
  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswerSelect = (index: number, points: number) => {
    if (selectedAnswer !== null) return; // Prevent multiple clicks

    setSelectedAnswer(index);
    setScore((prev) => prev + points);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        onComplete(score + points);
      }
    }, 600); // 600ms transition delay
  };

  const letters = ['A', 'B', 'C'];
  const isRtl = language === 'ar';

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-3xl flex flex-col">

        {/* Header & Progress */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-t-3xl p-6 sm:p-8 text-white shadow-lg">
          <div className={`flex justify-between items-end mb-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
            <span className="text-sm sm:text-base font-medium opacity-80">{t('quiz_progress')}</span>
            <span className="text-lg sm:text-xl font-bold" dir="auto">
              {t('quiz_question')} {currentQuestion + 1} / {questions.length}
            </span>
          </div>
          <div className="w-full bg-blue-950/40 rounded-full h-2 sm:h-3 overflow-hidden">
            <div
              className={`bg-white h-full transition-all duration-500 ease-out rounded-full`}
              style={{
                width: `${progressPercentage}%`,
                float: isRtl ? 'right' : 'left'
              }}
            ></div>
          </div>
        </div>

        {/* Question Area */}
        <div className="bg-white rounded-b-3xl shadow-xl p-6 sm:p-8 md:p-10 flex flex-col">
          <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-8 leading-snug ${isRtl ? 'text-right' : 'text-left'}`}>
            {question.question[language]}
          </h2>

          <div className="space-y-4 flex-1">
            {question.answers.map((answer, index) => {
              const isSelected = selectedAnswer === index;
              const hasAnswered = selectedAnswer !== null;

              let containerClass = "flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 w-full ";
              containerClass += isRtl ? "text-right flex-row-reverse " : "text-left ";

              if (hasAnswered) {
                if (isSelected) {
                  containerClass += "border-blue-600 bg-blue-50/50 opacity-100 scale-[1.02] shadow-md";
                } else {
                  containerClass += "border-slate-100 bg-white opacity-40";
                }
              } else {
                containerClass += "border-slate-200 hover:border-blue-400 hover:bg-slate-50 hover:shadow-sm hover:scale-[1.01] cursor-pointer cursor-default";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index, answer.points)}
                  disabled={hasAnswered}
                  className={containerClass}
                >
                  <div className={`
                    shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl font-bold text-lg transition-colors
                    ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}
                  `}>
                    {isSelected ? <CheckCircle2 size={24} /> : letters[index]}
                  </div>
                  <span className={`text-base sm:text-lg text-slate-700 font-medium leading-relaxed flex-1 ${isRtl ? 'text-right pr-2 sm:pr-0' : 'pt-1 sm:pt-0'}`}>
                    {answer.text[language]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
