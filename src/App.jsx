import './assets/vendor/bootstrap/css/bootstrap.css';
import './assets/css/normalize.css';
import './assets/css/style.css';
import './assets/css/responsive.css'
import NavBar from './components/navbar';
import Footer from './components/footer';
import RouteURL from './RouteURL';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <RouteURL/>
      <Footer />
    </div>
  );
}

export default App;
