const express = require("express");
const router = express.Router();
const Events = require("../model/Events");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

router.get("/getallevent", async (req, res) => {

    try {
        const cards = await Events.find ();
        res.status(200).json(cards);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/getallids", async (req, res) => {

    try {
        const cards = await Events.find ();
        const ids = cards.map(card => card._id);

        res.status(200).json(ids);

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
