const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    required: true
  },
//   `summary` is required and of type String
  summary: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  link: {
    type: String,
    required: true
  },
  // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
  note: {
    type: Schema.Types.ObjectId,
    ref: "Notes"
  }
});

// This creates our model from the above schema, using mongoose's model method
const Articles = mongoose.model("Articles", ArticleSchema);

// Export the Article model
module.exports = Articles;
