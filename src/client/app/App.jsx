import React from 'react';
import Suitcase from './Suitcase.jsx';
import Closet from './Closet.jsx';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      closet : [],
      suitcase : []
    };
    this.addToSuitcase = this._addToSuitcase.bind(this);
    this.removeFromSuitcase = this._removeFromSuitcase.bind(this);
    this.loadCloset = this._loadCloset.bind(this);
  };

  _loadCloset () {
    this.setState({
      closet : require('./sample-closet.jsx')
    });
  };

  _addToSuitcase (item) {
    this.state.suitcase.push(item);
    this.setState({
      suitcase : this.state.suitcase
    });
  };

  _removeFromSuitcase (item) {
    var index = this.state.suitcase.indexOf(item);
    if (index > -1) {
      this.state.suitcase.splice(index, 1)
    };
    this.setState({
      suitcase : this.state.suitcase
    })
  };

  render () {
    return (
      <div>
        <h2>My Suitcase</h2>
        <Suitcase items={this.state.suitcase} removeFromSuitcase={this.removeFromSuitcase}/>
        <h2>My Closet</h2>
        <div>
          <button onClick={this.loadCloset}>Load Closet</button>
        </div>
        <Closet items={this.state.closet} addToSuitcase={this.addToSuitcase} />
      </div>
    )
  }

}

export default App;
