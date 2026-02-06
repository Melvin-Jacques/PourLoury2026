import { Download, Mail, Phone, ExternalLink, PlayCircle } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';
import { siteData } from '../data/siteData';

const News = () => {
  const { news, press } = siteData;

  return (
    <MainLayout>
      <div className="bg-slate-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Actualités & Presse</h1>
          <p className="text-xl text-slate-400">Suivez notre campagne au jour le jour.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main News Feed */}
          <div className="lg:col-span-2 space-y-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 pb-4 border-b">Blog de campagne</h2>
            {news.map((item) => (
              <article key={item.id} className="group">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-sm">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {item.videoUrl && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                          <PlayCircle className="h-12 w-12 text-white opacity-80" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase">
                        {item.category}
                      </span>
                      <span className="text-slate-500 text-sm">
                        {new Date(item.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-4">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                      {item.summary}
                    </p>
                    <button className="text-blue-600 font-bold hover:underline">Lire la suite</button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Press Sidebar */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8 pb-4 border-b">Espace Presse</h2>

              {/* Press Contact */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                <h3 className="font-bold text-slate-900 mb-4">Contact Presse</h3>
                <p className="text-slate-600 text-sm mb-6">{press.contact}</p>
                <div className="space-y-3">
                  <a href={`mailto:${press.contact.split(' - ')[2]}`} className="flex items-center text-blue-600 text-sm font-semibold hover:underline">
                    <Mail className="h-4 w-4 mr-2" />
                    Envoyer un email
                  </a>
                </div>
              </div>

              {/* Downloads */}
              <div className="space-y-4 mb-8">
                <a
                  href={press.kitLink}
                  className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors shadow-sm"
                >
                  <div className="flex items-center">
                    <Download className="h-5 w-5 text-slate-400 mr-3" />
                    <span className="font-semibold text-slate-700">Dossier de Presse</span>
                  </div>
                  <span className="text-xs text-slate-400">PDF</span>
                </a>
              </div>

              {/* Press Releases */}
              <h3 className="font-bold text-slate-900 mb-4">Communiqués</h3>
              <ul className="space-y-4">
                {press.releases.map((release) => (
                  <li key={release.id} className="group">
                    <a href={release.link} className="block">
                      <span className="text-xs text-slate-500 font-medium">{new Date(release.date).toLocaleDateString('fr-FR')}</span>
                      <p className="text-slate-800 font-medium group-hover:text-blue-600 transition-colors">
                        {release.title}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Press Photos */}
              <h3 className="font-bold text-slate-900 mt-12 mb-4">Photos HD</h3>
              <div className="grid grid-cols-2 gap-4">
                {press.photos.map((photo, i) => (
                  <div key={i} className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
                    <img src={photo} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Download className="text-white h-6 w-6" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default News;
