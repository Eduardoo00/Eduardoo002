alert("Biendenidos a Pany, somos una marca conocida de producto terminado, en prendas por mayor");
alert("te invitamos a Formar parte de nosotros");
alert("si no estas registrado, te invitamos a hacerlo");

class claves {
  constructor(email, clave, nombre) {
    this.email = email;
    this.clave = clave;
    this.nombre = nombre;
  }
}

let listaDeUsuarios = [];

function ingresarUsuario() {
  let email = prompt("Ingrese su email");
  let clave = prompt("ingrese una clave");
  let nombre = prompt("Nombre completo");

  let nuevoUsuario = new claves(email, clave, nombre);
  listaDeUsuarios.push(nuevoUsuario);
}
ingresarUsuario();

function buscarUsuario(confirmarMail) {
  let chequearEmail = prompt("acceda con su email");
  return confirmarMail.email == chequearEmail;
}

let resultadoEmail = listaDeUsuarios.find(buscarUsuario);
if (resultadoEmail == undefined) {
  alert("Hubo un error, debe registrarse para acceder");
} else {
  function buscarClave(confirmarClave) {
  let chequearClave = prompt("ingrse su contraseña");
  return confirmarClave.clave == chequearClave;
  }
}

let resultadoClave = listaDeUsuarios.find(buscarClave);

if (resultadoClave == undefined) {
  alert("hubo un error, su clave no coinside, debe registrarse para acceder");
} else;

class Local {
  constructor(zona, ubicacion, horarios, productos , linea) {
    this.zona = zona;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.productos = productos;
    this.linea = linea;
  }
 
  cambioDePrecio(precio) {
    if (typeof precio == "number") {
      this.precio = precio;
    }
  }
  
  toString() {
    return `Taller en la zona ${this.zona}\n
    ubicado en ${this.ubicacion}\n 
    Horarios de atencion ${this.horarios}\n 
    Contiene ${this.productos}\n
    Línea de producto ${this.linea}\n
    Precio del equipo U$ ${this.precio}`;
  }
}
let equipo1 = new Local(1, "Caballito/av.Rivadavia", "08am/19pm", "10 buzos/ 10 pantalones Jogger / 10 camperas /10 remeras", "Pany", 0);
let equipo2 = new Local(2, "San Martin/av.101 Dr.Ricardo Balbin", "08am/19pm","20 camperas/ 30 remeras oberzise / 30 boxers", "Pany", 0);
let equipo3 = new Local(3, "Palermo/av.Cordoba", "09am/22pm","20 pantalones jeans/ 10 remerones / 15 gorras / 10 camperones","Pany", 0);
let equipo4 = new Local(4, "Tigre/av.Italia", "09am/22pm","pack 30 pares de Medias/ 30 boxers/ 15 bermudas/ 15 tops/ 15 vinchas", "Pany", 0);

equipo1.cambioDePrecio(400);
equipo2.cambioDePrecio(450);
equipo3.cambioDePrecio(600);
equipo4.cambioDePrecio(500);

alert(equipo1);
alert(equipo2);
alert(equipo3);
alert(equipo4);

let numeroElegido = Number(prompt("Seleccioná un N° de las promos que tenemos para usted!!"));

let usa = 490; 


const cambioDivisa = (precio, usa) => {
  const calcular = precio * usa;
  return calcular;
};
const resultado = cambioDivisa("", usa);

if (numeroElegido === 1) {
  alert("muchas gracias por confiar en nosotros");
  const resultado = cambioDivisa(equipo1.precio, usa);
  alert("El precio en pesos es  $" + resultado);
  alert("siga con su compra en la web");
} else if (numeroElegido === 2) {
  alert("muchas gracias por confiar en nosotros");
  const resultado = cambioDivisa(equipo2.precio, usa);
  alert("El precio en pesos es  $" + resultado);
  alert("siga con su compra en la web");
} else if (numeroElegido === 3) {
  alert("muchas gracias por confiar en nosotros");
  const resultado = cambioDivisa(equipo3.precio, usa);
  alert("El precio en pesos es  $" + resultado);
  alert("siga con su compra en la web");
} else if (numeroElegido === 4) {
  alert("muchas gracias por confiar en nosotros");
  const resultado = cambioDivisa(equipo4.precio, usa);
  alert("El precio en pesos es  $" + resultado);
  alert("siga con su compra en la web");
} else {
  alert("Hubo un error ese no es un dato válido");

  while (    
    numeroElegido !== 1 ||
    numeroElegido !== 2 ||
    numeroElegido !== 3 ||
    numeroElegido !== 4
  )
  {}
  }