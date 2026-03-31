import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import AiOperatingSystem from './pages/AiOperatingSystem';
import Partnership from './pages/Partnership';
import CaseStudies from './pages/CaseStudies';

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
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ai-operating-system" element={<AiOperatingSystem />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/case-studies" element={<CaseStudies />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
