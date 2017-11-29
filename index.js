const paribu = require('./paribu');

paribu.fetchParibu((message) => {
  console.log(message);
});