import './App.css';
import { Tooltip } from './Components/Tooltip';

function App() {
  return (
    <div className="App">
      <Tooltip text="Hello" position="top">
        <button className='btn'>Say Hello</button>
      </Tooltip>
      <Tooltip text="I am a cat" position="left">
        <p>Cat</p>
      </Tooltip>
      <Tooltip text="I am Batman" position="right">
        <img className='batman' src='https://purepng.com/public/uploads/large/purepng.com-batman-arkhambatmansuperherocomicdc-comicsbob-kanebat-manbruce-wayne-1701528525941b0tug.png' alt='Batman' />
      </Tooltip>
    </div>
  );
}

export default App;
