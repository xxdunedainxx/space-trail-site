import logo from './logo.svg';
import './App.css';
import spaceBackground from './space-background.gif'
import { Navbar,Nav, Icon, Dropdown } from 'rsuite';

function App() {
  return (

    <div className="App">
      <header className="App-header" style={{ background: `url(${spaceBackground})` }}>
            <div>
              <ul id="nav">
                <li>ST Logo Here</li>
                <li>About</li>
                <li>Get the game</li>
                <li>Report a bug</li>
                <li>Mailing List</li>
              </ul>
            </div>
        <h1>
        Space Trail
        </h1>
        <p style={{ color: "white" }}>
          Have you ever imagined what it would be like to travel the oregon trail, in space?
        </p>
      </header>
    </div>
  );
}

export default App;
