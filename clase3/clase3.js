const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id/'

const lukeUrl =`${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = {crossDomain:true}


function obtenerPersonaje (id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url,opts,callback).fail(function (){
    	console.log(`Ocurrio un error en el personaje ${id}`)
    })

}


obtenerPersonaje(1, function (persona){
		console.log(`Hola soy ${persona.name}`)
		obtenerPersonaje(2, function (persona){
			console.log(`Hola soy ${persona.name}`)
				obtenerPersonaje(3, function (persona){
				console.log(`Hola soy ${persona.name}`)
		})
	})

})


