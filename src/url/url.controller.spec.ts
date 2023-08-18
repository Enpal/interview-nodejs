import * as httpMocks from 'node-mocks-http';
import { UrlController } from './url.controller';

describe('UrlController', () => {
  let controller: UrlController;

  beforeEach(() => {
    controller = new UrlController();
  });

  it('Should create a short URL', async () => {
    const request = httpMocks.createRequest();
    const response = httpMocks.createResponse();

    await controller.createShortUrl(request, response);

    expect(response._getData()).toBe('I will save the link');
  });

  it('Should redirect a short URL to the original URL', async () => {
    const request = httpMocks.createRequest();
    const response = httpMocks.createResponse();

    await controller.redirectToOriginalUrl(request, response);

    expect(response._getData()).toBe('I should parse the URL and redirect');
  });
});
