const listaCompra = ["agua", "cafe", "queso", "galletas"];

listaCompra.push("aceite de girasol");
listaCompra.pop()

const pelisFavoritas = [
    {
        titulo: "scarface",
        director:"Brian De Palma",
        fecha: new Date(1984,3,12)
    },
    {
        titulo:"La vida es bella",
        director:"Roberto Benigni",
        fecha:new Date(1999,2,26)
    },
    {
        titulo:"Infinity war",
        director:"Anthony Russo",
        fecha:new Date(2018,4,27)
    }
];

const nuevasPeliculas = pelisFavoritas.filter(pelicula => pelicula.fecha > new Date (2010,0,1));

const directores = pelisFavoritas.map(pelicula => {
    return pelicula.director
});
const titulos = pelisFavoritas.map(pelicula =>{
    return pelicula.titulo
});

const directoresYtitulos = directores.concat(titulos);

const directoresYtitulos_pro = [...directores,...titulos]
