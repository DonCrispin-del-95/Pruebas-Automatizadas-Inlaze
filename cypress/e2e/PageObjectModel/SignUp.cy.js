import SignUp_LogIn from "../../pages/SignUp_LogIn"

const home = new SignUp_LogIn

describe('Ejemeplo de POM en la web de Free Range Testers', () => {
//completo
    it('Se debe encontrar el boton de sign up(registro) y ser clickeable', () => {

        home.navigateHome()
        home.BotonFormularioUsuario()
        home.clickBotonCrearUsuario()
        home.VerificarNombres()
        home.VerificarEmail()
        home.VerificarContraseña()
        home.BotonParaCrearUsuarioI()
        

    })
//completo
    it('El formulario debe permitir registrar un usuario con nombre, email y una contraseña.', () => {

        home.navigateHome()
        home.BotonFormularioUsuario()
        home.clickBotonCrearUsuario()
        home.NombresUsuario()
        home.Email()
        home.ContraseñaUsuarioV()
        home.ConfContraUsuarioV()
        home.BotonParaCrearUsuarioA()
        home.RegistroExitoso()



    })
//completo(Bug permite poner cualquier cosa y l oadmite como correo)
    it('El email debe cumplir con el estándar de una dirección de correo electrónico.', () => {

        home.navigateHome()
        home.BotonFormularioUsuario()
        home.clickBotonCrearUsuario()
        home.NombresUsuario()
        home.EmailIncorrecto()
        home.Contraseña()
        home.ConfirmarContraseña()
        home.BotonParaCrearUsuarioA()

    })
//completo(crea el usuario con los mismos correos y sobreescribe uno de los usuarios)
    it('El email debe cumplir con el estándar de una dirección de correo electrónico y ser único en la base de datos.', () => {

        home.navigateHome()
        home.BotonFormularioUsuario()
        home.clickBotonCrearUsuario()
        home.NombresUsuario()
        home.Email()
        home.Contraseña()
        home.ConfirmarContraseña()
        home.BotonParaCrearUsuarioA()

    })
//falta una validación de la contraseña
    it('La contraseña debe cumplir con los requerimientos para ser valida', () => {

        home.navigateHome()
        home.BotonFormularioUsuario()
        home.clickBotonCrearUsuario()
        home.NombresUsuario()
        home.Email()
        home.Contraseña()
        home.ConfirmarContraseña()



    })
//este si esta completo 
    it('Comprobar que el formulario no se envíe si los campos obligatorios no están completos.', () => {

        home.navigateHome()
        home.BotonFormularioUsuario()
        home.clickBotonCrearUsuario()
        home.Nombre()
        home.Email()
        home.ContraseñaUsuarioV()
        home.ConfirmarContraseña()
        home.BotonParaCrearUsuarioI()

    })
    //incompleto comparacion de contraseñas
    it('Comprobar que el formulario no se envíe si los campos obligatorios no están completos.', () => {

        home.navigateHome()
        home.BotonFormularioUsuario()
        home.clickBotonCrearUsuario()
        home.Nombre()
        home.Email()
        home.ContraseñaUsuarioV()
        home.ConfirmarContraseña()
        home.CompararContraseñas()
       

    })
})