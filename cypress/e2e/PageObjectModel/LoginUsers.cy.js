import SignUp_LogIn from "../../pages/SignUp_LogIn"

const login = new SignUp_LogIn

describe('Ejecutar las pruebas respecto al login', () => {

    it('verificar que en la pagina principal los campos necesarios ', () => {
        login.navigateHome()
        login.VerificarEmail()
        login.VerificarContraseña()
        login.BotonParaIniciarSesionI()

    })

    it('Validar que el formulario de login no se envíe si los campos no están completos.', () => {
        login.navigateHome()
        login.Email()
        login.BotonParaIniciarSesionI()

    })
    it('Comprobar que al ingresar se muestre el nombre del usuario.', () => {
        login.navigateHome()
        login.Email()
        login.Contraseña()
        login.BotonParaIniciarSesionA()
        login.VerificaNombreDeUsuario()
        
        

    })  
    it('Verificar que la plataforma permita cerrar la sesión correctamente.', () => {
        login.navigateHome()
        login.Email()
        login.Contraseña()
        login.BotonParaIniciarSesionA()
        login.VerificaNombreDeUsuario()
        login.ClickImagen()
        login.CerrarSesion()
        login.TextoInicioSesión()
        

    })  
    it('Iniciar Sesión con un correo inexistente en la base de datos', () => {
        login.navigateHome()
        login.EmailInexistente()
        login.Contraseña()
        login.BotonParaIniciarSesionA()
        login.UsuarioNoEncontrado()
        
        

    })  
})