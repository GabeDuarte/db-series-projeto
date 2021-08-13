const express = require('express')

const router = express.Router()

const seriesController = require('./../controllers/series.controller')

const SeriesController = new seriesController();

router.get('/series', SeriesController.getSeries);

router.get('/series/:id', SeriesController.getSeriesById);

router.post('/series', SeriesController.createSerie);

router.delete('/series/:id', SeriesController.deleteSerie);

router.put('/series/:id', SeriesController.updateSerie);


module.exports = router;