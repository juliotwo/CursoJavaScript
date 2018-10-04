const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id/'

const lukeUrl =`${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = {crossDomain:true}

function obtenerPersonaje (id ){
	
	return new Promise (function(resolve,reject){
	    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
	    $.get(url,opts,function(data){
	    	resolve(data)

	    })
	    .fail(()=> reject(id))

	})
}

function onError(id){
	console.log(`Sucedio un error en el personaje ${id}`)

}

obtenerPersonaje(1)
	.then(Personaje=>{ 
		console.log(`El personaje es ${Personaje.name}`)
		return obtenerPersonaje(2)				
		})
	.then(Personaje=>{ 
		console.log(`El personaje es ${Personaje.name}`)
		return obtenerPersonaje(3)				
		})
	.then(Personaje=>{ 
		console.log(`El personaje es ${Personaje.name}`)			
		})
	.catch(onError)


// function obtenerPersonaje (id, callback){
//     const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
//     $.get(url,opts,callback)
//     .fail(function (){
//     	console.log(`Ocurrio un error en el personaje ${id}`)
//     })

// }


// obtenerPersonaje(1, function (persona){
// 		console.log(`Hola soy ${persona.name}`)
// })
