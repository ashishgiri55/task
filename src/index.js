import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Breweries from './components/Breweries';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/brewery/:id" exact component={Breweries} />
        <Route path="*" render={() => <h1>Page Not Found</h1>} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
