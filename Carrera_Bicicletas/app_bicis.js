
let jsonHelper= require("./jsonHelper"); 


/*A. Crear un objeto literal que represente la aplicación.
El objeto será la representación de nuestra carrera
B. Agregar una propiedad llamada bicicletas en la que asignarás las
bicicletas obtenidas a partir del método leer del objeto requerido como
módulo
C. Agregar una propiedad llamada bicicletasPorTanda que contenga el
valor 4. Este valor representará la cantidad máxima de bicicletas por
tanda.*/

const carrera={
 bicicletas:jsonHelper.leerJson("bicicletas"),
 bicicletasPorTanda:4, 
//listando los competidores, foreach no retorna nada

listarCiclistas:function(arrayBicis){
    arrayBicis.forEach((bici) => {
        let habilitado= !bici.dopaje?"habilitado":"inhabilitado";
        console.log(
            `Ciclista: ${bici.ciclista}, marca: ${bici.marca}, rodado: ${bici.rodado},
             peso: ${bici.peso}kg, largo: ${bici.largo}cm, estado: ${habilitado}.` 
        );
        
    });

    },
 /*
 D. Agregar un método ciclistasHabilitados que devuelva una lista donde los
ciclistas tengan un dopaje negativo.
○ Este método no recibirá ningún parámetro.
○ Este método devolverá un array con los ciclistas que estén
habilitados para correr.*/ 

ciclistasHabilitados:function(){
    
return this.bicicletas.filter( (bici)=> bici.dopaje=== false)
},

/*E. Agregar un método buscarPorId que permita buscar un ciclista en
función de su id.
○ Este método recibirá por parámetro un number que represente el
id a buscar */

buscarPorId:function(numeroId){
   return  this.bicicletas.find((bici)=>bici.id === numeroId);

}

    
}


//Listando ciclistas habilitados
carrera.listarCiclistas(carrera.ciclistasHabilitados()) ;
//console.log(carrera.bicicletas);

console.log(carrera.buscarPorId(1));
