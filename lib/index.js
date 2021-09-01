const fetch = require('node-fetch');
const connector = require('./connector');
const { get } = require('./methods');

const tkgm = (options = {}) => {
  const conn = connector({
    fetch: options.fetch || fetch,
  });
  return { get: get({ connector: conn }) };
};

module.exports = tkgm;
