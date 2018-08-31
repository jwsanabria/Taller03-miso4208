import { TourOfHeroesPage } from './app.po';

describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display top 4 heroes', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });
});

describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should add a new hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('My new Hero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });

});


describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateTo();
  });

  it('should find a hero page', () => {
    var res = page.findHeroByName('bombasto');
    expect(res.first().getText()).toEqual('Bombasto details!');
  });

});


describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should delete a hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.deleteFirstHero();
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n - 1));
  });

});


describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;
  page = new TourOfHeroesPage;

  it('should find a hero page', () => {
    page.navigateTo();
    var res = page.findHeroByName('magneta');
    expect(res.first().getText()).toEqual('Magneta details!');
  });

  it('should update a hero', () => {
    page.updateHero('SuperMagneta');
  });

  it('should find a hero modified page', () => {
    var res = page.findHeroByName('SuperMagneta');
    expect(res.first().getText()).toEqual('SuperMagneta details!');
  });

});


describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;
  
  beforeEach(() => {
    page = new TourOfHeroesPage;
  });

  it('should navigate from dashboard', () => {
    page.navigateTo();
    var res = page.navigateHeroFromDashboard();
    expect(res.first().getText()).toContain('details!');
  });

  it('should navigate from list', () => {
    page.navigateToHeroes();
    var res = page.navigateHeroFromList();
    expect(res.first().getText()).toContain('details!');
  });

  it('should navigate from search box', () => {
    page.navigateTo();
    var res = page.findHeroByName('Celeritas');
    expect(res.first().getText()).toEqual('Celeritas details!');
  });

});