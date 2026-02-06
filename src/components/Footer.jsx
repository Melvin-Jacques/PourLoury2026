import { Facebook, Instagram, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Campaign Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{siteData.campaignName}</h3>
            <p className="text-slate-400 mb-4">
              Ensemble pour l'avenir de notre village. Une équipe à votre écoute pour construire demain.
            </p>
            <div className="flex space-x-4">
              <a href={siteData.contact.socials.facebook} className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href={siteData.contact.socials.instagram} className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-slate-400">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>{siteData.contact.phone}</span>
              </li>
              <li className="flex items-center text-slate-400">
                <MessageCircle className="h-5 w-5 mr-3 flex-shrink-0 text-green-500" />
                <a href={`https://wa.me/${siteData.contact.whatsapp.replace(/\s+/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center text-slate-400">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>{siteData.contact.email}</span>
              </li>
              <li className="flex items-center text-slate-400">
                <MapPin className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>{siteData.contact.address}</span>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informations</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
              </li>
              <li>
                <Link to="/confidentialite" className="hover:text-white transition-colors">Politique de confidentialité (RGPD)</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {siteData.campaignName}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
