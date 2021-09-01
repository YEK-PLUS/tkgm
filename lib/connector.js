const qs = require('qs');

const connector = ({ fetch }) => (url, { body, headers, ex }) => fetch(url, {
  headers,
  body: body ? qs.stringify(body) : null,
  ...ex,
}).then((res) => (res.status === 200 ? res.json() : { Message: '404 not found' }));
module.exports = connector;
