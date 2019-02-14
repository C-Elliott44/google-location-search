import React, { Component } from 'react';

  const InfoCard = (props) => {
    return (<div><pre>{JSON.stringify(props.details, null, 2) }</pre></div>)
  };

class InfoBox extends Component {
 
  render() {
    return (
      <div style={{ height: '80vh', width: '80%' }}>
        <InfoCard
            details={this.props.details}
        />
      </div>
    );
  }
}
 
export default InfoBox;
  