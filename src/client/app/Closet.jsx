import React from 'react';
import Item from './Item.jsx';;

class Closet extends React.Component {

  constructor () {
    super();
    this.renderItem = this._renderItem.bind(this);
  }

  _renderItem (item, i) {
    return (
      <Item key={`item${i}`} details={item} showButton={true} addToSuitcase={this.props.addToSuitcase} />
    )
  };

  render () {
    return (
      <div>
        closet
        <ul>
          {this.props.items.map(this.renderItem)}
        </ul>
      </div>
    )
  }

}

export default Closet;
