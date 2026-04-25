import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import AiOperatingSystem from './pages/AiOperatingSystem';
import Partnership from './pages/Partnership';
import CaseStudies from './pages/CaseStudies';
import Clients from './pages/Clients';
import { ContactProvider } from './context/ContactContext';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ContactProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/ai-operating-system" element={<AiOperatingSystem />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/clients" element={<Clients />} />
          </Routes>
        </Layout>
      </ContactProvider>
    </BrowserRouter>
  );
}

export default App;
