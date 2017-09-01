import { BookmarksPage } from './app.po';

describe('bookmarks App', function() {
  let page: BookmarksPage;

  beforeEach(() => {
    page = new BookmarksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
