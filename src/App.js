import Home from './pages/Home';
import Work from './pages/Work';
import Services from './pages/Services';
import Studio from './pages/Studio';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/work">
          <Work />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/studio">
          <Studio />
        </Route>
      </Router>
    </>
  );
}

export default App;
