import React from 'react';

class Item extends React.Component {

  addToSuitcase () {
    console.log("adding item: ", this.props.index);
    // var key = this.props.index;
    // this.props.addToCapsule(key);
  };

  render () {
    var details = this.props.details;

    return (
      <li>
        <img src={details.image} alt={details.name} />
        <h3>{details.name}</h3>
        <p>{details.type}</p>
        <button onClick={() => this.loadCloset()}>Add to Suitcase</button>
      </li>
    )
  }

}

export default Item;