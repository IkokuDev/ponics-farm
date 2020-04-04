import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './App.css';

const OilsPage = () =>(
  <h1>OIL PAGE</h1>
)

function App() {
  return (
    <div>
      <Switch>
      <Route exact path = '/' component = {HomePage} />
      <Route path = '/oils' component = {OilsPage} />
      </Switch>
    </div>
  );
}

export default App;
