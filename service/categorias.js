// Primero pauetes de node
import { readFileSync, writeFileSync } from 'fs';
// Segundo paquetes de terceros

// Tercero paquetes personales
import Categoria from '../models/categorias.js';

// Crear datos
const crear = (categoria) => {
    const arregloCategorias = [];
    let cadena = '';
    let datos = readFileSync('./datosHoy/categorias.csv', 'utf-8');
    datos = datos.replace(/\r/g, '');
    datos = datos.replace(/\n/g, ';');
    datos = datos.split(';');
    datos.forEach((elemento, indice) => {
        if((indice + 1) % 3 == 0){
            const categoria = new Categoria(datos[indice - 2], datos[indice - 1], datos[indice]);
            arregloCategorias.push(categoria);
        }
    });
    arregloCategorias.push(categoria);
    arregloCategorias.forEach(categoria => {
        cadena += `${categoria.categoriaId};${categoria.categoriaNombre};${categoria.descripcion}\n`;
    });
    writeFileSync('./datosHoy/categorias.csv', cadena);
}

// Leer datos todo
const leerTodo = () => {

}

// Actualizar datos
const actualizar = () => {

}

// Eliminar datos
const eliminar = () => {

}