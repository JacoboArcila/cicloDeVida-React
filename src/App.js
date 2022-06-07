import './App.css';
import RickAndMortyClass from './components/RickAndMortyClass';
import RickAndMortyFunction from './components/RickAndMortyFunction';
import './styles/viewStyles.css';

function App() {

  return (
    <div className="App">
      <RickAndMortyClass nameClass="clase" />
      <RickAndMortyFunction />
    </div>
  );
}

export default App;
