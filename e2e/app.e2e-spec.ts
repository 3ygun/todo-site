import { TodoSitePage } from './app.po';

describe('todo-site App', () => {
  let page: TodoSitePage;

  beforeEach(() => {
    page = new TodoSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
