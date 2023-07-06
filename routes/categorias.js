import { Router } from "express";
import { actualizar, eliminar, insertar, leerTodo } from "../controllers/categorias.js";

const router = Router();

router.get('/', leerTodo);

router.get('/insertar', insertar);

router.get('/actualizar', actualizar);

router.get('/eliminar', eliminar);

export{
    router
}