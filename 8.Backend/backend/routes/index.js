var express = require('express');
var fs = require('fs');
var router = express.Router();

const dataPath = './json/data.json';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/** CRUD for backend  */

// READ ////////////
router.post('/get-backend/get', (req, res) => {

  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));
  });

});

module.exports = router;
