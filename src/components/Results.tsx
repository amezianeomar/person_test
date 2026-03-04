import React, { useRef, useState } from 'react';
import { Download, Trophy, Award, AlertCircle, Briefcase } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { UserData } from '../types';

interface ResultsProps {
  data: UserData;
}

export const Results: React.FC<ResultsProps> = ({ data }) => {
  const { name, score, maxScore } = data;
  const certificateRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Scoring logic
  let badgeInfo = {
    title: "",
    icon: <Trophy size={48} className="text-yellow-600" />,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    message: ""
  };

  if (score >= 18) {
    badgeInfo = {
      title: "Expert / Modèle Professionnel",
      icon: <Trophy size={48} className="text-yellow-600" />,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      message: "Excellente maîtrise des codes professionnels. Vous êtes un exemple pour vos collègues."
    };
  } else if (score >= 12) {
    badgeInfo = {
      title: "Bon / En Développement",
      icon: <Award size={48} className="text-blue-600" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      message: "De solides bases professionnelles, avec quelques axes d'amélioration à travailler."
    };
  } else {
    badgeInfo = {
      title: "Attention / Revoir les Bases",
      icon: <AlertCircle size={48} className="text-orange-600" />,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      message: "Il est important de revoir certaines postures professionnelles. Ne vous découragez pas !"
    };
  }

  const currentDate = new Date().toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const handleDownloadPDF = async () => {
    if (!certificateRef.current) return;
    setIsGenerating(true);

    try {
      const element = certificateRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      // Center vertically if height is smaller than A4
      const yPos = pdfHeight < pdf.internal.pageSize.getHeight()
        ? (pdf.internal.pageSize.getHeight() - pdfHeight) / 2
        : 0;

      pdf.addImage(imgData, 'JPEG', 0, yPos, pdfWidth, pdfHeight);
      pdf.save(`certificat-${name.replace(/\s+/g, '-').toLowerCase()}.pdf`);
    } catch (error) {
      console.error("Erreur lors de la génération du PDF:", error);
      alert("Une erreur est survenue lors de la création du PDF.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 md:py-12 flex flex-col items-center">

      {/* Action Bar (Mobile First) */}
      <div className="w-full max-w-[1000px] mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center sm:text-left">
          Vos Résultats
        </h1>
        <button
          onClick={handleDownloadPDF}
          disabled={isGenerating}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {isGenerating ? (
            <span className="flex items-center gap-2">
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Génération...
            </span>
          ) : (
            <>
              <Download size={20} />
              Télécharger mon Bilan PDF
            </>
          )}
        </button>
      </div>

      {/* Responsive Wrapper for PDF generation (hidden or scaled to fit visually) */}
      <div className="w-full max-w-[1000px] overflow-x-auto pb-4 custom-scrollbar">
        <div style={{ minWidth: '1000px' }}></div>
        {/* Actual Certificate Element (fixed width for consistent PDF output) */}
        <div
          ref={certificateRef}
          className="bg-white p-8 sm:p-12 mb-8 mx-auto"
          style={{
            width: '1000px', // Fixed width for A4 landscape ratio mapping
            minHeight: '650px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
            border: '8px solid #1e3a8a', // blue-900 equivalent
            position: 'relative',
            transformOrigin: 'top left',
          }}
        >

          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <img src="/OFPPT.png" alt="OFPPT" className="h-20 object-contain" />
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-slate-100 text-blue-900">
              <Briefcase size={40} />
            </div>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-blue-900 tracking-tight uppercase mb-2">
              Certificat d'Évaluation
            </h2>
            <div className="w-64 h-1 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 mx-auto rounded-full"></div>
            <p className="text-xl text-slate-500 mt-4 font-medium uppercase tracking-widest">
              Comportement Professionnel (Soft Skills)
            </p>
          </div>

          <div className="text-center mb-12">
            <p className="text-lg text-slate-600 mb-2">Décerné à</p>
            <h3 className="text-5xl font-bold text-slate-900 mb-1">{name}</h3>
          </div>

          {/* Score & Badge Box */}
          <div className={`p-8 rounded-2xl border-2 flex items-center justify-between bg-slate-50 mx-auto max-w-3xl mb-12 ${badgeInfo.borderColor}`}>
            <div className="flex items-center gap-6">
              <div className={`p-4 rounded-full ${badgeInfo.bgColor}`}>
                {badgeInfo.icon}
              </div>
              <div>
                <h4 className={`text-2xl font-bold mb-1 ${badgeInfo.color}`}>
                  {badgeInfo.title}
                </h4>
                <p className="text-slate-600 text-lg max-w-md">
                  {badgeInfo.message}
                </p>
              </div>
            </div>

            <div className="text-right border-l-2 border-slate-200 pl-8">
              <p className="text-slate-500 text-sm font-semibold uppercase mb-1">Score Obtenu</p>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-slate-900">{score}</span>
                <span className="text-2xl font-bold text-slate-400">/{maxScore}</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end border-t-2 border-slate-100 pt-6">
            <div>
              <p className="text-slate-400 text-sm">Date d'évaluation</p>
              <p className="text-slate-700 font-semibold">{currentDate}</p>
            </div>
            <div className="text-right">
              <p className="text-slate-400 text-sm">Identifiant Unique</p>
              <p className="text-slate-700 font-mono text-sm">
                EV-{new Date().getFullYear()}-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}-PRO
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Hint if needed */}
      <p className="text-slate-500 text-sm text-center sm:hidden px-4">
        Le certificat complet est optimisé pour le format bureau et sera parfaitement lisible une fois téléchargé en PDF. Vous pouvez glisser vers la droite pour le voir en entier.
      </p>

    </div>
  );
};
