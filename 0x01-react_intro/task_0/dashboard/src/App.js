import logo from './ALX Logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <body class="App-body">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
	  <h1>School dashboard</h1>
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
        </header>
          <p>Login to access the full dashboard</p>
        <footer class="App-footer">
          <p>Copyright 2020 - ALX</p>
        </footer>
      </body>
    </div>
  );
}

export default App;
