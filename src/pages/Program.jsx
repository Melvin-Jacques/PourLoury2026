import { useState } from 'react';
import { Download, TrendingUp, Users, Leaf, Music, Baby, ChevronRight } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';
import { siteData } from '../data/siteData';

const iconMap = {
  TrendingUp,
  Users,
  Leaf,
  Music,
  Baby,
};

const Program = () => {
  const [activeTheme, setActiveTheme] = useState('all');
  const { themes, proposals, vision, pdfLink } = siteData.program;

  const filteredProposals = activeTheme === 'all'
    ? proposals
    : proposals.filter(p => p.theme === activeTheme);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Notre Projet pour Loury</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {vision}
          </p>
          <div className="mt-10">
            <a
              href={pdfLink}
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-blue-500/20"
            >
              <Download className="mr-2 h-5 w-5" />
              Télécharger le programme complet (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Thematic Filters */}
      <section className="py-12 bg-white border-b sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <div className="flex space-x-4 min-w-max pb-2">
            <button
              onClick={() => setActiveTheme('all')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeTheme === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Tous les thèmes
            </button>
            {themes.map((theme) => {
              const Icon = iconMap[theme.icon];
              return (
                <button
                  key={theme.id}
                  onClick={() => setActiveTheme(theme.id)}
                  className={`flex items-center px-6 py-2 rounded-full font-medium transition-colors ${
                    activeTheme === theme.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {Icon && <Icon className="mr-2 h-4 w-4" />}
                  {theme.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proposals List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProposals.map((proposal) => {
              const theme = themes.find(t => t.id === proposal.theme);
              const Icon = iconMap[theme?.icon];

              return (
                <div key={proposal.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start group hover:border-blue-200 transition-colors">
                  <div className="p-3 bg-blue-50 rounded-xl mr-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                  <div>
                    <span className="text-blue-600 text-xs font-bold uppercase tracking-wider">{theme?.label}</span>
                    <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">{proposal.title}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {proposal.description}
                    </p>
                    <button className="mt-4 text-blue-600 font-semibold flex items-center text-sm hover:underline">
                      Détails de la mesure
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredProposals.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">Aucune proposition trouvée pour ce thème.</p>
            </div>
          )}
        </div>
      </section>

      {/* Highlights / Mesures phares */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Nos 10 mesures phares</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="flex items-center py-4 border-b border-slate-200">
                <span className="text-4xl font-black text-blue-200 mr-6">{(i + 1).toString().padStart(2, '0')}</span>
                <p className="text-lg font-semibold text-slate-800">
                  Mesure phare n°{i+1} : Une action concrète pour améliorer votre quotidien.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Program;
