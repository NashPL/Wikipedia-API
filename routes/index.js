const express = require('express');
const path = require('path');
const randomWords = require('random-words');

const router = express.Router();

const WikipediaAPI = require('./../lib/WikipediaAPI');

/**
 * Renders an Index page from json file. 
 *  
 * @param req
 * @param res
 * @param next
 */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express'
  });
});

/**
 * Renders wikipediaAPI Welcome HTML page
 * 
 * @param req
 * @param res
 * @param next
 * 
 */
router.get('/wikipedia', (req, res, next) => {
  res.sendFile(path.resolve('views/index_wikipediaAPI.html'));
});

/**
 * Gets a WikipediaAPI json based on user GET request and sends it back to the client
 * 
 * @param req
 * @param res
 * @param next
 */
router.get('/wikipedia/term/:term', async (req, res, next) => {
  let wiki = new WikipediaAPI('json');
  let wikiResponse = await wiki.getByWord(req.param('term'));
  if (wikiResponse.status === 400) {
    res.status(400).send(wikiResponse);
  } else {
    res.status(200).send(wikiResponse);
  }
});

/**
 * Gets a WikipediaAPI random json respond and sends it back to the client
 * 
 * @param req
 * @param res
 * @param next
 */
router.get('/wikipedia/random', async (req, res, next) => {
  let wiki = new WikipediaAPI('json');
  let wikiResponse = await wiki.getByWord(randomWords(1)[0]);
  if (wikiResponse.status === 400) {
    res.status(400).send(wikiResponse);
  } else {
    res.status(200).send(wikiResponse);
  }
});

module.exports = router;