//This file serves as the middle point between the server and front end?

import axios from 'axios';

export default {
  // Gets images from the database
  getBooks: function() {
    return axios.get("/api/books");
  }
};
