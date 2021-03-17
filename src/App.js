import './App.scss';
import { Router } from "@reach/router";
import Home from './pages/Home';
import Work from './pages/Work';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Home default />
        <Work path="/work" />
      </Router>
    </div>
  );
}