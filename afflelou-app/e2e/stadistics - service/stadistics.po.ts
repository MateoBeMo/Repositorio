import { browser, by, element } from 'protractor';

export class StadisticsPage {
    navigateTo() {
        // Navigate to the first-view
        return browser.get('/dashboard/first-view');
    }
    getButton() {
        return element(by.css('#addLanguage'));
    }
    getInput() {
        return element(by.css('#inputLanguage')).sendKeys('Typescript');
    }
    getLanguage() {
        return element.all(by.css('#languageDiv')).last().all(by.css('app-root p'));
    }
}
