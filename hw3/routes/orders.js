var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Orders' });
  const order1 = "{topping:'plain', quantity:'2'}";
  const order2 = "{topping:'chocolate', quantity:'1'}";
  const orders = [order1, order2]
  res.json(orders);
  //res.json({topping:'chocolate', quantity:'1'});
});

module.exports = router;