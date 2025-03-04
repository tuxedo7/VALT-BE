const express = require("express");
const router = express.Router();
const Events = require("../model/Events");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");


router.post("/addevent", async (req, res) => {
  console.log("=========Events==========", req.body);
    const eventname = req.body.eventName;
    const logo = req.body.logo;
    const date = req.body.date;
    const localtime = req.body.localtime;
    const country = req.body.country;
    const city = req.body.city;
    const www = req.body.www;
    const type = req.body.type;
    const Active = req.body.active;
    const On_offline = req.body.onlineOffline;
    const link = req.body.link;
    const Description = req.body.description;
    const gen_invtitle = req.body.invitationstitlegen;
    const gen_invnum = req.body.invitationsnumbergen;
    const gen_invlimit = req.body.invitationslimitgen;
    const gen_invvalt = req.body.invitationsvaltgen;
    const vip_invtitle = req.body.invitationstitlevip;
    const vip_invnum = req.body.invitationsnumbervip;
    const vip_invlimit = req.body.invitationslimitvip;
    const vip_invvalt = req.body.invitationsvaltvip;
    const vipb_invtitle = req.body.invitationstitlebull;
    const vipb_invnum = req.body.invitationsnumberbull;
    const vipb_invlimit = req.body.invitationslimitbull;
    const vipb_invvalt = req.body.invitationsvaltbull;
    const offerdate = req.body.endOfOfferDate;
    const offerlocaltime = req.body.endOfOfferTime;
  
    try {
      const newEvents = new Events({
        eventname: eventname,
        logo: logo,
        date: date,
        localtime: localtime,
        country: country,
        city: city,
        www: www,
        type: type,
        Active: Active,
        On_offline: On_offline,
        link: link,
        Description: Description,
        gen_invtitle: gen_invtitle,
        gen_invnum: gen_invnum,
        gen_invlimit: gen_invlimit,
        gen_invvalt: gen_invvalt,
        vip_invtitle: vip_invtitle,
        vip_invnum: vip_invnum,
        vip_invlimit: vip_invlimit,
        vip_invvalt: vip_invvalt,
        vipb_invtitle: vipb_invtitle,
        vipb_invnum: vipb_invnum,
        vipb_invlimit: vipb_invlimit,
        vipb_invvalt: vipb_invvalt,
        offerdate: offerdate,
        offerlocaltime: offerlocaltime,
      });
      await newEvents.save();
      return res.status(201).json({ message: "Event added successfully" });
    }
    catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Server error during addition" });
    }
});



module.exports = router;
