import axios from "axios";

const BASEURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=";
const FIELDS = "&inputtype=textquery&fields=place_id";
const APIKEY = "&key=AIzaSyDsxlxWsTHrU0nPpFDIqVpJMq6yGG7SrLw";

export default {
  search: function(query) {
    return axios.get(`${'https://cors-anywhere.herokuapp.com/'}` + BASEURL + query + FIELDS + APIKEY);
  }
};
