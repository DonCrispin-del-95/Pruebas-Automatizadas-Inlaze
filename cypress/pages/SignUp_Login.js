
class SignUp_LogIn {


    BotonFormularioUsuario() {
        return cy.get('.text-center > .font-bold')
    }
    NombresUsuario() {
        cy.get('#full-name').type("Carlos Valderrama")
    }
    Nombre() {
        cy.get('#full-name').type("Carlos")
    }
    Email() {
        cy.get('#email').type("valderrama10@hotmail.com")
    }
    EmailIncorrecto() {
        cy.get('#email').type("valde2m.com")
    }
    ContraseñaUsuarioV() {
        cy.get('.join > #password').type("Contra10.*")
    }
    ConfContraUsuarioV() {
        cy.get('.join > #confirm-password').type("Contra10.*")
    }
    Contraseña() {
        cy.get('.join > #password').type("Valde10.*")
    }
    ConfirmarContraseña() {
        cy.get('.join > #confirm-password').type("Valde10.*")
    }
    TextoInicioSesión() {
        cy.get('.text-4xl').should('have.text', 'Sign in')
    }

    RegistroExitoso() {
        cy.get('.ml-3').should('have.text', 'Successful registration!')
    }
    clickBotonCrearUsuario() {
        this.BotonFormularioUsuario().click()
    }
    ClickImagen() {
        cy.get('img').click()
    }
    CerrarSesion() {
        cy.contains('Logout').click()
    }

    VerificaNombreDeUsuario() {
        cy.get('.flex > .font-bold').should('have.text', 'Carlos Valderrama')
    }
    EmailInexistente() {
        cy.get('#email').type("arcticMonkeys@hotmail.com")
        
    }

    UsuarioNoEncontrado() {
        cy.get('.ml-3').should('have.text', 'User not found')
    }
    VerificarNombres() {
        cy.get('#full-name').should('exist')
    }
    VerificarEmail() {
        cy.get('#email').should('exist')
    }
    BotonParaIniciarSesionI() {
        cy.get('[type="submit"]').should('be.disabled')
    }
    BotonParaIniciarSesionA() {
        cy.get('[type="submit"]').should('be.enabled')
        cy.get('[type="submit"]').click()
    }
    VerificarContraseña() {
        cy.get('.join > #password').should('exist')
    }
    BotonParaCrearUsuarioI() {
        cy.get('[type="submit"]').should('be.disabled')
    }
    BotonParaCrearUsuarioA() {
        cy.get('[type="submit"]').should('be.enabled')
        cy.get('[type="submit"]').click()
    }
    CompararContraseñas() {
        cy.get('[errors=""]').should('have.text', ' Passwords do not match ')
    }

    //Navegacion
    navigateHome() {
        cy.visit('https://test-qa.inlaze.com/auth/sign-in')
    }
}

export default SignUp_LogIn