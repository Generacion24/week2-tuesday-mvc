const express = require('express');
const router = express.Router();
const carRouter = require('../routes/car.router')

// colocar las rutas aquí
router.use('/cars', carRouter)

module.exports = router;