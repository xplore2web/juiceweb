import { JuicewebPage } from './app.po';

describe('juiceweb App', function() {
  let page: JuicewebPage;

  beforeEach(() => {
    page = new JuicewebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
