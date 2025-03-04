const express = require("express");
const router = express.Router();
const Events = require("../model/Events");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

router.get("/getorganizer", async (req, res) => {

    try {
        const cards = await Organizers.find ();
        res.status(200).json(cards);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/getevent/:id", async (req, res) => {

    try {
        const cards = await Events.findById ({_id:req.params.id});
        res.status(200).json(cards);
        
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
