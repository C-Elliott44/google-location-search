import React, { Component } from 'react';
import './App.css';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import API from "./utils/API";

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {address: '',
                  place_id: ''};
  }
 
  handleChange = address => {
    this.setState({ address });
  };

  searchAddress = query => {
    API.search(query)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  searchPlaceId = () => {
    API.search(this.state.address)
      .then(res => {
        this.setState({ place_id: res.data.candidates[0].place_id})
        console.log("The State DATA " + this.state.place_id)
      })
      .catch(err => console.log(err));
  }

  handleSelect = address => {
    this.setState({ address });
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng, this.state.address))
      .then(this.searchPlaceId)
      .catch(error => console.error('Ok Error', error));
  };
 
  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        searchPlaceId={this.searchPlaceId}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <p>Please Type In A Location</p>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default LocationSearchInput;
