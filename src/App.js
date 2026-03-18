import React, { useContext, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { ThemeContext } from './contexts/ThemeContext';
import ScrollToTop from './utils/ScrollToTop'
import './App.css'

const Main = lazy(() => import('./pages/Main/Main'));
const BlogPage = lazy(() => import('./pages/Blog/BlogPage'));
const ProjectPage = lazy(() => import('./pages/Project/ProjectPage'));
const BackToTop = lazy(() => import('./components/BackToTop/BackToTop'));

function App() {

  const { theme } = useContext(ThemeContext);

  console.log("%cPORTFOLIO GILANG", `color:${theme.primary}; font-size:50px`);
  console.log("%chttps://github.com/gilangmubharak", `color:${theme.tertiary}; font-size:20px`);
  // console.log = console.warn = console.error = () => {};

  return (
    <div className="app">
      <Router>
        <ScrollToTop/>
        <main id='main-content'>
          <Suspense fallback={<div />}>
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/blog" exact component={BlogPage} />
              <Route path="/projects" exact component={ProjectPage} />

              <Redirect to="/" />
            </Switch>
          </Suspense>
        </main>
      </Router>
      <Suspense fallback={null}>
        <BackToTop />
      </Suspense>
    </div>
  );
}

export default App;
