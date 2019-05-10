import axios from "axios";

const BASEURL = "https://maps.googleapis.com/maps/api/place/details/json?placeid=";
const FIELDS = "&fields=address_component,adr_address,alt_id,formatted_address,geometry,icon,id,name,permanently_closed,photo,place_id,plus_code,scope,type,url,utc_offset,vicinity,formatted_phone_number,international_phone_number,opening_hours,website,price_level,rating,review";
const APIKEY = "&key=AIzaSyD0fgzm00Nx4vGdj6EqJTA8oGBgOQkKj60";

export default {
  search: function(query) {
    console.log("in the API " + query );
    return axios.get(`${'https://cors-anywhere.herokuapp.com/'}` + BASEURL + query + FIELDS + APIKEY);
  }
};