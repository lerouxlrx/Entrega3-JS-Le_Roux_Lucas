const imprimirLog = (dato) => console.log(dato);

class Contacto {
    constructor (nombreApellido, telefono, correo, actividad) {
    this.nombreApellido = nombreApellido.toLocaleUpperCase()
    this.telefono = parseInt(telefono)
    this.correo = correo.toLowerCase()
    this.actividad = []
}
agregarActividad(actividad) {
    this.actividad.push(actividad);
}
}


const Contactos = []
const jsonContactos = JSON.stringify(Contactos)

function crearContacto () {
    const nombreContacto = document.getElementById("nombreContacto").value
    const correoContacto = document.getElementById("correoContacto").value
    const telefonoContacto = document.getElementById("telefonoContacto").value

    Contactos.push(new Contacto(nombreContacto, telefonoContacto, correoContacto));

    const jsonContactos = JSON.stringify(Contactos)
    localStorage.setItem("Contactos", jsonContactos);

    imprimirLog (Contactos)
    alert('Contacto guardado con éxito')

    const contactosGuardados = JSON.parse(localStorage.getItem("Contactos"));


    if (contactosGuardados && contactosGuardados.length > 0) {
        const mostrarContactos = document.getElementById("mostrarContactos");

        mostrarContactos.innerHTML = "";

        contactosGuardados.forEach((contacto, index) => {
            mostrarContactos.innerHTML += `${index + 1}. Nombre: ${contacto.nombreApellido}, Correo: ${contacto.correo}, Teléfono: ${contacto.telefono}<br>`;
        });
    }
}

function crearActividad() {
    let listaContactos = mostrarNombres()   
    let contactoEncontrado
    let crearActividad
    do {
        let nombreBuscado = prompt('Los nombres de tus contactos son: '+listaContactos+'\nEscribi el nombre a quien quieras cargarle una actividad: ')
        contactoEncontrado = Contactos.find(Contacto => Contacto.nombre === nombreBuscado.toLocaleUpperCase());
        if (contactoEncontrado) {
        let nuevaActividad = prompt('Escribi la actividad que queres agregar: ')
        contactoEncontrado.agregarActividad(nuevaActividad);
        } else {
        alert ('Nombre no encontrado.')
        contactoEncontrado = 1
        }
    } while (contactoEncontrado == 1)
    
    
}

const btnContacto = document.getElementById("btnContacto")

btnContacto.addEventListener("click", crearContacto)

