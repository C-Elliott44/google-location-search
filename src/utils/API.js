import axios from "axios";

const BASEURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=";
const FIELDS = "&inputtype=textquery&fields=place_id,photos,formatted_address,name,rating,opening_hours,geometry";
const APIKEY = "&key=AIzaSyDsxlxWsTHrU0nPpFDIqVpJMq6yGG7SrLw";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + FIELDS + APIKEY);
  }
};