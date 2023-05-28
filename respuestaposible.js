import Pregunta from "./pregunta.js"

class RespuestaPosible {
    constructor(descripcion, valor) {
        this.descripcion = descripcion
        this.valor = valor
    }

    getDescripcionRta() {
        return {datosEncuesta: Pregunta.getDescripcion(this), descRespuesta: this.descripcion}
    }
}

export default RespuestaPosible