import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    question: "Vous avez une réunion importante avec toute l'équipe dans 10 minutes. Que faites-vous ?",
    answers: [
      { text: "J'arrive avec 5 minutes d'avance pour m'installer et préparer mes notes.", points: 2 },
      { text: "J'arrive à l'heure exacte du début de la réunion.", points: 1 },
      { text: "J'arrive avec 5-10 minutes de retard, de toute façon ça commence toujours en retard.", points: 0 }
    ]
  },
  {
    id: 2,
    question: "Votre manager vous fait une critique constructive sur votre dernier projet. Quelle est votre réaction ?",
    answers: [
      { text: "J'écoute attentivement, je pose des questions pour comprendre et je l'applique la prochaine fois.", points: 2 },
      { text: "J'accepte la critique mais j'essaie de justifier pourquoi j'ai fait comme ça.", points: 1 },
      { text: "Je le prends personnellement et je montre mon mécontentement.", points: 0 }
    ]
  },
  {
    id: 3,
    question: "Un de vos collègues est débordé et vous demande de l'aide sur une tâche urgente, alors que vous avez un peu de temps libre.",
    answers: [
      { text: "Je propose mon aide volontiers et on s'organise pour avancer ensemble.", points: 2 },
      { text: "Je l'aide mais je lui rappelle que ce n'est pas mon travail initialement.", points: 1 },
      { text: "Je lui dis que j'ai mes propres problèmes et qu'il doit s'organiser mieux.", points: 0 }
    ]
  },
  {
    id: 4,
    question: "Vous venez de vous rendre compte que vous avez fait une erreur importante dans un document partagé avec le client.",
    answers: [
      { text: "Je préviens immédiatement mon responsable en proposant une solution pour corriger l'erreur.", points: 2 },
      { text: "Je corrige l'erreur discrètement en espérant que personne ne l'a remarquée.", points: 1 },
      { text: "J'attends qu'on me le signale pour en parler, peut-être que ça passera inaperçu.", points: 0 }
    ]
  },
  {
    id: 5,
    question: "Vous êtes en télétravail aujourd'hui. Comment gérez-vous votre journée ?",
    answers: [
      { text: "Je garde le même rythme qu'au bureau, je suis joignable et je signale mes moments d'indisponibilité.", points: 2 },
      { text: "Je travaille mais je réponds un peu moins vite aux messages car je fais d'autres choses en parallèle.", points: 1 },
      { text: "J'en profite pour faire des courses et mes tâches personnelles pendant les heures de travail.", points: 0 }
    ]
  },
  {
    id: 6,
    question: "Vous avez accès à des informations confidentielles sur les futurs projets de l'entreprise. En pause café, un collègue d'un autre service vous pose des questions.",
    answers: [
      { text: "Je change courtoisement de sujet et je garde les informations strictement confidentielles.", points: 2 },
      { text: "Je lui donne juste quelques indices sans entrer dans les détails précis.", points: 1 },
      { text: "Je lui raconte ce que je sais, après tout c'est un collègue de l'entreprise.", points: 0 }
    ]
  },
  {
    id: 7,
    question: "L'équipe doit prendre une décision sur un outil à utiliser, mais vous n'êtes pas d'accord avec la majorité.",
    answers: [
      { text: "J'expose mes arguments de manière constructive, mais si la majorité décide autrement, j'accepte et j'avance.", points: 2 },
      { text: "Je continue d'insister sur mon idée pendant toute la réunion.", points: 1 },
      { text: "Je m'isole et je refuse d'utiliser l'outil choisi par l'équipe.", points: 0 }
    ]
  },
  {
    id: 8,
    question: "Vous avez terminé vos tâches plus tôt que prévu aujourd'hui.",
    answers: [
      { text: "Je demande à mon manager ou mes collègues s'ils ont besoin d'aide, ou je m'avance sur d'autres projets.", points: 2 },
      { text: "Je passe le reste du temps à naviguer sur internet en attendant l'heure de partir.", points: 1 },
      { text: "Je pars plus tôt sans prévenir personne puisque j'ai fini mon travail.", points: 0 }
    ]
  },
  {
    id: 9,
    question: "Un client est très mécontent au téléphone et commence à hausser le ton.",
    answers: [
      { text: "Je reste calme, poli, je le laisse s'exprimer et je cherche activement une solution à son problème.", points: 2 },
      { text: "Je commence à m'énerver aussi et je lui dis de se calmer s'il veut qu'on avance.", points: 1 },
      { text: "Je raccroche ou je transfère l'appel immédiatement sans rien dire pour me débarrasser du problème.", points: 0 }
    ]
  },
  {
    id: 10,
    question: "Vous remarquez un processus interne qui ralentit toute l'équipe et pourrait être optimisé.",
    answers: [
      { text: "Je documente le problème et propose une solution concrète à mon manager lors d'une réunion.", points: 2 },
      { text: "J'en parle souvent à la machine à café en me plaignant que rien ne marche.", points: 1 },
      { text: "Je ne dis rien, cela ne fait pas partie de la fiche de poste de m'occuper de cela.", points: 0 }
    ]
  }
];
