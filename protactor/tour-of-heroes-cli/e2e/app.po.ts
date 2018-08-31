import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }

  findHeroByName(nameHero:string){
    element(by.id('search-box')).sendKeys(nameHero);
    element(by.css('.search-result')).click();
    return element.all(by.tagName('h2'));
  }


  deleteFirstHero(){
    element(by.css('.heroes')).all(by.tagName('li')).first().element(by.tagName('button')).click();
  }

  updateHero(nameHero:string){
    var hero = element(by.tagName('input'));
    hero.clear();
    hero.sendKeys(nameHero);
    element(by.buttonText('Save')).click();
    browser.waitForAngular();
  }


  navigateHeroFromDashboard(){
    element(by.css('.module.hero')).all(by.tagName('h4')).first().click();
    return element.all(by.tagName('h2'));
  }

  navigateHeroFromList(){
    element(by.css('.heroes')).all(by.tagName('li')).first().click();
    element(by.buttonText('View Details')).click();
    return element.all(by.tagName('h2'));
  }
}
