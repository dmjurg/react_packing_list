import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App.jsx';
import SuitcasePicker from './SuitcasePicker.jsx';

class NotFound extends React.Component {
  render () {
    return (
      <p>Nothing Here</p>
    )
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={SuitcasePicker}/>
    <Route path="/suitcase/:suitcaseId" component={App}/>
    <Route path="*" component={NotFound}/>
  </Router>
), document.getElementById('app'));
