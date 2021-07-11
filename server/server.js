// REQUIRED LIBRARIES
require('dotenv').config();
const express = require('express');
const cors = require("cors");


// APP SETUP
const app = express();
const PORT = process.env.PORT || 5000;
 
app.listen(PORT)