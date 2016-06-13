import React from 'react';

class Closet extends React.Component {

  render () {
    return (
      <div>
        <button onClick={() => this.loadCloset()}>Load Closet</button>
      </div>
    )
  }

}

export default Closet;