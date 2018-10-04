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

async function obtenerPersonajes (){

var ids= [1,2,3,4,5,6,7]
var promesas = ids.map(id => obtenerPersonaje(id))



try {
	var personajes = await Promise.all(promesas)
	console.log(personajes)
	console.log("SAsja")
} catch(id) {
	onError(id)	
}



	// Promise.all(promesas)
	// .then(personajes => console.log(personajes[0].name))
	// .catch(onError)

}


obtenerPersonajes()
// var promesas = ids.map(function(id){
// 	return obtenerPersonaje(id)
// })



// obtenerPersonaje(1)
// 	.then(Personaje=>{ 
// 		console.log(`El personaje es ${Personaje.name}`)
// 		return obtenerPersonaje(2)				
// 		})
// 	.then(Personaje=>{ 
// 		console.log(`El personaje es ${Personaje.name}`)
// 		return obtenerPersonaje(3)				
// 		})
// 	.then(Personaje=>{ 
// 		console.log(`El personaje es ${Personaje.name}`)			
// 		})
// 	.catch(onError)

