const mongoose = require("mongoose");

const carpoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  source: {
    type: String,
    required: true,
    trim: true,
  },
  dest: {
    type: String,
    required: true,
    trim: true,
  },
}, {collection : 'forum_list'});

const carpool = mongoose.model("carpool", carpoolSchema);

module.exports = carpool;