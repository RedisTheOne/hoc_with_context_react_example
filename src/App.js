import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import About from './containers/About';
import { GeneralProvider } from './context/General';
import Home from './containers/Home';

function App() {
  return (
    <div className="App">
      <GeneralProvider>
        <Router>
          <Switch>
            <Route exact component={Home} path={'/'} />
            <Route exact component={About} path={'/about'} />
          </Switch>
        </Router>
      </GeneralProvider>
    </div>
  );
}

export default App;
