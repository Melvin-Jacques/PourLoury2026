import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { siteData } from '../../data/siteData';

const CandidateSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(() => Math.floor(Math.random() * siteData.candidates.length));
  const candidates = siteData.candidates;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % candidates.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [candidates.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + candidates.length) % candidates.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % candidates.length);
  };

  const currentCandidate = candidates[currentIndex];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">Notre équipe : Une force plurielle</h2>

        <div className="relative bg-slate-50 rounded-2xl overflow-hidden shadow-sm">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 h-80 md:h-[450px]">
              <img
                src={currentCandidate.photo}
                alt={currentCandidate.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-12">
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">{currentCandidate.role}</span>
              <h3 className="text-3xl font-bold mt-2 mb-4 text-slate-900">{currentCandidate.name}</h3>
              <p className="text-slate-600 mb-6 line-clamp-4 italic">
                "{currentCandidate.manifesto}"
              </p>
              <Link
                to="/candidates"
                className="inline-flex items-center text-blue-600 font-semibold hover:underline"
              >
                Voir son profil complet
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 pointer-events-none">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-white/80 shadow-md hover:bg-white pointer-events-auto transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-slate-900" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white/80 shadow-md hover:bg-white pointer-events-auto transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-slate-900" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidateSlideshow;
