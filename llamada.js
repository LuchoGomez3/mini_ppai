class Llamada {
    static instancias = []

    constructor(descipcionOperador, detalleAccionRequerida, duracion, encuestaEnviada, observacionAuditor, respuestaDeEncuesta, cambioEstado, cliente) {
        this.descipcionOperador = descipcionOperador
        this.detalleAccionRequerida = detalleAccionRequerida
        this.duracion = duracion
        this.encuestaEnviada = encuestaEnviada
        this.observacionAuditor = observacionAuditor
        this.respuestaDeEncuesta = respuestaDeEncuesta
        this.cambioEstado = cambioEstado
        this.cliente = cliente
        Llamada.instancias.push(this)
    }

    esDePeriodo(fechaInicio, fechaFin) {
        return (this.determinarEstadoInicial() >= fechaInicio && this.determinarEstadoInicial() <= fechaFin)
    }

    determinarEstadoInicial() {
        const cambiosEstado = this.cambioEstado.map(cambio => {
            return cambio.getFechaHoraInicio()
        })

        const fechaMasPequena = new Date(Math.min(...cambiosEstado.map(fecha => fecha.getTime())));

        return fechaMasPequena
    }

    esDePeriodo(fechaInicio, fechaFin) {
        return (this.determinarEstadoInicial() >= fechaInicio && this.determinarEstadoInicial() <= fechaFin)
    }

    tieneRespuestas() {
        return (this.respuestaDeEncuesta.length != 0)
    }

    getNombreClienteDeLlamada() {
        return this.cliente.getNombre()
    }

    determinarUltimoEstado() {
        let fechaMasGrande = this.cambioEstado[0].fechaHoraInicio
        let ultimoEstado = null

        this.cambioEstado.forEach(function (cambio) {
            if (cambio.fechaHoraInicio.getTime() > fechaMasGrande.getTime()) {
                fechaMasGrande = cambio.fechaHoraInicio;
                ultimoEstado = cambio;
            }
        });
        return ultimoEstado.getNombreEstado()
    }

    getDuracion() {
        return this.duracion
    }

    getRespuestas() {
        // return this.respuestaDeEncuesta.getDescripcionRta()
        return this.respuestaDeEncuesta.map(respuesta => {
            return respuesta.getDescripcionRta()
        })
    }

}

export default Llamada