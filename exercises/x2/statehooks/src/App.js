import logo from './logo.svg';
import './App.css';
import {FunctionComponent} from './components/functionComponent';
import {ClassComponent} from './components/classComponent';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <section className="info">
            <FunctionComponent/>
            <ClassComponent/>
          </section>

        </header>
      </div>
  );
}

export default App;
