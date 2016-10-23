import React from 'react';
import { withRouter } from 'react-router';

class SuitcasePicker extends React.Component {

  goToSuitcase (e) {
    e.preventDefault();
    var suitcaseId = this.refs.suitcaseId.value;
    this.props.router.push('/suitcase/' + suitcaseId);
  };

  render () {
    return (
      <form onSubmit={(e) => this.goToSuitcase(e)}>
        <h1>What are you packing for?</h1>
        <input type="text" ref="suitcaseId" required />
        <input type="Submit" />
      </form>
    )
  }

};

export default withRouter(SuitcasePicker);
