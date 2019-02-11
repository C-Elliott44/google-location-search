import axios from "axios";

const BASEURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=";
const FIELDS = "&inputtype=textquery&fields=place_id";
const APIKEY = "&key=AIzaSyDsxlxWsTHrU0nPpFDIqVpJMq6yGG7SrLw";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(`${'https://cors-anywhere.herokuapp.com/'}` + BASEURL + query + FIELDS + APIKEY);
  }
};
