import { GeneralProvider } from './context/General';
import Home from './containers/Home';

function App() {
  return (

    <div className="App">
      <GeneralProvider>
        <Home title={'AAAAAs'} />
      </GeneralProvider>
    </div>
  );
}

export default App;
