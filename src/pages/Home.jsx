import MainLayout from '../layouts/MainLayout';
import Hero from '../components/home/Hero';
import CandidateSlideshow from '../components/home/CandidateSlideshow';
import ProjectSlideshow from '../components/home/ProjectSlideshow';
import HomeAgenda from '../components/home/HomeAgenda';
import HomeNews from '../components/home/HomeNews';

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <CandidateSlideshow />
      <ProjectSlideshow />
      <HomeAgenda />
      <HomeNews />
    </MainLayout>
  );
};

export default Home;
