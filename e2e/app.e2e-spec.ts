import { Angular3TodoAppPage } from './app.po';

describe('angular3-todo-app App', function() {
  let page: Angular3TodoAppPage;

  beforeEach(() => {
    page = new Angular3TodoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
