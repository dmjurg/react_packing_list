import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import SuitcasePicker from './SuitcasePicker.jsx';
import Suitcase from './Suitcase.jsx';
import Closet from './Closet.jsx';
import Item from './Item.jsx';

class App extends React.Component {

  constructor () {
    super()
    this.state = {
      suitcase : {},
      closet : {}
    }
  };

  loadCloset () {
    this.setState({
      closet : require('./sample-closet.jsx')
    }); 
  };

  renderItem (key) {
    return (
      <Item key={key} index={key} details={this.state.closet[key]} />
    )
  };

  render () {
    return (
      <div>
        <h2>My Suitcase</h2>
        <Suitcase />
        <h2>My Closet</h2>
        <Closet />
        <ul>
          {Object.keys(this.state.closet).map(this.renderItem)}
        </ul>
      </div>
    )  
  }

}

class NotFound extends React.Component {

  render () {
    return (
      <p>Nothing Here</p>
    )
  }

}

render((
  <Router history={hashHistory}>
    <Route path="/" component={SuitcasePicker}/>
    <Route path="/suitcase/:suitcaseId" component={App}/>
    <Route path="*" component={NotFound}/>
  </Router>
), document.getElementById('app'));