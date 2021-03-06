import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage';
import Shop from './Pages/Shop/Shop'





function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route  path="/shop" component={Shop}/>
      </Switch>
      
    </div>
  );
}

export default App;
