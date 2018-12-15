const express = require('express');
const path = require('path');
const router = express.Router();
const wikipedia = require('./../lib/WikipediaAPI');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/wikipedia', (req, res, next) => {
  res.sendFile(path.resolve('views/index_wikipediaAPI.html'));
});

router.get('/wikipedia/term/:term', (req, res, next) => {
  
});

module.exports = router;
