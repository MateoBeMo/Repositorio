import { browser, by, element } from 'protractor';

export class CustomerPage {
    navigateTo() {
        // Navigate to the second-view
        return browser.get('/dashboard/second-view');
    }
    getButton() {
        return element(by.css('.getCustomers'));
    }

    getCustomers() {
        return element(by.css('app-root pre'));
    }
}
