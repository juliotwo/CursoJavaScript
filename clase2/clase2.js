//CTRL+k+b para abrir barra lateral

// function heredaDe(prototipoHijo,prototipoPadre){
//     var fn = function(){}
//     fn.prototype = prototipoPadre.prototype
//     prototipoHijo.prototype = new fn
//     prototipoHijo.prototype.constructor= prototipoHijo

// }


// function Persona(nombre, apellido, altura){
// this.nombre= nombre
// this.apellido= apellido
// this.altura= altura
// }

// Persona.prototype.saludar = function (){

//     console.log(`Hola me llamo ${this.nombre}`)
// }

// Persona.prototype.soyAlto= function(){
// return thi.altura>1.8
// }
// heredaDe(Desarrollador,Persona)
// function Desarrollador(nombre,apellido){
//     this.nombre=nombre
//     this.apellido=apellido
// }

// Desarrollador.prototype.saludar = function (){
//     console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
// }
class Persona{

    constructor(nombre,apellido,altura)
            {this.nombre= nombre
            this.apellido= apellido
            this.altura= altura}
    saludar(fn){
        console.log(`Hola me llamo ${this.nombre}`)
            if (fn){
            fn (this.nombre,this.apellido, false)
        }

    }
    soyAlto(){
        return thi.altura>1.8
    }


}

class Desarrollador extends Persona {
    constructor (nombre, apellido, altura){
        super(nombre,apellido,altura)
        

    }
    saludar(fn){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
        if (fn){
            fn (this.nombre,this.apellido, true)
        }
    }


}

function responderSaludo(nombre,apellido,esDev){


    console.log(`Buen dia ${nombre} ${apellido}`)
    if (esDev){
        console.log('AH desarrollador')
    }
}


var julio = new Persona('julio','vargas',1.5)
var arturo = new Desarrollador('aruturo','vargas',1.5)