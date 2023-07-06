import { leerTodo, crear } from '../service/categorias.js'
import Categoria from '../models/categorias.js';

const leerTodoController = (req, res) => {
    const arregloCategorias = leerTodo();
    res.render('index', {
        arregloCategorias
    });
}

const insertarController = (req, res) => {
    const identificador = req.body.txtIdentificador;
    const nombre = req.body.txtNombre;
    const descripcion = req.body.txtDescripcion;
    const categoria = new Categoria(identificador, nombre, descripcion);
    crear(categoria);
    const arregloCategorias = leerTodo();
    res.render('index', {
        arregloCategorias
    });
}

const actualizarController = (req, res) => {
    res.render('index');
    console.log('Llamado desde actualizar');
}

const eliminarController = (req, res) => {
    res.render('index');
    console.log('Llamado desde eliminar');
}

export {
    leerTodoController,
    insertarController,
    actualizarController,
    eliminarController
}