const request = require('request');

function fetchParibu (callback) {  
    request({
      url: 'https://www.paribu.com/ticker',
      json: true
    }, (error, response, body) => {
    
      if (error) {
        callback('Unable to connect to Paribu servers.');
      } else {
        callback('Anlık bitcoin değeri: ' + body.BTC_TL.last + 'TL');
      }
    });
  };
  
  module.exports = {
    fetchParibu
  };