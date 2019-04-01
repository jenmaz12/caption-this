//This file serves as the middle point between the server and front end?

import axios from "axios";

export default {
  // Gets books from the Google API
  getDataFromDb = (q) => {
    return axios.get("/api/database", { params: { q: "caption:" + q } });
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
      return axios.put("/api/images/" + id);
  },

  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves an book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};