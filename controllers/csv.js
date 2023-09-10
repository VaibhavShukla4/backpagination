const fs = require("fs");
const csv = require("fast-csv");

exports.getCsv = async (req, res) => {
  try {
    // Fetch data from MongoDB or any other source
    const data = [
      { name: "John", age: 25 },
      { name: "Jane", age: 30 },
      // ... more data
    ];

    const ws = fs.createWriteStream("output.csv");
    csv.write(data, { headers: true }).pipe(ws);

    ws.on("finish", () => {
      res.download("output.csv");
    });
  } catch (error) {
    console.error("Error generating CSV:", error);
    res.status(500).json({ error: "Error generating CSV" });
  }
};
