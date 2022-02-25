

//constructor
function Cliente(nroCuenta,tipoDeCuenta,saldoEnPesos,titularCuenta){
    this.nroCuenta=nroCuenta;
    this.tipoDeCuenta=tipoDeCuenta;
    this.saldoEnPesos=saldoEnPesos;
    this.titularCuenta=titularCuenta;
};


let nuevoCliente= new Cliente(5486273626,"Cuenta Corriente",9800,"Juan Perez");
console.log(nuevoCliente);


// array de objetos 
const listaClientes= [
{   nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",

}, {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },

];

//agrego el nuevo cliente
listaClientes.push(nuevoCliente);

console.log(listaClientes);

//creando el banco
const banco={
    clientes:listaClientes,

   
    consultarCliente:function(nombreCliente){
        let clienteBuscado=[];
        for (let i=0; i< this.clientes.length;i++) {
            if (this.clientes[i].titularCuenta == nombreCliente){
               clienteBuscado.push(this.clientes[i]);
            }
        }
        if (clienteBuscado){return clienteBuscado;}
        else{ return "no encontrado";}
    },

    consultarCliente2:function(nombreCliente){
        let cliente;

        for (let i=0; i< this.clientes.length;i++) {
            if (this.clientes[i].titularCuenta == nombreCliente){
                cliente= this.clientes[i];
              return cliente;
            }// else{ return "no encontrado";}
        } if (!cliente){return "Cliente inexistente";}},
    
    deposito:function(titularCuenta,deposito){
        let clienteBuscado;
        for(i=0; i< this.clientes.length;i++){
            if(this.clientes[i].titularCuenta== titularCuenta)
            {   clienteBuscado= this.clientes[i].titularCuenta;
                this.clientes[i].saldoEnPesos += deposito;

                return this.clientes[i].titularCuenta + " su nuevo saldo es de "+ this.clientes[i].saldoEnPesos;}
               
        }
        if(!clienteBuscado){return "cliente no encontrado"; }  
    },

    extraccion:function(nroCuenta,monto){
        let numeroCuenta;
        for(i=0; i< this.clientes.length;i++){
            if(this.clientes[i].nroCuenta== nroCuenta && this.clientes[i].saldoEnPesos>= monto)
            {    numeroCuenta=this.clientes[i].nroCuenta ;
                 this.clientes[i].saldoEnPesos -= monto;
                 return  "La cuenta "+ numeroCuenta+ " tiene un saldo actual de $"+ 
            this.clientes[i].saldoEnPesos}


            else if(this.clientes[i].saldoEnPesos<monto){
                    return "Fondos insuficientes"; if(!numeroCuenta){return "Cuenta inexistente"} 
                } 

            
         }
            
            if(!numeroCuenta){return "Cuenta inexistente"}
        },

        // filtrar los clientes que tengan un saldo inferior a 10000

        filtrarClientesDMil: function(){
            let clientesMenosDMil=[]
            for(i=0;i<this.clientes.length;i++){
                if(this.clientes[i].saldoEnPesos < 10000){
                 clientesMenosDMil.push(this.clientes[i]);   
                }
                
            }
            return clientesMenosDMil;
        },

        // arrow function, if ternario , filter 

        filtrarClientes2: function (){
            let clientesMenosDMil=[];
            this.clientes.filter(
                (cliente) => cliente.saldoEnPesos<10000?
                clientesMenosDMil.push(cliente):"No existen clientes con un saldo inferior a 10000"
            )
            return clientesMenosDMil;

        }
       

       }
    
       
    


console.log(banco.consultarCliente("Juan Perez"))
console.log(banco.consultarCliente2("Juana Perez"))
//

console.log(banco.deposito("Juan Perez",200));
console.log(banco.deposito("Juana Perez",200));

//
console.log(banco.extraccion(7401971607,30000));
console.log(banco.extraccion(7401971607,3000));

//
console.log(banco.filtrarClientesDMil());
console.log(banco.filtrarClientes2());
