const fs = require("fs");
const csv = require("fast-csv");

exports.getAllUser = async (req, res) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Dave Star' },
    { id: 4, name: 'Dwayne Jhonson' },
    { id: 5, name: 'Mitchell Stark' },
    { id: 6, name: 'Ricky Ponting' },
    { id: 6, name: 'Michal Clark' },
    { id: 7, name: 'Andrew Fillontoff' },
    { id: 8, name: 'Shane Watson' },
    { id: 9, name: 'Brett Lee' },
    { id: 10, name: 'Jack Kallis' },
    { id: 11, name: 'Rahul Dravid' },
    { id: 12, name: 'Virendra Sehwag' },
    { id: 13, name: 'Injmam Ul Haq' },
    { id: 14, name: 'Bredon Maccullam' },
    { id: 15, name: 'Kevin Piterson' },
    { id: 16, name: 'Ab De Viliars' },
    { id: 17, name: 'Brain Lara' },
    { id: 18, name: 'Ravi Ram Paul' },
    { id: 19, name: 'David Warner' },
    { id: 20, name: 'Demian Martin' },
    { id: 21, name: 'Shoaib Akhtar' },
    { id: 22, name: 'Yunus Khan' },
    { id: 23, name: 'Greem Smith' },
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