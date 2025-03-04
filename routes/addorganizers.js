const express = require("express");
const router = express.Router();
const Events = require("../model/Events");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

const Organizers = require("../model/Organizer");

router.post("/addorganizer", async (req, res) => {
  console.log("=========Organizers==========", req.body);
  const organizer = req.body.organizer;
  const name = req.body.name;
  const surname = req.body.surname;
  const country = req.body.country;
  const city = req.body.city;
  const telegram = req.body.telegram;
  const phone = req.body.phone;
  const email = req.body.email;
  const wallet = req.body.wallet;
  const organizerId = req.body.organizerId;
  const active = true;
  try {
    const newOrganizer = new Organizers({
      organizer: organizer,
      name: name,
      surname: surname,
      country: country,
      city: city,
      telegram: telegram,
      phone: phone,
      email: email,
      wallet: wallet,
      organizerId: organizerId,
      Active:active,
    });
    await newOrganizer.save();
    return res.status(201).json({ message: "Organizers added successfully" });
  } 
  catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Server error during addition" });
  }
});

module.exports = router;
