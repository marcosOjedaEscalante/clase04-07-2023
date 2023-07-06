const leerTodo = (req, res) => {
    res.render('index');
    console.log('Llamado desde raíz');
}

const insertar = (req, res) => {
    res.render('index');
    console.log('Llamado desde insertar');
}

const actualizar = (req, res) => {
    res.render('index');
    console.log('Llamado desde actualizar');
}

const eliminar = (req, res) => {
    res.render('index');
    console.log('Llamado desde eliminar');
}

export{
    leerTodo,
    insertar,
    actualizar,
    eliminar
}