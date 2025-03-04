const mongoose = require("mongoose");

const OrganizerSchema = new mongoose.Schema({
  organizer: {
    type: String,
  },
  name: {
    type: String
  },
  surname: {
    type: String,
  },
  country: {
    required : true,
    type: String,
  },
  city: {
    required: true,
    type: String,
  },
  telegram: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: String,
  },
  email: {
    required : true,
    type: String,
  },
  wallet: {
    required : true,
    type: String,
  },
  organizerId: {
    type: String
  },
  Active : {
    type: Boolean
  }
});

module.exports = Organizers = mongoose.model("Organizers", OrganizerSchema);
