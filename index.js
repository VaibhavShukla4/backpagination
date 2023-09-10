const express = require("express");
const cors = require("cors"); // Import the cors middleware
const app = express();
const port = 3000;
// const ItemModel = require("./models/items");
app.use(cors()); // Enable CORS for all routes
const routes = require("./routes/index"); // Correct path to your routes

app.use(routes); // Use the imported routes

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
