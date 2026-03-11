import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    question: {
      fr: "Vous avez une réunion importante avec toute l'équipe dans 10 minutes. Que faites-vous ?",
      ar: "لديك اجتماع مهم مع الفريق بأكمله بعد 10 دقائق. ماذا تفعل؟"
    },
    answers: [
      {
        text: { fr: "J'arrive avec 5 minutes d'avance pour m'installer et préparer mes notes.", ar: "أصل قبل 5 دقائق للاستقرار وتحضير ملاحظاتي." },
        points: 2
      },
      {
        text: { fr: "J'arrive à l'heure exacte du début de la réunion.", ar: "أصل في الوقت المحدد لبداية الاجتماع." },
        points: 1
      },
      {
        text: { fr: "J'arrive avec 5-10 minutes de retard, de toute façon ça commence toujours en retard.", ar: "أصل متأخراً 5-10 دقائق، على أي حال الاجتماعات دائماً تبدأ متأخرة." },
        points: 0
      }
    ]
  },
  {
    id: 2,
    question: {
      fr: "Votre manager vous fait une critique constructive sur votre dernier projet. Quelle est votre réaction ?",
      ar: "قدم لك مديرك نقداً بناءً حول مشروعك الأخير. ما هو رد فعلك؟"
    },
    answers: [
      {
        text: { fr: "J'écoute attentivement, je pose des questions pour comprendre et je l'applique la prochaine fois.", ar: "أستمع بانتباه، أطرح أسئلة للفهم، وأطبقه في المرة القادمة." },
        points: 2
      },
      {
        text: { fr: "J'accepte la critique mais j'essaie de justifier pourquoi j'ai fait comme ça.", ar: "أتقبل النقد ولكن أحاول تبرير سبب قيامي بذلك." },
        points: 1
      },
      {
        text: { fr: "Je le prends personnellement et je montre mon mécontentement.", ar: "آخذ الأمر بشكل شخصي وأظهر استيائي." },
        points: 0
      }
    ]
  },
  {
    id: 3,
    question: {
      fr: "Un de vos collègues est débordé et vous demande de l'aide sur une tâche urgente, alors que vous avez un peu de temps libre.",
      ar: "أحد زملائك مثقل بالعمل ويطلب مساعدتك في مهمة عاجلة، بينما لديك بعض وقت الفراغ."
    },
    answers: [
      {
        text: { fr: "Je propose mon aide volontiers et on s'organise pour avancer ensemble.", ar: "أعرض مساعدتي بكل سرور وننظم أنفسنا للمضي قدماً معاً." },
        points: 2
      },
      {
        text: { fr: "Je l'aide mais je lui rappelle que ce n'est pas mon travail initialement.", ar: "أساعده ولكن أذكره أن هذا ليس عملي في الأساس." },
        points: 1
      },
      {
        text: { fr: "Je lui dis que j'ai mes propres problèmes et qu'il doit s'organiser mieux.", ar: "أخبره أن لدي مشاكلي الخاصة وأنه يجب عليه تنظيم وقته بشكل أفضل." },
        points: 0
      }
    ]
  },
  {
    id: 4,
    question: {
      fr: "Vous venez de vous rendre compte que vous avez fait une erreur importante dans un document partagé avec le client.",
      ar: "لقد أدركت للتو أنك ارتكبت خطأً كبيراً في مستند تمت مشاركته مع العميل."
    },
    answers: [
      {
        text: { fr: "Je préviens immédiatement mon responsable en proposant une solution pour corriger l'erreur.", ar: "أبلغ مسؤولي فوراً مقترحاً حلاً لتصحيح الخطأ." },
        points: 2
      },
      {
        text: { fr: "Je corrige l'erreur discrètement en espérant que personne ne l'a remarquée.", ar: "أصحح الخطأ بتكتم آملاً ألا يلاحظه أحد." },
        points: 1
      },
      {
        text: { fr: "J'attends qu'on me le signale pour en parler, peut-être que ça passera inaperçu.", ar: "أنتظر حتى يُشار إلي به للتحدث عنه، ربما يمر دون أن يلاحظه أحد." },
        points: 0
      }
    ]
  },
  {
    id: 5,
    question: {
      fr: "Vous êtes en télétravail aujourd'hui. Comment gérez-vous votre journée ?",
      ar: "أنت تعمل عن بعد اليوم. كيف تدير يومك؟"
    },
    answers: [
      {
        text: { fr: "Je garde le même rythme qu'au bureau, je suis joignable et je signale mes moments d'indisponibilité.", ar: "أحافظ على نفس الإيقاع كما في المكتب، أكون متاحاً وأبلغ عن أوقات عدم توفري." },
        points: 2
      },
      {
        text: { fr: "Je travaille mais je réponds un peu moins vite aux messages car je fais d'autres choses en parallèle.", ar: "أعمل ولكن أرد على الرسائل ببطء لتأديتي أشياء أخرى في نفس الوقت." },
        points: 1
      },
      {
        text: { fr: "J'en profite pour faire des courses et mes tâches personnelles pendant les heures de travail.", ar: "أستغل الفرصة للقيام بالتسوق ومهامي الشخصية خلال ساعات العمل." },
        points: 0
      }
    ]
  },
  {
    id: 6,
    question: {
      fr: "Vous avez accès à des informations confidentielles sur les futurs projets de l'entreprise. En pause café, un collègue d'un autre service vous pose des questions.",
      ar: "لديك إمكانية الوصول إلى معلومات سرية حول مشاريع الشركة المستقبلية. أثناء استراحة القهوة، يسألك زميل من قسم آخر."
    },
    answers: [
      {
        text: { fr: "Je change courtoisement de sujet et je garde les informations strictement confidentielles.", ar: "أغير الموضوع بلطف وأحافظ على سرية المعلومات التامة." },
        points: 2
      },
      {
        text: { fr: "Je lui donne juste quelques indices sans entrer dans les détails précis.", ar: "أعطيه فقط بعض التلميحات دون الدخول في تفاصيل دقيقة." },
        points: 1
      },
      {
        text: { fr: "Je lui raconte ce que je sais, après tout c'est un collègue de l'entreprise.", ar: "أخبره بما أعرفه، ففي النهاية هو زميل في الشركة." },
        points: 0
      }
    ]
  },
  {
    id: 7,
    question: {
      fr: "L'équipe doit prendre une décision sur un outil à utiliser, mais vous n'êtes pas d'accord avec la majorité.",
      ar: "يجب على الفريق اتخاذ قرار بشأن أداة سيتم استخدامها، لكنك لا تتفق مع الأغلبية."
    },
    answers: [
      {
        text: { fr: "J'expose mes arguments de manière constructive, mais si la majorité décide autrement, j'accepte et j'avance.", ar: "أعرض حججي بطريقة بناءة، ولكن إذا قررت الأغلبية خلاف ذلك، أقبل وأمضي قدماً." },
        points: 2
      },
      {
        text: { fr: "Je continue d'insister sur mon idée pendant toute la réunion.", ar: "أستمر في الإصرار على فكرتي طوال الاجتماع." },
        points: 1
      },
      {
        text: { fr: "Je m'isole et je refuse d'utiliser l'outil choisi par l'équipe.", ar: "أعزل نفسي وأرفض استخدام الأداة التي اختارها الفريق." },
        points: 0
      }
    ]
  },
  {
    id: 8,
    question: {
      fr: "Vous avez terminé vos tâches plus tôt que prévu aujourd'hui.",
      ar: "لقد أنهيت مهامك في وقت أبكر مما كان متوقعا اليوم."
    },
    answers: [
      {
        text: { fr: "Je demande à mon manager ou mes collègues s'ils ont besoin d'aide, ou je m'avance sur d'autres projets.", ar: "أسأل مديري أو زملائي إذا كانوا بحاجة إلى مساعدة، أو أتقدم في مشاريع أخرى." },
        points: 2
      },
      {
        text: { fr: "Je passe le reste du temps à naviguer sur internet en attendant l'heure de partir.", ar: "أقضي بقية الوقت في تصفح الإنترنت بانتظار وقت الانصراف." },
        points: 1
      },
      {
        text: { fr: "Je pars plus tôt sans prévenir personne puisque j'ai fini mon travail.", ar: "أغادر مبكراً دون إخبار أحد بما أنني أنهيت عملي." },
        points: 0
      }
    ]
  },
  {
    id: 9,
    question: {
      fr: "Un client est très mécontent au téléphone et commence à hausser le ton.",
      ar: "عميل غاضب جداً على الهاتف ويبدأ في رفع صوته."
    },
    answers: [
      {
        text: { fr: "Je reste calme, poli, je le laisse s'exprimer et je cherche activement une solution à son problème.", ar: "أبقى هادئاً، مهذباً، أدعه يعبر عن نفسه وأبحث بجدية عن حل لمشكلته." },
        points: 2
      },
      {
        text: { fr: "Je commence à m'énerver aussi et je lui dis de se calmer s'il veut qu'on avance.", ar: "أبدأ في الانفعال أيضاً وأخبره أن يهدأ إذا أراد أن نتقدم." },
        points: 1
      },
      {
        text: { fr: "Je raccroche ou je transfère l'appel immédiatement sans rien dire pour me débarrasser du problème.", ar: "أغلق الخط أو أحول المكالمة فوراً دون أن أقول شيئاً للتخلص من المشكلة." },
        points: 0
      }
    ]
  },
  {
    id: 10,
    question: {
      fr: "Vous remarquez un processus interne qui ralentit toute l'équipe et pourrait être optimisé.",
      ar: "تلاحظ أن هناك عملية داخلية تبطئ الفريق بأكمله ويمكن تحسينها."
    },
    answers: [
      {
        text: { fr: "Je documente le problème et propose une solution concrète à mon manager lors d'une réunion.", ar: "أوثق المشكلة وأقترح حلاً ملموساً لمديري خلال اجتماع." },
        points: 2
      },
      {
        text: { fr: "J'en parle souvent à la machine à café en me plaignant que rien ne marche.", ar: "أتحدث عن ذلك كثيراً عند آلة القهوة شاكياً أن لا شيء يعمل." },
        points: 1
      },
      {
        text: { fr: "Je ne dis rien, cela ne fait pas partie de la fiche de poste de m'occuper de cela.", ar: "لا أقول شيئاً، فهذا ليس جزءاً من بطاقة الوصف الوظيفي للاهتمام به." },
        points: 0
      }
    ]
  }
];
