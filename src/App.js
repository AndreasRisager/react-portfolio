import './App.scss';
import { Router } from "@reach/router";
import { ParallaxProvider } from 'react-scroll-parallax';
import Home from './pages/Home';
import Work from './pages/Work';
import Case from './pages/Case';

export default function App() {
  return (
      <ParallaxProvider>
        <Router>
          <Home default />
          <Work path="/work" />
          <Case path="/case/iplaymusic" />
        </Router>
      </ParallaxProvider>
  );
}