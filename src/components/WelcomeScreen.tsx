import React, { useState } from 'react';
import { Briefcase, AlertCircle, Clock, FileText, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { LangSwitcher } from './LangSwitcher';

interface WelcomeScreenProps {
  onStart: (name: string) => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const { t, language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError(t('name_error'));
      return;
    }
    setError('');
    onStart(name.trim());
  };

  const isRtl = language === 'ar';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center p-4 sm:p-6 md:p-8 relative">

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col items-center p-6 sm:p-10 md:p-12 transition-all">

        {/* Header Actions & Logos Section */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 w-full ${isRtl ? 'sm:flex-row-reverse' : ''}`}>
          <div className={`flex items-center justify-center gap-4 sm:gap-6 ${isRtl ? 'flex-row-reverse' : ''}`}>
            <img src="/OFPPT.png" alt="OFPPT Logo" className="h-16 sm:h-20 object-contain" />
            <div className="hidden sm:block h-12 w-px bg-slate-200"></div>
            <div className="flex items-center justify-center h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-blue-50 text-blue-800 shrink-0">
              <Briefcase size={32} className="sm:w-10 sm:h-10" />
            </div>
          </div>

          <div className="hidden sm:block h-6 sm:h-12 w-px bg-slate-200"></div>

          <LangSwitcher className="mt-2 sm:mt-0 sm:mx-0 mx-auto" />
        </div>

        <div className="text-center mb-8 w-full">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight leading-normal">
            {t('welcome_title')}
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-md mx-auto">
            {t('welcome_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-10">
          <div className="flex flex-col items-center p-4 bg-slate-50 rounded-2xl text-center">
            <Clock className="text-blue-600 mb-2" size={24} />
            <span className="text-sm font-semibold text-slate-700">{t('duration_label')}</span>
            <span className="text-xs text-slate-500">{t('duration_desc')}</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-slate-50 rounded-2xl text-center">
            <FileText className="text-blue-600 mb-2" size={24} />
            <span className="text-sm font-semibold text-slate-700">{t('questions_count_label')}</span>
            <span className="text-xs text-slate-500">{t('questions_count_desc')}</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-slate-50 rounded-2xl text-center">
            <CheckCircle className="text-blue-600 mb-2" size={24} />
            <span className="text-sm font-semibold text-slate-700">{t('cert_label')}</span>
            <span className="text-xs text-slate-500">{t('cert_desc')}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col items-center">
          <div className="w-full mb-6">
            <label htmlFor="name" className={`block text-sm font-semibold text-slate-700 mb-2 ${isRtl ? 'text-right' : 'text-left'}`}>
              {t('name_label')}
            </label>
            <input
              type="text"
              id="name"
              value={name}
              dir="auto"
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError('');
              }}
              placeholder={t('name_placeholder')}
              className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-50 border rounded-xl text-slate-800 focus:outline-none focus:ring-4 transition-all text-base sm:text-lg ${error
                ? 'border-red-300 focus:border-red-500 focus:ring-red-100'
                : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'
                }`}
            />
            {error && (
              <div className={`flex items-center gap-2 mt-2 text-red-600 text-sm animate-fade-in ${isRtl ? 'justify-start flex-row-reverse' : ''}`}>
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-4 px-8 bg-blue-800 hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            {t('start_btn')}
          </button>
        </form>
      </div>
    </div>
  );
};
