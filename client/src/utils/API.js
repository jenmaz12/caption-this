//This file serves as the middle point between the server and front end

import axios from 'axios';

export default {
  // Gets images from the Google API
  getDataFromDb: function() {
    return axios.get('/api/image');
  },
  // Gets all saved books
  //POST DOES NOT WORK RIGHT NOW.  NOT PART OF MVP
  //   postSavedBooks: function(idToBeAdded, caption) {
  //     return axios.post("http://localhost:3001/api/putData", {
  //       id: idToBeAdded,
  //       caption: caption
  //     });

  //Updates the image's captions
  addCaption: function(id) {
    return axios.put('/api/images/' + id);
  },

  // Deletes the caption with the given id
  deleteBook: function(id) {
    return axios.delete("/api/image/" + id);
  },
  // Saves a caption to the database
  // This is beyond the MVP. Currently users can not add an image.
  // We are only adding captions via the addCaption function above.
  saveBook: function(captionData) {
    return axios.post("/api/image", captionData);
  }
};
