export default class RespuestaDeCliente{
    constructor(fechaEncuesta, respuestaPosible){
        this.fechaEncuesta = fechaEncuesta;
        this.respuestaPosible = respuestaPosible

    }
    getFechaEncuesta(){
        return this.fechaEncuesta

    }

    setFechaEncuesta(fecha){
        this.fechaEncuesta = fecha    

    }

    getDescripcionRta(){

        return this.respuestaPosible.getDescripcion()

    }

}