// Variables y Constantes
const botonLogin = document.getElementById("btnlogin");
const botonSign = document.getElementById("btnsign");
const pantallaNegra = document.getElementById("contenedorlogin");
const pantallaNegraSign = document.getElementById("contenedorsign");
const contenedorModal = document.getElementById("contenedormodal");
const contenedorModalSign = document.getElementById("contenedormodalsign");
const modalLogin = document.getElementById("modallogin");
const modalSign = document.getElementById("modalsign");
const botonCruz = document.getElementById("botonSalirFormulario");
const botonCruzSign = document.getElementById("salirSign");
const cuadradoRecuerdame = document.getElementById("checkcuadrado");
const labelRecuerdame = document.getElementById("recuerdamecuadrado");
const rellenoCheck = document.getElementById("rellenoCuadrado");
const containerMenu = document.getElementById("containermenu");
const formulario = document.getElementById("formulario");
const nombreSign = document.getElementById("firstname");
const apellidoSign = document.getElementById("lastname");
const mailSign = document.getElementById("mailsign");
const userNameSign = document.getElementById("username");
const contraseniaSign = document.getElementById("password");
const body = document.querySelector("body");

// Guardando datos

//Sign Up
class Usuario{
   
    constructor(firstName,lastName,email,username,password){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.username = username;
    this.password = password;
    }
}


const usuarios = [];

const crearUsuario = () => {

    let primerNombre = nombreSign;
    let apellido = apellidoSign;
    let correoElectronico = mailSign;
    let nombreDeUsuario = userNameSign;
    let contrasenia = contraseniaSign;
    const nuevoUsuario = new Usuario(primerNombre,apellido,correoElectronico,nombreDeUsuario,contrasenia);

    usuarios.push(nuevoUsuario);
    return usuarios;
}

// Eventos para abrir el modal
botonLogin.addEventListener("click", ()=>{
    pantallaNegra.style.display = "block";
    contenedorModal.style.transform = "translateY(0%)";
    document.body.style.overflow = "hidden";
}); 

cuadradoRecuerdame.addEventListener("click", ()=>{
    if ( rellenoCheck.style.visibility = "hidden") {
        rellenoCheck.style.visibility = "visible";
    }
}); 

labelRecuerdame.addEventListener("click", ()=>{
    if ( rellenoCheck.style.visibility = "hidden") {
        rellenoCheck.style.visibility = "visible";
    }
}); 

botonSign.addEventListener("click", crearUsuario)

botonSign.addEventListener("click", ()=>{
    pantallaNegraSign.style.display = "block";
    contenedorModalSign.style.transform = "translateY(0%)";
    document.body.style.overflow = "hidden";
}); 


botonCruz.addEventListener("click", ()=>{
    pantallaNegra.style.display = "none";
    document.body.style.overflow = "auto";
});

botonCruzSign.addEventListener("click", ()=>{
    pantallaNegraSign.style.display = "none";
    document.body.style.overflow = "auto";
});


document.addEventListener('click', (event) => {
    const boolIsOutside = document.getElementById("contenedorlogin").isSameNode(event.target);
    const boolIsOutside2 =  document.getElementById("contenedorsign").isSameNode(event.target);
    if (boolIsOutside) {
        pantallaNegra.style.display = "none"
        document.body.style.overflow = "auto";
    }
    if (boolIsOutside2) {
        pantallaNegraSign.style.display = "none";
        document.body.style.overflow = "auto";
    }
})

