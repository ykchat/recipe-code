// Generated by CoffeeScript 1.10.0
var cook, moment, title;

moment = require('moment-timezone');

title = function() {
  console.log('# Base');
};

cook = function() {
  var hello, name, now;
  name = 'Recipe';
  hello = "Hello " + name + "!";
  console.log(hello);
  now = moment().utc();
  console.log(now.format());
  now = moment().tz('Asia/Tokyo');
  console.log(now.format());
};

module.exports = {
  title: title,
  cook: cook
};
