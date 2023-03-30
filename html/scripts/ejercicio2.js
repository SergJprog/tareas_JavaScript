//ejercicio 1

function doble(n) {
  return n * 2;
}

let dobleflecha = (n) => n * 2;

console.log(doble(5));
console.log(dobleflecha(5));

//ejercicio 2

function Cuadrado(n) {
  return Math.pow(n, 2);
}
CuadradoFlecha = (n) => Math.pow(n, 2);

console.log(Cuadrado(5));
console.log(CuadradoFlecha(5));

//ejercicio 3

function par(n) {
  if (n % 2 === 0) {
    return "es par";
  } else {
    return "es impar";
  }
}

parFlecha = (n) => {
  if (n % 2 === 0) {
    return "es par";
  } else {
    return "es impar";
  }
};

console.log(par(3));
console.log(parFlecha(3));

//5

const personas = [
  { nombre: "Juan", edad: 18 },

  { nombre: "María", edad: 16 },

  { nombre: "Pedro", edad: 20 },

  { nombre: "Pablo", edad: 15 },

  { nombre: "Laura", edad: 19 },
];

function edadMayores(array) {
  let mayores = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].edad >= 18) {
      mayores.push(array[i]);
    }
  }
  return mayores;
}

console.log(edadMayores(personas));


function edadMenor(array) {
let joven = array[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i].edad < joven.edad) {
      joven = array[i]
    }
  }
  return joven;
}

console.log(edadMenor(personas));

function edadMayor(array) {
  let mayor = array[0]
    for (let i = 0; i < array.length; i++) {
      if (array[i].edad > mayor.edad) {
        mayor = array[i]
      }
    }
    return mayor;
  }
  
  console.log(edadMayor(personas));
  