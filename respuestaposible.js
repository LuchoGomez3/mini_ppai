class RespuestaPosible{
    constructor(descripcion, valor){
        this.descripcion = descripcion;
        this.valor = valor;
    }
    getDescripcionRta(){
        return this.descripcion
    }
}
export default RespuestaPosible;