
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
require('dotenv').config();
const connectDB = require("./Config/db");
const app = express();

app.use("/api/aqua", require("./Routes/index"));

connectDB();

const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
  // setInterval(() => {
  //   axios.get('http://localhost:3000/data')
  //     .then(response => console.log('Data fetched and saved:', response.data))
  //     .catch(error => console.error('Failed to fetch and save data:', error));
  // }, 10000);
});
