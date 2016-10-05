/**
 * Created by peter on 2016-10-04.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('Contact', { title: 'Contact' });
});

module.exports = router;