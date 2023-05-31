const { getAll, createCar } = require('../controllers/car.controllers');
const express = require('express');

const carRouter = express.Router();

carRouter.route("/")
  .get(getAll)

module.exports = carRouter;