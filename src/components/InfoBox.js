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
        <InfoCard
            details={this.props.details}
        />
      </div>
    );
  }
}
 
export default InfoBox;
  


