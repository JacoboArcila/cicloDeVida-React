import './App.css';
import RickAndMortyClass from './components/RickAndMortyClass';
import RickAndMortyFunction from './components/RickAndMortyFunction';
import './styles/viewStyles.css';
import {useState} from 'react';
import Button from './components/Button';

function App() {
  const [view, setView] = useState();
  const [count, setCount] = useState(1);
  const [text, setText] = useState("Go to Class Component");

  const changeView = (num) => {

    if(num === 1) {
      setView(<RickAndMortyClass />)
      setCount(prevState => prevState + 1)
      setText("Go to Funtion Component")
    } else if( num === 2) {
      setView(<RickAndMortyFunction />)
      setCount(prevState => prevState - 1)
      setText("Go to Class Component")
    }
  }

  return (
    <div className="App">
      {
        view
      }
      <Button buttonFn={changeView} num={count} text={text} />
    </div>
  );
}

export default App;
