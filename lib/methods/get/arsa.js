const { Base, Origin } = require('../../config');

const mahalle = ({ connector }) => async ({ mahalleNo, ada, parsel }) => (mahalleNo && ada && parsel
  ? connector(`${Base}/parsel/${[mahalleNo, ada, parsel].join('/')}`, {
    method: 'GET',
    Origin,
    Referer: Origin,
    'sec-ch-ua':
          '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36',
  }).then(({ Message, ...res }) => (Message ? { error: Message } : res))
  : { error: 'undefined error' });

module.exports = mahalle;
