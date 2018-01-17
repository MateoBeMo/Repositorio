import { CustomerPage } from './customers.po';

describe('Customer test', () => {
  let page: CustomerPage;

  beforeEach(() => {
    page = new CustomerPage();
  });

  it('should show customers ', () => {
    page.navigateTo();
    page.getButton().click();
    expect(page.getCustomers().getText()).not.toEqual('[]');
  });
});
