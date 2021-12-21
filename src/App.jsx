import './assets/vendor/bootstrap/css/bootstrap.css';
import './assets/css/normalize.css';
import './assets/css/style.css';
import NavBar from './components/navbar';
import RouteURL from './RouteURL';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <RouteURL/>
    </div>
  );
}

export default App;
