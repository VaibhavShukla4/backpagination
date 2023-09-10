const fs = require("fs");
const csv = require("fast-csv");
exports.getAllUser = async (req, res) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    // Add more user data...
  ];

  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = 5; // Number of users per page
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const totalPages = Math.ceil(users.length / pageSize);
    const results = users.slice(startIndex, endIndex);

    res.json({
      message: 'Successfully got the data',
      usersList: results,
      currentPage: page,
      totalPages: totalPages,
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
