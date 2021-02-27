import Home from './containers/Home';
import MainNav from './components/nav/MainNav';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <MainNav />
      <Home />
    </div>
  );
};

export default App;
