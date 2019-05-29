import React, { Component } from 'react';
import '../Styles/info.css'

  const InfoCard = (props) => {
    if (props.details === '') {
      return (
        <div class="lds-css ng-scope"><div class="lds-ripple"><div></div><div></div></div></div>
      )
    } 
    else{
      return (<div><pre>{JSON.stringify(props.details, null, 1) }</pre></div>)
    }
  };

class InfoBox extends Component {
 
  render() {
    return (
      <div className='InfoBox'>
        <div className="InfoTitle">
          <h2>API Data</h2>
        </div>
        <div className="InfoData">
          <InfoCard
              details={this.props.details}
          />
        </div>
      </div>
    );
  }
}
 
export default InfoBox;
  


