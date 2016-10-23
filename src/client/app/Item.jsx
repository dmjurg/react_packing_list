import React from 'react';

class Item extends React.Component {

  // addToSuitcase () {
  //   // console.log("adding item: ", this.props.details.name);
  // };

  renderButton () {
    if (this.props.showButton) {
      return (
        <button onClick={() => this.props.addToSuitcase(this.props.details)}>Add to Suitcase</button>
      )
    } else {
      return (
        <button onClick={() => this.props.removeFromSuitcase(this.props.details)}>Remove from Suitcase</button>
      )
    }
  };

  render () {
    var details = this.props.details;

    return (
      <li>
        <img src={details.image} alt={details.name} />
        <h3>{details.name}</h3>
        <p>{details.type}</p>
        {this.renderButton()}
      </li>
    )
  }

}

export default Item;
