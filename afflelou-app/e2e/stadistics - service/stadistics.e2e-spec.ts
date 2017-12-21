import { StadisticsPage } from './stadistics.po';

describe('Customer test', () => {
  let page: StadisticsPage;

  beforeEach(() => {
    page = new StadisticsPage();
  });

  it('should add Language', () => {
    page.navigateTo();
    page.getInput();
    page.getButton().click();
    expect(page.getLanguage().getText()).toEqual([ 'Language: Typescript total: 0' ]);
  });
});
