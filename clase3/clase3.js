const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id/'

const lukeUrl =`${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = {crossDomain:true}

function onResponse(persona){

console.log(`Hola soy ${persona.name}`)

}
function obtenerPersonaje (id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url,opts,onResponse)

}



obtenerPersonaje(2)
