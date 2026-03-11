import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({ className = '' }) => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className={`flex items-center bg-slate-100 p-1 rounded-full border border-slate-200 w-fit mx-auto ${className}`}>
            <button
                type="button"
                onClick={() => setLanguage('fr')}
                className={`px-4 py-1.5 text-sm font-bold rounded-full transition-all ${language === 'fr'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-blue-600'
                    }`}
            >
                FR
            </button>
            <button
                type="button"
                onClick={() => setLanguage('ar')}
                className={`px-4 py-1.5 text-sm font-bold rounded-full transition-all ${language === 'ar'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-blue-600'
                    }`}
            >
                عربية
            </button>
        </div>
    );
};
