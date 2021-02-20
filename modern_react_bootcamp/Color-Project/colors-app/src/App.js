import Palette from './Palette';
import seedColors from './seedColors';
import './App.css';

function App() {
  return (
    <div className="">
      <Palette {...seedColors[6]}/>
    </div>
  );
}

export default App;
