import { Router } from "express";
import { actualizarController, eliminarController, insertarController, leerTodoController } from "../controllers/categorias.js";

const router = Router();

router.get('/', leerTodoController);

router.post('/insertar', insertarController);

router.get('/actualizar', actualizarController);

router.get('/eliminar', eliminarController);

export{
    router
}