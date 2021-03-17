import './App.scss';
import { Router } from "@reach/router";
import Home from './pages/Home';
import Work from './pages/Work';
import Case from './pages/Case';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Home default />
        <Work path="/work" />
        <Case path="/case/iplaymusic" />
      </Router>
    </div>
  );
}