class Encuesta {
    static instancias = []

    constructor(descripcion, fechaFinVigencia, pregunta) {
        this.descripcion = descripcion
        this.fechaFinVigencia = fechaFinVigencia
        this.pregunta = pregunta
        Encuesta.instancias.push(this)
    }

    static getDescripcionEncuesta(preguntaRespondida) {
        // let encuestas = []
        // this.pregunta.forEach(preg => {
        //     preguntas.forEach(p => {
        //         if (preg.pregunta == p.pregunta) {
        //             encuestas.push(preg)
        //         }
        //     })
        // })

        let encuestaRespondida = null
        this.instancias.map(instancia => {
            instancia.pregunta.map(pregunta => {
                if (pregunta == preguntaRespondida) {
                    encuestaRespondida = instancia
                }
            })
        })

        return encuestaRespondida.descripcion
    }

}

export default Encuesta