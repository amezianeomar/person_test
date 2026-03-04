# 🎯 Évaluation du Comportement Professionnel (Soft Skills)

Une application web interactive conçue pour tester et évaluer les "soft skills" (compétences comportementales) en milieu professionnel. Le test comprend 10 mises en situation courantes en entreprise (télétravail, gestion de conflit, ponctualité, etc.).

L'application guide l'utilisateur à travers un questionnaire immersif et fluide, calcule un score global, puis génère **un certificat d'évaluation au format PDF officiel**, téléchargeable instantanément depuis le navigateur.

---

## ✨ Fonctionnalités Principales

*   **Expérience Interactive :** Quiz fluide avec barre de progression en temps réel, animations au clic, et des transitions optimisées.
*   **Évaluation des Soft Skills :** Une base de 10 scénarios complexes nécessitant une prise de décision professionnelle, où chaque réponse rapporte un certain nombre de points.
*   **Résultats & Badges Personnalisés :** Le système calcule le score sur 20 et attribue un macaron (Expert, Bon, Attention) accompagné d'un message d'encouragement dédié.
*   **Génération de Certificat PDF :** L'écran de résultats inclut un système d'export utilisant `html2canvas` et `jsPDF` pour recréer au millimètre près un certificat officiel au format A4 Paysage.
*   **Mobile-Friendly :** Une interface en mode "Responsive Design" où le certificat reste parfait pour l'export, même s'il devient défilable horizontalement sur les petits écrans.

---

## 🛠️ Stack Technique

*   **Frontend Library :** [React](https://reactjs.org/) (version 18)
*   **TypeScript :** Pour un code fortement typé et l'interface `UserData`, `Question`, etc.
*   **Styling :** [Tailwind CSS](https://tailwindcss.css/) pour une UI moderne, propre, et rapide à designer via des classes utilitaires (gradients, ombres personnalisées).
*   **Icônes :** [Lucide React](https://lucide.dev/) (icônes professionnelles intégrées : _Trophy, AlertCircle, Briefcase, CheckCircle..._)
*   **Bundler Web :** [Vite JS](https://vitejs.dev/) - pour un développement léger et une compilation très rapide.
*   **Génération PDF (Client-Side) :** `jsPDF` + `html2canvas`

---

## 🚀 Démarrer le Projet en Local

Suivez ces étapes pour récupérer le projet sur votre machine locale et lancer l'environnement de développement :

1. **Cloner le répertoire :**
   ```bash
   git clone https://github.com/amezianeomar/person_test.git
   cd person_test
   ```

2. **Installer les dépendances :**
   ```bash
   npm install
   ```

3. **Lancer l'application :**
   ```bash
   npm run dev
   ```
   L'application sera accessible (généralement) à l'adresse `http://localhost:5173`.

---

## 📂 Structure du Code Source (`src/`)

```text
src/
├── components/
│   ├── WelcomeScreen.tsx  // Écran d'accueil avec validation du nom (2 caractères minimum).
│   ├── Quiz.tsx           // Cœur du test, affichage des options et barre de progression.
│   └── Results.tsx        // Affichage du feedback, badge, et encadré de génération du PDF certifié.
├── data/
│   └── questions.ts       // Base de données des 10 mises en situation (points: 0, 1, ou 2).
├── types.ts               // Interfaces TypeScript principales (Answer, Question, UserData, Screen).
├── App.tsx                // Composant principal gérant le cycle de vie de l'application (routing interne).
├── main.tsx               // Point d'entrée de l'application React.
└── index.css              // Fichier base de Tailwind CSS.
```

---

## 📄 Licence et Contribuer

Cette application a été développée à titre indicatif et éducatif.  
N'hésitez pas à forker le répertoire, créer une branche et soumettre des "Pull Requests" si vous souhaitez ajouter ou modifier un lot de questions !
