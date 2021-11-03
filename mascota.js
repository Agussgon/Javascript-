/*const mascota = require("./mascota")
function esperar(ms) {
  let d = new Date();
  let d2 = null;
  do { d2 = new Date(); }
  while (d2 - d < ms);
}

mascota.checkeo();
while (mascota.sigueConVida()) {
  console.log(mascota.status());
  mascota.vivir();
  mascota.comer();
  mascota.pasear();
  mascota.checkeo();
  esperar(600);
} */

//console.log(!mascota.sigueConVida() ? "R.I.P. lo siento..." : "");

const mascota2={
    nombre:"Mica",
    edad:0,
    energiaVital:80,
    hambre:50,
    diversion: 40,
    jugar:true,
    mostrarEstado: function(){ let entretenimiento= this.diversion > 60?"divertido":"aburrido";
        console.log(`nombre:${this.nombre},edad:${this.edad},energía:${this.energiaVital},hambre:${this.hambre},${entretenimiento}`)
    },
    comer: function () {
        this.hambre -= 10
        this.energiaVital += 20  },
     vivir: function () {
            this.edad += 1
            this.energiaVital -=10
            this.hambre +=15
          } ,
    alargarVida(){
        if(this.energiaVital>50 && this.hambre <=50 && this.jugar){this.edad+=1
        return `Feliz cumpleaños, ya tenes ${this.edad}` }else{ return`Estas desnutrido`}
    },
    sigueConVida: function () {
        return this.energiaVital > 0 && this.hambre < 80 && this.hambre >= 0  && this.diversion >40 
      },

}

/*mascota2.mostrarEstado();
console.log(mascota2.alargarVida());
mascota2.vivir();
console.log(mascota2.alargarVida());*/

while (mascota2.sigueConVida()) {
    mascota2.mostrarEstado()
    mascota2.vivir()
    mascota2.comer()
    mascota2.alargarVida()
   };

console.log(!mascota2.sigueConVida() ? "lo siento..." : "");
