const il = require('./il');
const ilce = require('./ilce');
const mahalle = require('./mahalle');
const arsa = require('./arsa');

// module.exports = myk;
module.exports = ({ connector }) => ({
  il: il({ connector }),
  ilce: ilce({ connector }),
  mahalle: mahalle({ connector }),
  arsa: arsa({ connector }),
});
