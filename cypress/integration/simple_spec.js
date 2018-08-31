describe('Ejercicios de pruebas 1', function(){
   it('Ingreso fallido', function(){
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("worngemail@example.com.co")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("1234")
        cy.get('.cajaLogIn').contains('Ingresar').click()
        cy.contains('Upss! El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
    })

    it('Crear cuenta en la aplicación', function(){
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("William")
        cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Sanabria")
        cy.get('.cajaSignUp').find('input[name="correo"]').click().type("jwsanabriad@gmail.com")
        cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select('Universidad de los Andes')
        cy.get('.cajaSignUp').find('input[type="checkbox"]').check('on')
        cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('Maestría en Ingeniería de Software')
        cy.get('.cajaSignUp').find('input[name="password"]').click().type("12345678")
        cy.get('.cajaSignUp').find('input[name="acepta"]').check()
        cy.get('.cajaSignUp').contains('Registrarse').click()
        cy.contains('Registro exitoso!')
    })


    it('Login correcto', function(){
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("jwsanabriad@uniandes.edu.co")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("12345678")
        cy.get('.cajaLogIn').contains('Ingresar').click()
        cy.get('.navbar-nav').find('#cuenta').click()
        .get('.dropdown-menu').contains('Salir')
        
    })

    
    it('Crear cuenta en los estudiantes y falla por correo existente', function(){
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("William")
        cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Sanabria")
        cy.get('.cajaSignUp').find('input[name="correo"]').click().type("jwsanabriad@uniandes.edu.co")
        cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select('Universidad de los Andes')
        cy.get('.cajaSignUp').find('input[type="checkbox"]').check('on')
        cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('Maestría en Ingeniería de Software')
        cy.get('.cajaSignUp').find('input[name="password"]').click().type("12345678")
        cy.get('.cajaSignUp').find('input[name="acepta"]').check()
        cy.get('.cajaSignUp').contains('Registrarse').click()
        cy.contains('Ocurrió un error activando tu cuenta')
    })
})



describe('Ejercicios de pruebas 2', function(){
    it('Busqueda de profesor', function(){
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("jwsanabriad@uniandes.edu.co")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("12345678")
        cy.get('.cajaLogIn').contains('Ingresar').click()
        cy.get('.navbar-nav').find('#cuenta').click()
        cy.get('.dropdown-menu').contains('Salir')

        cy.get('.Select-input').find('input[role="combobox"]').type("Mario Linares Vasquez", {force:true})
        //cy.wait(2000)
        cy.get('.buscador').find('input[role="combobox"]').type('{downarrow}{downarrow}{enter}')
        cy.wait(2000)
        //cy.get('.Select-input').find('input[role="combobox"]').click({force:true}).type("Mario Linares Vasquez")
        //cy.get('.Select-option').click()
        //cy.get('.Select-input').find('input').click({force:true})
        //cy.get('.Select-arrow-zone').click() 
        //cy.get('.Select-input').find('input').type("Mario Linares Vasquez", {force:true, timeout: 10000} )
        //cy.get('.Select-arrow-zone').click()
        //cy.get('.Select-menu-outer').find('#react-select-required_error_checksum--option-0').click()
        cy.contains('Mario Linares Vasquez')
        cy.contains('Ingeniería de Sistemas')
        cy.contains('Universidad de los Andes')
        
    })
})


describe('Ejercicios de pruebas 3', function(){
    it('Reenvio a la pagina de un profesor', function(){
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Alfabético').click()
        cy.contains('Adolfo Jose Quiroz Salazar').click()
        cy.contains('Adolfo Jose Quiroz Salazar')
        cy.contains('Matemáticas')
        cy.contains('Universidad de los Andes')        
    })
})


describe('Ejercicios de pruebas 4', function(){
    it('Filtros por materia', function(){
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("jwsanabriad@uniandes.edu.co")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("12345678")
        cy.get('.cajaLogIn').contains('Ingresar').click()
        cy.get('.navbar-nav').find('#cuenta').click()
        .get('.dropdown-menu').contains('Salir')
        cy.contains('Alfabético').click()
        cy.contains('Adolfo Jose Quiroz Salazar').click()
        cy.contains('Adolfo Jose Quiroz Salazar')
        cy.contains('Matemáticas')
        cy.contains('Universidad de los Andes')
        cy.get('.statsProfesorDropdownItemChecked').find('input[name="id:MATE1214C"]').check()
        cy.contains('66.67% de los estudiantes lo aprueban')
    })

})