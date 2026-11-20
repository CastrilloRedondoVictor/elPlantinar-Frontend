import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import ResourcesPage from './pages/ResourcesPage.jsx';
import ArticlePage from './pages/ArticlePage.jsx';
import LegalNotice from './pages/LegalNotice.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="recursos" element={<ResourcesPage />} />
        <Route path="recursos/:slug" element={<ArticlePage />} />
        <Route path="aviso-legal" element={<LegalNotice />} />
        <Route path="privacidad" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
