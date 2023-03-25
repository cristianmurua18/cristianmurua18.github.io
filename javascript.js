

// Creo las constantantes para almacenar los valores ingresados al formulario

const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const numero = document.getElementById("telefono")
const form = document.getElementById("form")
const parrafo = document.getElementById("errores")

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener('submit', validarFormulario); 
});

// Creo una funcion para validar el formulario 

function validarFormulario(evento) {
evento.preventDefault();
let errores = ""
let entrar = false
let validaremail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

if(nombre.value.length <6){
    errores += 'El nombre no es valido, debe tener mas de 6 caracteres <br>'
    entrar = true
}

if(telefono.value.length<6){
    errores += 'El telefono es muy corto, debe tener mas de 6 caracteres <br>'
    entrar = true
}

if(!validaremail.test(email.value)){
    errores += 'El email no es valido, respeta el formato <br>'
    entrar = true
} 

if(entrar){
    parrafo.innerHTML = errores
} else {
    nombre.value = ""
    email.value = ""
    telefono.value = ""
    consulta.value = ""
    parrafo.innerHTML = "Formulario Enviado" 
    this.submit();
}
}

