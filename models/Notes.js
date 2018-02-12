const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const NotesSchema = new Schema({
  // `title` is of type String
  title: String,
  // `body` is of type String
  body: String
});

const Notes = mongoose.model("Notes", NotesSchema);

// Export the Notes model
module.exports = Notes;
