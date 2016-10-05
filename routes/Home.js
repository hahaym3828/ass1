/**
 * Created by peter on 2016-10-04.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('Home', { title: 'Ming Ying' });
});

module.exports = router;