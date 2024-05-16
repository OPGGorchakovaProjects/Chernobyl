import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import './globalStyles.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './components/UI/Themes';
import Loading from './components/UI/Loading';

const PowerButton = lazy(() => import('./components/UI/PowerButton'));

const Main = lazy(() => import('./components/Main/Main'));
const HronologPage = lazy(() => import('./components/Other/HronologPage'));
const AppsPage = lazy(() => import('./components/Other/AppsPage'));
const BlogPage = lazy(() => import('./components/Likvidators/BlogPage'));
const VillagePage = lazy(() => import('./components/Village/VillagePage'));
const HistoryPage = lazy(() => import('./components/History/HistoryPage'));
const Documents = lazy(() => import('./components/Documents/Documents'));
const AlbumPage = lazy(() => import('./components/Album/albumPage'));
const Museum = lazy(() => import('./components/Museum/Museum'));
const ChernobylTests = lazy(() => import('./components/Tests/ChernobylTests'));

function App() {
  const location = useLocation();

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Suspense fallback={<Loading />}>
          <PowerButton />
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
