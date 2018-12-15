const express = require('express');
const path = require('path');
const randomWords = require('random-words');

const router = express.Router();

const WikipediaAPI = require('./../lib/WikipediaAPI');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/wikipedia', (req, res, next) => {
  res.sendFile(path.resolve('views/index_wikipediaAPI.html'));
});

router.get('/wikipedia/term/:term', async (req, res, next) => {
  let wiki = new WikipediaAPI('json');
  let wikiResponse = await wiki.getByWord(req.param('term'));
  if(wikiResponse.status === 400) {
    res.status(400).send(wikiResponse);
  } else {
    res.status(200).send(wikiResponse);
  }
  res.send
});

router.get('/wikipedia/random', async (req, res, next) => {
  let wiki = new WikipediaAPI('json');
  let random = randomWords(1);
  let wikiResponse = await wiki.getByWord(random[0]);
  if(wikiResponse.status === 400) {
    res.status(400).send(wikiResponse);
  } else {
    res.status(200).send(wikiResponse);
  }
});

module.exports = router;
