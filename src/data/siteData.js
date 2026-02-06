export const siteData = {
  candidateName: "Jean Dupont",
  campaignName: "Loury 2026",
  townName: "Loury",
  contact: {
    email: "contact@loury2026.fr",
    phone: "+33 6 12 34 56 78",
    whatsapp: "+33 6 12 34 56 78",
    address: "12 Rue de la Mairie, 45470 Loury",
    socials: {
      facebook: "https://facebook.com/loury2026",
      instagram: "https://instagram.com/loury2026",
    },
  },
  candidates: [
    {
      id: 1,
      name: "Jean Dupont",
      role: "Tête de liste",
      bio: "Né à Loury, Jean a toujours été impliqué dans la vie associative locale...",
      manifesto: "Je m'engage pour redonner à notre village son dynamisme d'antan tout en préservant notre cadre de vie unique.",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    // ... I'll add more mock candidates later, but let's start with a few
    ...Array.from({ length: 23 }, (_, i) => ({
      id: i + 2,
      name: `Candidat ${i + 2}`,
      role: "Conseiller municipal",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
      manifesto: "Ma motivation profonde est de servir les habitants de Loury.",
      photo: `https://images.unsplash.com/photo-${1500000000000 + i}?w=400&h=400&fit=crop`,
    })),
  ],
  program: {
    vision: "Une vision d'avenir pour Loury, alliant modernité et tradition, solidarité et innovation.",
    themes: [
      { id: "economy", label: "Économie", icon: "TrendingUp" },
      { id: "social", label: "Social", icon: "Users" },
      { id: "environment", label: "Environnement", icon: "Leaf" },
      { id: "culture", label: "Culture", icon: "Music" },
      { id: "youth", label: "Jeunesse", icon: "Baby" },
    ],
    proposals: [
      { id: 1, theme: "economy", title: "Soutien aux commerces locaux", description: "Mise en place d'une pépinière d'entreprises." },
      { id: 2, theme: "environment", title: "Végétalisation du centre-bourg", description: "Plantation de 100 arbres par an." },
      { id: 3, theme: "social", title: "Maison des seniors", description: "Création d'un espace de rencontre et de services dédié aux aînés." },
      // ... more proposals
    ],
    pdfLink: "/program-2026.pdf",
  },
  events: [
    {
      id: 1,
      title: "Réunion publique - Quartier Nord",
      date: "2026-03-15",
      time: "19:00",
      location: "Salle des fêtes",
      description: "Présentation de notre programme pour le quartier Nord.",
    },
    {
      id: 2,
      title: "Rencontre au marché",
      date: "2026-03-22",
      time: "10:00",
      location: "Place du Marché",
      description: "Venez échanger avec nos candidats sur le marché.",
    },
  ],
  news: [
    {
      id: 1,
      title: "Lancement de la campagne",
      date: "2026-02-01",
      category: "Blog",
      summary: "Une soirée mémorable pour le lancement de notre liste.",
      content: "Lorem ipsum dolor sit amet...",
      image: "https://images.unsplash.com/photo-1540910419892-4a32d2c32c62?w=800&q=80",
    },
    {
      id: 2,
      title: "Interview sur France 3 Region",
      date: "2026-02-10",
      category: "Presse",
      summary: "Jean Dupont explique sa vision pour Loury.",
      content: "Lorem ipsum dolor sit amet...",
      videoUrl: "https://youtube.com/watch?v=example",
      image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&q=80",
    },
  ],
  press: {
    contact: "Sophie Martin - 06 00 00 00 00 - presse@loury2026.fr",
    releases: [
      { id: 1, title: "Communiqué de presse - Investiture", date: "2026-01-15", link: "#" },
    ],
    kitLink: "/dossier-presse.pdf",
    photos: [
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&q=80",
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&q=80",
    ],
  },
};
