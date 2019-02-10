import axios from "axios";

const BASEURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=";
const FIELDS = "&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry";
const APIKEY = "&key=AIzaSyB7GENwxN3TLBacFr5cROtwHlOHTpw2Zs0";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + "1818+pembridge+street+petaluma" + FIELDS + APIKEY);
  }
};