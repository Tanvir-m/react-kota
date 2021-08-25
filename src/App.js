import Home from './pages/Home';
import Work from './pages/Work';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Context from './context/context';

function App() {
  return (
    <>
      <Context>
        <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/work">
            <Work />
          </Route>
        </Router>
      </Context>
    </>
  );
}

export default App;
