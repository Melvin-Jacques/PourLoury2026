import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, TrendingUp, Users, Leaf, Music, Baby } from 'lucide-react';
import { siteData } from '../../data/siteData';

const iconMap = {
  TrendingUp,
  Users,
  Leaf,
  Music,
  Baby,
};

const ProjectSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(() => Math.floor(Math.random() * siteData.program.proposals.length));
  const proposals = siteData.program.proposals;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % proposals.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [proposals.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + proposals.length) % proposals.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % proposals.length);
  };

  const currentProposal = proposals[currentIndex];
  const theme = siteData.program.themes.find(t => t.id === currentProposal.theme);
  const IconComponent = iconMap[theme?.icon] || TrendingUp;

  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Nos engagements phares</h2>

        <div className="relative max-w-4xl mx-auto bg-slate-800 p-8 md:p-16 rounded-3xl border border-slate-700">
          <div className="flex flex-col items-center text-center">
            <div className="p-4 bg-blue-600/20 rounded-2xl mb-6">
              <IconComponent className="h-12 w-12 text-blue-500" />
            </div>
            <span className="text-blue-400 font-medium mb-2">{theme?.label}</span>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">{currentProposal.title}</h3>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl">
              {currentProposal.description}
            </p>
            <Link
              to="/program"
              className="px-6 py-2 border border-slate-600 rounded-full hover:bg-slate-700 transition-colors"
            >
              En savoir plus sur notre programme
            </Link>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none hidden md:flex">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full hover:bg-slate-700 pointer-events-auto transition-colors"
            >
              <ChevronLeft className="h-8 w-8 text-slate-400" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full hover:bg-slate-700 pointer-events-auto transition-colors"
            >
              <ChevronRight className="h-8 w-8 text-slate-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlideshow;
