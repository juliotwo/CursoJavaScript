const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id/'

const lukeUrl =`${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = {crossDomain:true}


function obtenerPersonaje (id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url,opts,callback)

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


