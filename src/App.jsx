import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Candidates from './pages/Candidates';
import Program from './pages/Program';
import News from './pages/News';
import MainLayout from './layouts/MainLayout';

// Simple placeholder components for legal pages
const LegalPage = ({ title }) => (
  <MainLayout>
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8">{title}</h1>
      <div className="prose prose-slate max-w-none">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
        <p>Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.</p>
      </div>
    </div>
  </MainLayout>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/program" element={<Program />} />
        <Route path="/news" element={<News />} />
        <Route path="/mentions-legales" element={<LegalPage title="Mentions Légales" />} />
        <Route path="/confidentialite" element={<LegalPage title="Politique de Confidentialité" />} />
      </Routes>
    </Router>
  );
}

export default App;
