import { Ng2RxAppPage } from './app.po';

describe('ng2-rx-app App', () => {
  let page: Ng2RxAppPage;

  beforeEach(() => {
    page = new Ng2RxAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
