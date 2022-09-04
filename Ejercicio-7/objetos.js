const datos_personales = {
    nombre: "Pedro",
    apellido:"Lozano",
    edad:35,
    altura:172,
    eresDesarrollador:false
};

const edad = datos_personales.edad;
console.log(edad);

const lista = [
    {
        ...datos_personales
    },{
        nombre: "Alexis",
        apellido:"Cortez",
        edad:34,
        altura:175,
        eresDesarrollador:false
    },{
        nombre: "Ruben",
        apellido:"Sola",
        edad:36,
        altura:177,
        eresDesarrollador:false
    }
]

console.log(lista);

const lista_ordenada = lista.sort((a,b) => b.edad - a.edad)
console.log(lista_ordenada);