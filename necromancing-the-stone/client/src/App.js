import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import MainNav from './components/nav/MainNav';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
     <MainNav />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/home' component={Home}/>
        <Route path='/about' component={About}/>
      </Switch>
    </Router>


  );
};

export default App;
