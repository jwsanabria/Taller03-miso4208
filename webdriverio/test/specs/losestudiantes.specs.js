var assert = require('assert');
describe('los estudiantes login', function() {
    beforeEach(function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
    });

    afterEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    })
    it('should visit los estudiantes and failed at log in', function () {
        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');
        browser.waitForVisible('button=Ingresar');
        browser.click('button=Ingresar');

        var cajaLogIn = browser.element('.cajaLogIn');
        var mailInput = cajaLogIn.element('input[name="correo"]');

        mailInput.click();
        mailInput.keys('wrongemail@example.com');

        var passwordInput = cajaLogIn.element('input[name="password"]');

        passwordInput.click();
        passwordInput.keys('1234');

        cajaLogIn.element('button=Ingresar').click()
        browser.waitForVisible('.aviso.alert.alert-danger');

        var alertText = browser.element('.aviso.alert.alert-danger').getText();
        expect(alertText).toBe('Upss! El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.');
    });
});


describe('los estudiantes pruebas crear cuenta', function () {

    it('crear cuenta con login existente', function () {
        
        browser.url('https://losestudiantes.co');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.scroll('button=Ingresar');
        browser.click('button=Ingresar');

        var cajaSignUp = browser.element('.cajaSignUp');
        var nameInput = cajaSignUp.element('input[name="nombre"]');
        var lastNameInput = cajaSignUp.element('input[name="apellido"]');
        var mailInput = cajaSignUp.element('input[name="correo"]');
        var passwordInput = cajaSignUp.element('input[name="password"]');

        nameInput.click()
        nameInput.keys('John');

        lastNameInput.click()
        lastNameInput.keys('Sanabria');

        mailInput.click()
        mailInput.keys('jwsanabriad@unidandes.edu.co');

        passwordInput.click()
        passwordInput.keys('12345678');

        browser.element('/html/body/div[3]/div[2]/div/div/div/div/div/div[1]/div/form/fieldset[4]/div/select').selectByValue('universidad-de-los-andes');
        browser.element('/html/body/div[3]/div[2]/div/div/div/div/div/div[1]/div/form/div/fieldset/div/select').selectByValue('22');

        cajaSignUp.element('input[name="acepta"]').click();
        cajaSignUp.element('.logInButton').click();

        browser.waitForVisible('//*[@id="__next"]/div/div/div[1]/div/div/div[2]/h2', 5000);
        expect(browser.getText('//*[@id="__next"]/div/div/div[1]/div/div/div[2]/h2')).toBe('Ocurrió un error activando tu cuenta');
    });
});



describe('los estudiantes pruebas dirigirse a una pagina de un profesor', function () {
    beforeEach(function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
    });

    afterEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    })

    it('dirigirse a la pagina de un profesor', function () {
        
        browser.url('https://losestudiantes.co');
        browser.waitForVisible('button=Ingresar', 5000);
        
        //browser.scroll('button*=Alfa');
        browser.element('/html/body/div/div/div/div/div[2]/div/center/div').click('button*=Alfab');
        
        browser.waitForVisible('a*=Adolfo Jose Quiroz Salazar', 5000);
        
        browser.element('.row .altura .profesor:nth-child(1)').click('a')
        browser.pause(5000)
        
        browser.element('.descripcionProfesor').element('h3')

        expect(browser.element('.descripcionProfesor').element('h3').getText()).toBe('Matemáticas');

        
    });
});