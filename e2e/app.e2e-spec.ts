import { MockErrorPage } from './app.po';

describe('mock-error App', function() {
  let page: MockErrorPage;

  beforeEach(() => {
    page = new MockErrorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
