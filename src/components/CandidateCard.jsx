import { Quote } from 'lucide-react';

const CandidateCard = ({ candidate }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
      <div className="aspect-square relative overflow-hidden">
        <img
          src={candidate.photo}
          alt={candidate.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-white text-sm italic line-clamp-3">
            <Quote className="h-4 w-4 inline mr-2 opacity-50" />
            {candidate.manifesto}
          </p>
        </div>
      </div>
      <div className="p-6">
        <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">{candidate.role}</span>
        <h3 className="text-xl font-bold text-slate-900 mt-1">{candidate.name}</h3>
        <p className="text-slate-600 mt-3 text-sm line-clamp-4">
          {candidate.bio}
        </p>
      </div>
    </div>
  );
};

export default CandidateCard;
