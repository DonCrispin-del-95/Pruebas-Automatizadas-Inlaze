import SignUp_LogIn from "../../pages/SignUp_LogIn"

const signup = new SignUp_LogIn

describe('Ejemeplo de POM en la web de Free Range Testers', () => {

    it('Se debe encontrar el boton de sign up(registro) y ser clickeable', () => {

        signup.navigateHome()
        signup.BotonFormularioUsuario()
        signup.clickBotonCrearUsuario()
        signup.VerificarNombres()
        signup.VerificarEmail()
        signup.VerificarContraseña()
        signup.BotonParaCrearUsuarioI()


    })

    it('El formulario debe permitir registrar un usuario con nombre, email y una contraseña.', () => {

        signup.navigateHome()
        signup.BotonFormularioUsuario()
        signup.clickBotonCrearUsuario()
        signup.NombresUsuario()
        signup.Email()
        signup.ContraseñaUsuarioV()
        signup.ConfContraUsuarioV()
        signup.BotonParaCrearUsuarioA()
        signup.RegistroExitoso()



    })

    it('El email debe cumplir con el estándar de una dirección de correo electrónico.', () => {

        signup.navigateHome()
        signup.BotonFormularioUsuario()
        signup.clickBotonCrearUsuario()
        signup.NombresUsuario()
        signup.EmailIncorrecto()
        signup.Contraseña()
        signup.ConfirmarContraseña()
        signup.BotonParaCrearUsuarioA()

    })

    it('El email debe cumplir con el estándar de una dirección de correo electrónico y ser único en la base de datos.', () => {

        signup.navigateHome()
        signup.BotonFormularioUsuario()
        signup.clickBotonCrearUsuario()
        signup.NombresUsuario()
        signup.Email()
        signup.Contraseña()
        signup.ConfirmarContraseña()
        signup.BotonParaCrearUsuarioA()

    })

    it('La contraseña debe cumplir con los requerimientos para ser valida', () => {

        signup.navigateHome()
        signup.BotonFormularioUsuario()
        signup.clickBotonCrearUsuario()
        signup.NombresUsuario()
        signup.Email()
        signup.Contraseña()
        signup.ConfirmarContraseña()
        signup.BotonParaCrearUsuarioA()



    })

    it('Comprobar que el formulario no se envíe si los campos obligatorios no están completos.', () => {

        signup.navigateHome()
        signup.BotonFormularioUsuario()
        signup.clickBotonCrearUsuario()
        signup.Nombre()
        signup.Email()
        signup.ContraseñaUsuarioV()
        signup.ConfirmarContraseña()
        signup.BotonParaCrearUsuarioI()

    })

    it('Comprobar que el sistema informe si las contraseñas ingresadas no coinciden.', () => {

        signup.navigateHome()
        signup.BotonFormularioUsuario()
        signup.clickBotonCrearUsuario()
        signup.Nombre()
        signup.Email()
        signup.ContraseñaUsuarioV()
        signup.ConfirmarContraseña()
        signup.CompararContraseñas()
        


    })
})