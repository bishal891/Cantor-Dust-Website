import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import PhysicalAI from './pages/PhysicalAI';
import GeneralConsulting from './pages/GeneralConsulting';
import Insights from './pages/Insights';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="physicalai" element={<PhysicalAI />} />
          <Route path="physical-ai" element={<Navigate to="/physicalai" replace />} />
          <Route path="generalconsulting" element={<GeneralConsulting />} />
          <Route
            path="general-consulting"
            element={<Navigate to="/generalconsulting" replace />}
          />
          <Route path="insights" element={<Insights />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
