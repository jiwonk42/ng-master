import { NgMasterPage } from './app.po';

describe('ng-master App', () => {
  let page: NgMasterPage;

  beforeEach(() => {
    page = new NgMasterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
