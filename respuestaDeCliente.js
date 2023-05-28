class RespuestaCliente {
    constructor(fechaEncuesta, respuestaSeleccionada) {
        this.fechaEncuesta = fechaEncuesta
        this.respuestaSeleccionada = respuestaSeleccionada
    }

    getDescripcionRta() {
        return this.respuestaSeleccionada.getDescripcionRta()
    }

}

export default RespuestaCliente