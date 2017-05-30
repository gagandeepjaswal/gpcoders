import { GpcodersAdminPage } from './app.po';

describe('gpcoders-admin App', () => {
  let page: GpcodersAdminPage;

  beforeEach(() => {
    page = new GpcodersAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
