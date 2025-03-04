const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const bodyParser = require('body-parser');
const addevent = require("./routes/addevent");
const addorganizers = require("./routes/addorganizers");
const admin = require("./routes/addevent");
const prevHome = require("./routes/prevHome");
const prevAdmin = require("./routes/prevAdmin");
// const multer = require("multer");

require("dotenv").config();

const app = express();
// app.use(express.json());

app.use(express.json())
app.use(cors());
app.use(express.urlencoded(({ extended: true })));
// app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect(process.env.MONGODB_URI , {
    dbName: "VALTdatabase",
}).then(()=>{console.log("Running")}).catch((err)=>{console.log(err)});
const database = mongoose.connection;
database.on("error", (error) => {
    console.log(error);
});

database.once("connected", () => {
    console.log("Database Connected");
});

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "/images");
//     },
//     filename: (req, file, cb) => {
//         cb(null, req.body.name);
//     },
// });

// const upload = multer({ storage: storage });
// app.post("/upload", upload.single("file"), (req, res) => {
//     const imageUrl = `http://localhost:${port}/uploads/${req.file.filename}`;
//     res.status(200).json({imageUrl});
// });




app.use("/", addevent);
app.use("/", addorganizers);
app.use("/", prevHome);
app.use("/", prevAdmin);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});