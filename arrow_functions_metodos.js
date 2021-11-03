//metodos avanzados

let notas=[10,3,4,7,8,9];

let notasHastaEl100 =notas.map(function(numero){return numero*10});

//console.log(notasHastaEl100);

let notasAprobadas= notas.filter(nota => nota>=6 )

//console.log(notasAprobadas);

let notasSumadas= notas.reduce(function(estado,numero){ 
    // en el estado se va guardando la suma x defecto comienza en cero
    return estado + numero;
})
//console.log(notasSumadas);

notas.forEach(function(valor,indice){
    console.log(`En la posición ${indice} esta el valor ${valor}`);

});

/*    Nos dejaron una lista con los horarios de partida de algunos aviones. 
Esta lista se reproduce directamente en las pantallas del aeropuerto y, a modo de travesura, 
queremos adelantar una hora cada partida. Nuestro trabajo será utilizar el método map 
para poder lograrlo y almacenar la lista en una variable nueva llamada horariosAtrasados.*/
let horariosPartida = [12, 14, 18, 21];

let horariosAtrasados=horariosPartida.map(
    function(horario){return horario - 1}
);



let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
];

let aprobados=estudiantes.filter(estudiante=>estudiante.promedio>=7) 

let desaprobados=estudiantes.filter(estudiante=>estudiante.promedio<7)

console.log(desaprobados,aprobados);

/*    Nos dejaron un array con las vueltas que dio una corredora 
entrenando en distintos momentos para una maratón.

    Nuestro desafío será crear la variable totalVueltas y almacenar en ella el total,
     usando el método reduce. */

     let vueltas = [5, 8, 12, 3, 22]

     let totalVueltas= vueltas.reduce(function(total,vuelta){ return total+=vuelta} );

     let subvueltas= vueltas.slice(0,3);
     console.log(subvueltas);
     let vueltaOrdenada=vueltas.sort((a,b)=>b-a); // de mayor a menor
    console.log(vueltaOrdenada);

    /*    Para este ejercicio tenemos el array listaDeSupermercado. 
    Nuestro trabajo será mostrar cada ítem de esa lista por consola utilizando un foreach.*/ 
   
    let listaDeSuperMercado = [
        'Bife de chorizo', 
        'Coca Cola', 
        'Bananas', 
        'Lechuga', 
        'Chimichurri', 
        'Lata de tomates', 
        'Arvejas', 
        'Cereales', 
        'Pechuga de pollo', 
        'Leche'
    ];

   
    listaDeSuperMercado.forEach(lista=> console.log(lista))
     
    let listaOrdenada=listaDeSuperMercado.sort()
    console.log(listaOrdenada);


    let encontrarArvejas= listaDeSuperMercado.find(elemento=> elemento==="Arvejas")
    console.log(encontrarArvejas);


    //arrow function

    (a,b)=> a+b;
let sumar =(a,b)=> a+b;
let doble = a => a*2;

let esMultiplo = (a, b) => {
    let resto = a % b; 
    return resto == 0; 
    };

let hola = ()=> "holahola"; // sin parametro

let saludar=nombre=>  'Hola, ' + nombre + '!';
let saludar2=(nombre, apellido) => 'Hola, ' + nombre + ' ' +  apellido + '!';