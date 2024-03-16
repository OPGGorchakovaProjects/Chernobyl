import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import GlobalStyle from './globalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './components/Themes';
import Loading from './subComponents/Loading';

//Components
const Main = lazy(() => import('./components/Main'));
const HronologPage = lazy(() => import('./components/HronologPage'));
const AppsPage = lazy(() => import('./components/AppsPage'));
const BlogPage = lazy(() => import('./components/BlogPage'));
const VillagePage = lazy(() => import('./components/VillagePage'));
const HistoryPage = lazy(() => import('./components/HistoryPage'));
const AlbumPage = lazy(() => import('./albumComponents/albumPage'));

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />

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
              <Route path="/photoalbum" element={<AlbumPage />} />

              <Route path="*" element={<Main />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
