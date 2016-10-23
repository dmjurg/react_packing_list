import React from 'react';
import Item from './Item.jsx';;

class Closet extends React.Component {

  renderItem (item, i) {
    return (
      <Item key={`item${i}`} details={item} showButton={true} addToSuitcase={this.props.addToSuitcase} />
    )
  };

  render () {
    return (
      <div>
        closet
        <ul>
          {this.props.items.map(this.renderItem.bind(this))}
        </ul>
      </div>
    )
  }

}

export default Closet;
