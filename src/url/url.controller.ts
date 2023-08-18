export class UrlController {
  async createShortUrl(req, res) {
    console.log(`${req.method} ${req.url}`);
    res.setHeader('Content-Type', 'text/plain');
    res.send('I will save the link');
  }

  async redirectToOriginalUrl(req, res) {
    console.log(`${req.method} ${req.url}`);
    res.setHeader('Content-Type', 'text/plain');
    res.send('I should parse the URL and redirect');
  }
}
