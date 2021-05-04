import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './containers/Home';
import Library from './containers/Library';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <h1>GifCollection</h1>
        <hr />
        <Route exact path="/" component={Home} />
        <Route exact path="/library" component={Library} />
      </div>
    </Router>
    
  );
}

export default App;
