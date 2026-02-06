import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { siteData } from '../../data/siteData';

const HomeAgenda = () => {
  const nextEvent = siteData.events[0]; // Next event is usually the first one in the list

  if (!nextEvent) return null;

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/3 bg-blue-600 text-white p-12 flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4">Agenda</h2>
            <p className="text-blue-100 mb-6 text-lg">
              Venez nous rencontrer et échanger sur l'avenir de notre commune.
            </p>
            <button className="inline-flex items-center justify-center lg:justify-start font-semibold text-white hover:underline">
              Voir tout l'agenda
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="lg:w-2/3 p-12">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold mb-6">PROCHAIN ÉVÉNEMENT</span>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">{nextEvent.title}</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center text-slate-600">
                <Calendar className="h-6 w-6 mr-3 text-blue-600" />
                <span className="text-lg font-medium">{new Date(nextEvent.date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
              </div>
              <div className="flex items-center text-slate-600">
                <Clock className="h-6 w-6 mr-3 text-blue-600" />
                <span className="text-lg font-medium">{nextEvent.time}</span>
              </div>
              <div className="flex items-center text-slate-600">
                <MapPin className="h-6 w-6 mr-3 text-blue-600" />
                <span className="text-lg font-medium">{nextEvent.location}</span>
              </div>
            </div>

            <p className="text-slate-600 text-lg">
              {nextEvent.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAgenda;
