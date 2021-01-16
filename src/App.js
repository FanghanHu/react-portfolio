import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="./index.html">Fanghan Hu</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="#navbar-content" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-content">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="./index.html">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./portfolio.html">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./contact.html">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/index.html">
            
          </Route>
        </Switch>
        <footer class="position-fixed fixed-bottom text-center p-1 bg-dark text-white">
          Copyright 2020
        </footer>
      </Router>
    </>
  );
}

export default App;
