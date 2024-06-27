//   3 En una granja remota, un grupo de ovejas se encuentra en peligro.
//  Están encerradas en diferentes corrales, algunas sanas y salvas, pero otras enfermas 
//  o incluso enfrentando la amenaza de un lobo feroz. Tu misión, como programador experto, es crear 
//  un programa en JavaScript que te ayude a rescatar a las ovejas vivas y preparar el terreno para su futuro 
//  bienestar.

//     const corrales = [
//         [ 'oveja', 'oveja', '', 'oveja', '' ],
//         [ 'oveja', 'oveja', 'oveja', 'oveja', '' ],
//         [ 'oveja', 'muerta', 'lobo', '', 'muerta' ]
//     ]
// La siguiente lista corrales representa los corrales.

// Cada posición en la lista contiene un string que indica el estado de un animal:

// oveja: Oveja sana y salva.
// muerta: Oveja que necesita ser removida del corral.
// lobo: ¡Un peligro para las ovejas!
// '': Un espacio libre en el corral.
// Objetivos:

// Usando funciones deberás realizar las siguientes tareas:
// Contar las ovejas vivas: Recorre cada corral y determina cuántas ovejas sanas y salvas hay en total.
// Contar los espacios libres: Identifica cuántos espacios vacíos hay en los corrales,
//  considerando que los espacios con animales muertos también deben ser liberados.
// Neutralizar al lobo: Si encuentras un lobo en algún corral, elimínalo (imagina que lo conviertes en 
//  una útil chaqueta de piel) y cuenta el espacio que deja libre como si estuviera vacío.
// Incorporar nuevas ovejas: Utiliza el dinero obtenido por eliminar lobos para comprar 2 nuevas ovejas por 
// cada uno. Busca espacios libres en los corrales para colocarlas y aumentar la población ovina

const granjas = [
    ['oveja', 'oveja', '', 'oveja', ''],
    ['oveja', 'oveja', 'oveja', 'oveja', ''],
    ['oveja', 'muerta', 'lobo', '', 'muerta']
];


function contarOvejasVivas(granjas) {
    let ovejasVivas = 0;
    granjas.forEach(granja => {
        granja.forEach(animal => {
            if (animal === 'oveja') {
                ovejasVivas++;
            }
        });
    });
    return ovejasVivas;
}
function contarEspaciosLibres(granjas) {
    let espaciosLibres = 0;
    granjas.forEach(granja => {
        granja.forEach(animal => {
            if (animal === '' || animal === 'muerta') {
                espaciosLibres++;
            }
        });
    });
    return espaciosLibres;
}
function eliminarLobo(granjas) {
    granjas.forEach(granja => {
        const indiceLobo = granja.indexOf('lobo');
        if (indiceLobo !== -1) {
            granja[indiceLobo] = ''; o
        }
    });
}
function agregarNuevasOvejas(granjas, cantidadLobos) {
    const cantidadNuevasOvejas = cantidadLobos * 2;
    let indiceGranja = 0;
    for (let i = 0; i < cantidadNuevasOvejas; i++) {
        while (granjas[indiceGranja].includes('muerta') || granjas[indiceGranja].includes('lobo')) {
            indiceGranja = (indiceGranja + 1) % granjas.length;
        }
        const indiceEspacioLibre = granjas[indiceGranja].indexOf('');
        granjas[indiceGranja][indiceEspacioLibre] = 'oveja';
    }
}
console.log("Ovejas vivas:", contarOvejasVivas(granjas));
console.log("Espacios libres:", contarEspaciosLibres(granjas));
eliminarLobo(granjas);
console.log("Después de eliminar al lobo:");
console.log(granjas);
agregarNuevasOvejas(granjas, 1); 
console.log("Después de agregar nuevas ovejas:");
console.log(granjas);