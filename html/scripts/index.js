1//
console.log('Hola Mundo a todos')

2//

let nombre = 'sergio'
let edad = 35
let mayorEdad = false;
let direccion = {
    calle:'8 avenida',
    zona: '8'
}

let coloresFavoritos = [
    'rojo','azul'
]

let lenguajesFavoritos =[
    'php','java','javaScrip'
]

let mejorLenguaje = lenguajesFavoritos[0]

let peorLenguaje = lenguajesFavoritos[2]

3//

let numero1 = 5
let numero2 = 10
console.log(numero1+numero2)


console.log(numero1-numero2)
console.log(numero1*numero2)
console.log(numero1/numero2)

4//
let saludo = 'hola'

if(saludo==='hola'){
console.log('ha saludado')
}

5//

let pokemones = ['picachu','charmander', 'bulbasaur'];

console.log(pokemones[0])

console.log(pokemones[1])

console.log(pokemones[2])

console.log(pokemones.toString())


for(let i=0; i<pokemones.length;i++){
    console.log(pokemones[i])
}

console.log('bucle while')
let j = 0;
while(j<pokemones.length){

    console.log(pokemones[j]);

    j++
}

console.log('ejercicio 6')


let pokemones1 = [
    {nombre:'picachu' ,tipo:'electrico'},
    {nombre:'charmander' ,tipo:'fuego'},
    {nombre:'bulbasour', tipo:'hierba'}
]


for(let i=0; i<pokemones1.length;i++){

    if(pokemones1[i].tipo=='fuego')
    console.log(pokemones1[i].nombre + " es un pokemon de tipo fuego")
}


