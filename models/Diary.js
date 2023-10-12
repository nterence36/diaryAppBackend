const mongoose = require("mongoose");

const diarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  note: {
    type: String,
    required: true,
  },
});

const Entry = mongoose.model("Entry", diarySchema);

module.exports = Entry;