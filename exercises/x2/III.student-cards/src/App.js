import logo from './logo.svg';
import './App.css';
import {StudentCard} from "./components/studentCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <section className="info">
              <StudentCard/>
          </section>

      </header>
    </div>
  );
}

export default App;
