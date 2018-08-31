module.exports = { // adapted from: https://git.io/vodU0
    'Login correcto': function(browser) {
      browser
        .url('https://losestudiantes.co/')
        .click('.botonCerrar')
        .waitForElementVisible('.botonIngresar', 4000)
        .click('.botonIngresar')
        .setValue('.cajaLogIn input[name="correo"]', 'jwsanabriad@uniandes.edu.co')
        .setValue('.cajaLogIn input[name="password"]', '12345678')
        .click('.cajaLogIn .logInButton')
        .waitForElementVisible('button[id="cuenta"]', 4000)
        .click('button[id="cuenta"]')
        .waitForElementVisible('.dropdown-menu', 5000)
        .assert.containsText('.dropdown-menu', 'Salir')
        .end();
    },

    'Buscar profesor': function (browser) {
      browser
          .url('https://losestudiantes.co/')
          .click('.botonCerrar')

          .waitForElementVisible('input[role="combobox"', 4000)
          .setValue('input[role="combobox"', 'Mario Linares')

          .waitForElementVisible('.Select-option-group-label', 4000)            
          .assert.containsText('.Select-option-group-label', 'Profesores')
          .waitForElementVisible('.Select-option', 4000)
          .assert.containsText('.Select-option', 'Mario Linares Vasquez - Ingeniería De Sistemas')
          .end();
    }
  };