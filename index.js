const express = require("express");
const cors = require("cors"); // Import the cors middleware
const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes

const itemsPerPage = 10; // Number of items per page

// Sample data (replace with actual database queries)
const allItems = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
  { id: 5, name: "Item 5" },
  { id: 6, name: "Item 6" },
  { id: 7, name: "Item 7" },
  { id: 8, name: "Item 8" },
  { id: 9, name: "Item 9" },
  { id: 10, name: "Item 10" },
  { id: 11, name: "Item 11" },
  { id: 12, name: "Item 12" },
  { id: 13, name: "Item 13" },
  { id: 14, name: "Item 14" },
  { id: 15, name: "Item 15" },
  // ... more items
];
// Array of all items

app.get("/api/items", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const itemsToSend = allItems.slice(startIndex, endIndex);
  const totalPages = Math.ceil(allItems.length / itemsPerPage);

  res.json({
    items: itemsToSend,
    currentPage: page,
    totalPages: totalPages,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
