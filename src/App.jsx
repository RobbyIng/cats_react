// import logo from './logo.svg';
import './App.css';
import { ShowCats } from './components/ShowCats';

function App() {
  return (
    <div className="container py-5">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <ShowCats/>
    </div>
  );
}

export default App;
