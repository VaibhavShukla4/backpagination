const fs = require("fs");
const csv = require("fast-csv");

exports.getUser = async (req, res) => {
    const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  // Add more user data...
];
try {
    const searchName = req.query.name;
    const page = parseInt(req.query.page) || 1;
    const pageSize = 5; // Number of users per page
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    if (!searchName) {
      return res.status(400).json({ message: 'Please provide a search query' });
    }

    const matchingUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchName.toLowerCase())
    );

    const totalPages = Math.ceil(matchingUsers.length / pageSize);
    const results = matchingUsers.slice(startIndex, endIndex);
    console.log(results)
    res.json({
      message: 'Successfully got the data',
      usersList: results,
      currentPage: page,
      totalPages: totalPages,
    });
  } catch (error) {
    console.error('Error searching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

