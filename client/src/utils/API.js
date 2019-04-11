//This file serves as the middle point between the server and front end?

import axios from 'axios';

export default {
  // Gets images from the database
  getBooks: function() {
    return axios.get("/api/image");
  },
  
  getCaption: function(id) {
    return axios.get("/api/image" + id);
  },
   
  savedCaption: function(savedCaption, _id) {
    return axios.post("/api/images", savedCaption + _id);
  }
};
