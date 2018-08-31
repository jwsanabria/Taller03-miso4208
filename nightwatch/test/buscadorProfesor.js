module.exports = { // adapted from: https://git.io/vodU0  
  beforeEach: function (browser, done) {
    browser.resizeWindow(1280, 800, done);
  },
  'Buscar profesor y dirigirse a su página': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .setValue('input[role="combobox"]', 'Adolfo Jose Quiroz Salazar')     
      .waitForElementVisible('div[class="Select-option is-focused"]', 50000)
      .click('div[class="Select-option is-focused"]')
      .waitForElementVisible('h2[id="universidad"]', 50000)
      .waitForElementVisible('.nombreProfesor', 50000)
      .assert.containsText('.nombreProfesor', 'Adolfo Jose Quiroz Salazar')
      .end();
  },
  'Filtro por materia en la pagina de un profesor': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .setValue('input[role="combobox"]', 'Mario Linares Vasquez')     
      .waitForElementVisible('div[class="Select-option is-focused"]', 50000)
      .click('div[class="Select-option is-focused"]')
      .waitForElementVisible('h2[id="universidad"]', 50000)
      .waitForElementVisible('.statsProfesorDropdownItemChecked', 50000)
      .waitForElementVisible('input[name="id:ISIS1206"]', 50000)
      .click('input[name="id:ISIS1206"]')
      .waitForElementVisible('.cursiveText', 50000)
      .assert.containsText('.cursiveText', '100.00% de los estudiantes lo aprueban')
      .end();
  }
};


