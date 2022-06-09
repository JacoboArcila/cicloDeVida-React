import './App.css';
import RickAndMortyClass from './components/RickAndMortyClass';
import RickAndMortyFunction from './components/RickAndMortyFunction';
import './styles/viewStyles.css';
import {useState} from 'react';
import './styles/ButtonStyles.css';

function App() {
  const [view, setView] = useState();
  const [count, setCount] = useState(1);
  const [text, setTexto] = useState("Go to Class Component");

  const changeView = (num) => {
    if(num === 1) {
      setView(<RickAndMortyClass />)
      setCount(prevState => prevState + 1)
      setTexto("Go to Funtion Component")
    } else if( num === 2) {
      setView(<RickAndMortyFunction />)
      setCount(prevState => prevState - 1)
      setTexto("Go to Class Component")
    }
  }

  return (
    <div className="App">
      {
        view
      }
      <div className='botoncito'>
        <button onClick={() => changeView(count)}>{text}</button>
      </div>
    </div>
  );
}

export default App;
