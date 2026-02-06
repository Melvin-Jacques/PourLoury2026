import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { siteData } from '../../data/siteData';

const HomeNews = () => {
  const latestNews = siteData.news.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Fil d'actualité</h2>
            <p className="text-slate-600 mt-2">Suivez les dernières étapes de notre campagne.</p>
          </div>
          <Link to="/news" className="hidden sm:flex items-center text-blue-600 font-bold hover:underline">
            Toutes les actualités
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestNews.map((news) => (
            <article key={news.id} className="group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {news.videoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                    <PlayCircle className="h-16 w-16 text-white opacity-80" />
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900">
                    {news.category}
                  </span>
                </div>
              </div>
              <span className="text-sm text-slate-500 font-medium">{new Date(news.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <h3 className="text-xl font-bold mt-2 mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                {news.title}
              </h3>
              <p className="text-slate-600 line-clamp-2">
                {news.summary}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 sm:hidden flex justify-center">
          <Link to="/news" className="inline-flex items-center text-blue-600 font-bold hover:underline">
            Toutes les actualités
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeNews;
