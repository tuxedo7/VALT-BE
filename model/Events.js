const mongoose = require("mongoose");

const EventsSchema = new mongoose.Schema({
  eventname: {
    type: String,
  },
  logo: {
    type: String
  },
  date: { 
    type: Date,
  },
  localtime: {
    type: Date,
  },
  country: {
    type: String,
  },
  city: {
    type: String,
  },
  www: {
    type: String,
  },
  type: {
    type: String,
  },
  Active: {
    type: String,
  },
  On_offline: {
    type: String,
  },
  link: {
    type: String,
  },
  Description: {
    type: String,
  },
  gen_invtitle: {
    type: String,
  },
  gen_invnum: {
    type: String,
  },
  gen_invlimit: {
    type: String,
  },
  gen_invvalt: {
    type: String,
  },
  vip_invtitle: {
    type: String,
  },
  vip_invnum: {
    type: String,
  },
  vip_invlimit: {
    type: String,
  },
  vip_invvalt: {
    type: String,
  },
  vipb_invtitle: {
    type: String,
  },
  vipb_invnum: {
    type: String,
  },
  vipb_invlimit: {
    type: String,
  },
  vipb_invvalt: {
    type: String,
  },
  offerdate: {
    type: Date,
  },
  offerlocaltime: {
    type: String,
  },
  
});

module.exports = Events = mongoose.model("Events", EventsSchema);
