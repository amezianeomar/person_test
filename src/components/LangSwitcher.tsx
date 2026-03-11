import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const LangSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center bg-white/50 backdrop-blur-sm p-1 rounded-full shadow-sm border border-slate-200/60 z-50">
            <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1.5 text-sm font-semibold rounded-full transition-all ${language === 'fr'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-slate-600 hover:text-blue-600'
                    }`}
            >
                FR
            </button>
            <button
                onClick={() => setLanguage('ar')}
                className={`px-3 py-1.5 text-sm font-semibold rounded-full transition-all ${language === 'ar'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-slate-600 hover:text-blue-600'
                    }`}
            >
                عربية
            </button>
        </div>
    );
};
