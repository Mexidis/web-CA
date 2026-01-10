import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ServicePackages } from './components/ServicePackages';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ProjectDetail } from './components/ProjectDetail';
import ScrollToHash from './components/utils/ScrollToHash';

function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <ServicePackages />
      <Portfolio />
      <Process />
      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proyecto/:slug" element={<ProjectDetail />} />
      </Routes>
      <ScrollToHash />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}