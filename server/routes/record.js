const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.

//This will help us connect to the database
let user = require('../models/schema.js')

// This section will help you get a list of all the records.
router.route('/').get((req, res) => {
  user.find((error, data) => {
      if (error) {
          return next(error)
      } else {
          res.json(data)
      }
  })
})

module.exports = router;