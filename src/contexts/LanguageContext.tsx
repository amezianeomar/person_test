import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type Language = 'fr' | 'ar';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Core UI Translations
const translations = {
    fr: {
        welcome_title: "Évaluation du Comportement Professionnel",
        welcome_desc: "Testez vos soft skills et découvrez votre profil professionnel à travers des mises en situation concrètes.",
        duration_label: "~5 Minutes",
        duration_desc: "Durée estimée",
        questions_count_label: "10 Questions",
        questions_count_desc: "Mises en situation",
        cert_label: "Certificat PDF",
        cert_desc: "Bilan détaillé",
        name_label: "Nom et Prénom (pour le certificat)",
        name_placeholder: "Ex: Omar Ameziane",
        name_error: "Veuillez entrer un nom valide (minimum 2 caractères)",
        start_btn: "Commencer l'évaluation",

        quiz_progress: "Évaluation en cours",
        quiz_question: "Question",

        results_title: "Vos Résultats",
        download_btn: "Télécharger mon Bilan PDF",
        generating: "Génération...",
        cert_title: "Certificat d'Évaluation",
        cert_subtitle: "Comportement Professionnel (Soft Skills)",
        awarded_to: "Décerné à",
        score_label: "Score Obtenu",
        date_label: "Date d'évaluation",
        id_label: "Identifiant Unique",
        mobile_hint: "Le certificat complet est optimisé pour le format bureau et sera parfaitement lisible une fois téléchargé en PDF. Vous pouvez glisser vers la droite pour le voir en entier.",

        badge_expert_title: "Expert / Modèle Professionnel",
        badge_expert_msg: "Excellente maîtrise des codes professionnels. Vous êtes un exemple pour vos collègues.",
        badge_good_title: "Bon / En Développement",
        badge_good_msg: "De solides bases professionnelles, avec quelques axes d'amélioration à travailler.",
        badge_warn_title: "Attention / Revoir les Bases",
        badge_warn_msg: "Il est important de revoir certaines postures professionnelles. Ne vous découragez pas !"
    },
    ar: {
        welcome_title: "تقييم السلوك المهني",
        welcome_desc: "اختبر مهاراتك الشخصية واكتشف ملفك المهني من خلال مواقف عملية واقعية.",
        duration_label: "~5 دقائق",
        duration_desc: "المدة التقديرية",
        questions_count_label: "10 أسئلة",
        questions_count_desc: "مواقف عملية",
        cert_label: "شهادة PDF",
        cert_desc: "تقييم مفصل",
        name_label: "الاسم والنسب (للشهادة)",
        name_placeholder: "مثال: عمر أمزيان",
        name_error: "المرجاء إدخال اسم صحيح (حرفين على الأقل)",
        start_btn: "ابدأ التقييم",

        quiz_progress: "التقييم جارٍ",
        quiz_question: "السؤال",

        results_title: "نتائجك",
        download_btn: "تحميل شهادة التقييم (PDF)",
        generating: "يتم الإنشاء...",
        cert_title: "شهادة تقييم",
        cert_subtitle: "السلوك المهني (المهارات الناعمة)",
        awarded_to: "منحت لـ",
        score_label: "النتيجة المحصلة",
        date_label: "تاريخ التقييم",
        id_label: "المعرف الفريد",
        mobile_hint: "الشهادة الكاملة محسنة للكمبيوتر وستكون مقروءة بوضوح عند تحميلها بصيغة PDF. يمكنك التمرير لليسار لرؤيتها بالكامل.",

        badge_expert_title: "خبير / نموذج مهني",
        badge_expert_msg: "إتقان ممتاز للقواعد المهنية. أنت نموذج يحتذى به لزملائك.",
        badge_good_title: "جيد / في طور التطوير",
        badge_good_msg: "أسس مهنية صلبة، مع بعض مجالات التحسين التي يجب العمل عليها.",
        badge_warn_title: "انتباه / مراجعة الأساسيات",
        badge_warn_msg: "من المهم مراجعة بعض السلوكيات المهنية. لا تثبط عزيمتك!"
    }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('fr');

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    }, [language]);

    const t = (key: string): string => {
        // @ts-ignore Let's access the keys safely
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
