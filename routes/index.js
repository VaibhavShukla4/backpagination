const express = require("express");
const router = express.Router();
const { getCsv } = require("../controllers/csv"); // Import the correct controller function
const { getItem } = require("../controllers/item"); // Import the correct controller function
const { getUser } = require("../controllers/users");
const { getAllUser } = require("../controllers/allUser");

router.get("/generate-csv", getCsv); // Use the imported controller function as the callback
router.get("/api/items", getItem);
router.get("/api/users", getUser);
router.get("/api/alluser", getAllUser);
module.exports = router;
