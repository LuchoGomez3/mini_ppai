import Encuesta from "./encuesta.js"

class Pregunta {
    static instancias = []

    constructor(pregunta, respuesta) {
        this.pregunta = pregunta
        this.respuesta = respuesta
        Pregunta.instancias.push(this)
    }

    static getDescripcion(respuestaParametro) {
        //     let preguntas = []
        //     console.log(this.respuesta)
        //     if (this.respuesta.forEach(resp => {
        //         if (resp.descripcion == descripcion) {
        //             preguntas.push(this.pregunta)
        //         }
        //     }))
        //     console.log(preguntas)
        //         return [preguntas,
        //             Encuesta.getDescripcionEncuesta(preguntas)]
        // 
        let preguntaRespondida = null
        this.instancias.map(pregunta => {
            pregunta.respuesta.map(respuesta => {
                if (respuesta == respuestaParametro) {
                    preguntaRespondida = pregunta

                }
            })
        })
        return { encuesta: Encuesta.getDescripcionEncuesta(preguntaRespondida), pregunta: preguntaRespondida.pregunta }


        // let encuestas = Encuesta.getDescripcionEncuesta()
        // encuestas.map(encuesta => {
        //     encuesta[1].map(preguntaEncuesta => {
        //         this.instancias.map(preguntaPreguntada => {
        //             if (preguntaEncuesta == preguntaPreguntada) {
        //                 console.log('nashe')
        //             }
        //         })
        //     })
        // })
    }
}

export default Pregunta