import { Link } from 'react-router-dom';
import { siteData } from '../../data/siteData';

const Hero = () => {
  return (
    <section className="relative bg-slate-900 h-[600px] flex items-center overflow-hidden">
      {/* Background Image Placeholder with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2000"
          alt="Loury Village"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in">
          {siteData.campaignName}
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl text-slate-200">
          Une équipe engagée pour {siteData.townName}. Découvrez notre vision et notre programme pour les années à venir.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/program"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-colors"
          >
            Découvrir notre programme
          </Link>
          <Link
            to="/candidates"
            className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-3 rounded-full font-bold transition-colors"
          >
            Notre équipe
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
