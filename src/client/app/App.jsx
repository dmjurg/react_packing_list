import React from 'react';
import Suitcase from './Suitcase.jsx';
import Closet from './Closet.jsx';

class App extends React.Component {

  constructor () {
    super()
    this.state = {
      closet : [],
      suitcase : []
    }
  };

  loadCloset () {
    this.setState({
      closet : require('./sample-closet.jsx')
    });
  };

  addToSuitcase (item) {
    this.state.suitcase.push(item);
    this.setState({
      suitcase : this.state.suitcase
    });
  };

  removeFromSuitcase (item) {
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
        <Suitcase items={this.state.suitcase} removeFromSuitcase={this.removeFromSuitcase.bind(this)}/>
        <h2>My Closet</h2>
        <div>
          <button onClick={() => this.loadCloset()}>Load Closet</button>
        </div>
        <Closet items={this.state.closet} addToSuitcase={this.addToSuitcase.bind(this)} />
      </div>
    )
  }

}

export default App;
