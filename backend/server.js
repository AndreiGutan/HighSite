const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  password: "ParolaHighduc",
  host: "localhost",
  port: 5432,
  database: "HighDates",
});

//importing the required libraries
const express = require("express");
const cors = require("cors");

//Initialize Express application and enable CORS middleware to allow requests from your React frontend
const app = express();
app.use(cors());
app.use(express.json()); // This allows your server to parse JSON data from incoming requests

//Define a simple endpoint to test your server
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Create an endpoint to get all houses
app.get("/houses", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM houses");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//Create an endpoint to get a specific house by its ID
app.get("/houses/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("SELECT * FROM houses WHERE id = $1", [id]);
    if (result.rows.length > 0) {
      res.status(200).json(result.rows[0]);
    } else {
      res.status(404).send("House not found");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//Set up the server to listen on a specific port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
