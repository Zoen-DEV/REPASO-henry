import { useDispatch } from 'react-redux';
import { getCharacters } from './redux/actions';

function App() {
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick={dispatch(getCharacters())}>agregar</button>
    </div>
  );
}

export default App;
