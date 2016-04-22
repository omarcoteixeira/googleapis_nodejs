var google = require('googleapis');
var urlshotener = google.urlshotener('v1');

var params = { shortUrl: 'http://goo.gl/xKbRu3' };

urlshortener.url.get(params, function (err, response) {
  if (err) {
    console.log('Encountered error', err);
  } else {
    console.log('Long url is', response.longUrl);
  }
});