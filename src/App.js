import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import './globalStyles.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './components/Themes';
import Loading from './subComponents/Loading';

const Main = lazy(() => import('./components/Main'));
const HronologPage = lazy(() => import('./components/HronologPage'));
const AppsPage = lazy(() => import('./components/AppsPage'));
const BlogPage = lazy(() => import('./components/BlogPage'));
const VillagePage = lazy(() => import('./components/VillagePage'));
const HistoryPage = lazy(() => import('./components/HistoryPage'));
const Documents = lazy(() => import('./components/Documents'));
const AlbumPage = lazy(() => import('./albumComponents/albumPage'));
const Museum = lazy(() => import('./components/Museum'));
const ChernobylTests = lazy(() => import('./components/ChernobylTests'));

function App() {
  const location = useLocation();

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Suspense fallback={<Loading />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Main />} />

              <Route path="/hronolog" element={<HronologPage />} />

              <Route path="/blog" element={<BlogPage />} />

              <Route path="/village" element={<VillagePage />} />

              <Route path="/app" element={<AppsPage />} />

              <Route path="/history" element={<HistoryPage />} />

              <Route path="/documents" element={<Documents />} />

              <Route path="/photoalbum" element={<AlbumPage />} />

              <Route path="/museum" element={<Museum />} />

              <Route path="/ChernobylTests" element={<ChernobylTests />} />

              <Route path="*" element={<Main />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
