//This file serves as the middle point between the server and front end?

import axios from 'axios';

export default {
  // Gets images from the database
  getImages: function() {
    return axios.get("/api/image");
  },
  
  getCaption: function(id) {
    return axios.get("/api/image/" + id);
  },
   
  savedCaption: function(_id, savedCaption) {
    return axios.put("/api/image/" + _id, savedCaption);
  }
};
