import MainLayout from '../layouts/MainLayout';
import CandidateCard from '../components/CandidateCard';
import { siteData } from '../data/siteData';

const Candidates = () => {
  return (
    <MainLayout>
      <div className="bg-slate-900 py-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Notre Équipe</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            24 femmes et hommes engagés pour Loury, issus de tous horizons et unis par une même passion pour notre village.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {siteData.candidates.map((candidate) => (
            <CandidateCard key={candidate.id} candidate={candidate} />
          ))}
        </div>
      </div>

      <div className="bg-blue-50 py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">"Pourquoi je m'engage"</h2>
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm italic text-slate-700 text-lg leading-relaxed relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white p-4 rounded-full">
              <span className="font-bold">LETTRE OUVERTE</span>
            </div>
            <p className="mb-6">
              "Chers habitants de Loury, mon engagement est né d'une volonté simple : redonner du sens à notre action commune..."
            </p>
            <p className="mb-6">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo."
            </p>
            <p className="font-bold text-slate-900 not-italic">— {siteData.candidateName}</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Candidates;
