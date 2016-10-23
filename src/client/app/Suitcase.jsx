import React from 'react';
import Item from './Item.jsx';

class Suitcase extends React.Component {

  constructor () {
    super();
    this.renderItem = this._renderItem.bind(this);
  }

  _renderItem (item, i) {
    return (
      <Item key={`item${i}`} details={item} showButton={false} removeFromSuitcase={this.props.removeFromSuitcase} />
    )
  };

  render () {
    return (
      <div>
        <p>Suitcase</p>
        <ul>
          {this.props.items.map(this.renderItem)}
        </ul>
      </div>
    )
  }

}

export default Suitcase;
