export default class Productos{

    constructor(productoId, productoNombre, categoriaId, precioUnitario, unidadesStock, discontinuado){
        this._productoId = productoId;
        this._productoNombre = productoNombre;
        this._categoriaId = categoriaId;
        this._precioUnitario = precioUnitario;
        this._unidadesStock = unidadesStock;
        this._discontinuado = discontinuado;
    }

    get productoId(){
        return this._productoId;
    }

    set productoId(productoId){
        this._productoId = productoId;
    }

    get productoNombre(){
        return this._productoNombre;
    }

    set productoNombre(productoNombre){
        this._productoNombre = productoNombre;
    }

    get categoriaId(){
        return this._categoriaId;
    }

    set categoriaId(categoriaId){
        this._categoriaId = categoriaId;
    }

    get precioUnitario(){
        return this._precioUnitario;
    }

    set precioUnitario(precioUnitario){
        this._precioUnitario = precioUnitario;
    }

    get unidadesStock(){
        return this._unidadesStock;
    }

    set unidadesStock(unidadesStock){
        this._unidadesStock = unidadesStock;
    }

    get discontinuado(){
        return this._discontinuado;
    }

    set discontinuado(discontinuado){
        this._discontinuado = discontinuado;
    }

}