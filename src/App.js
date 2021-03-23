import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import About from './containers/About';
import Auth from './containers/Auth';
import { GeneralProvider } from './context/General';
import Home from './containers/Home';
import LogIn from './containers/LogIn';

function App() {
  return (
    <div className="App">
      <GeneralProvider>
        <Router>
          <Switch>
            <Route exact component={Home} path={'/'} />
            <Route exact component={About} path={'/about'} />
            <Route exact component={Auth} path={'/auth'} />
            <Route exact component={LogIn} path={'/login'} />
          </Switch>
        </Router>
      </GeneralProvider>
    </div>
  );
}

export default App;
