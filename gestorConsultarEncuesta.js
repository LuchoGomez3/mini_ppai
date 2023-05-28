import CambioEstado from "./cambiosEstado.js";
import Cliente from "./cliente.js";
import Encuesta from "./encuesta.js";
import Estado from "./estado.js";
import Llamada from "./llamada.js";
import Pregunta from "./pregunta.js";
import RespuestaCliente from "./respuestaDeCliente.js";
import RespuestaPosible from "./respuestaposible.js";


// ================================================================================
const cliente1 = new Cliente('44593672', 'Francisco Cornejo', 3513459722)
// ================================================================================

// ================================================================================
const estado1 = new Estado('Estado1')
const estado2 = new Estado('Estado2')
const estado3 = new Estado('Estado3')

const cambioEstado1 = new CambioEstado(new Date(2023, 4, 25, 10, 30), estado1)
const cambioEstado2 = new CambioEstado(new Date(2023, 4, 26, 10, 30), estado2)
const cambioEstado3 = new CambioEstado(new Date(2023, 4, 27, 10, 30), estado3)
// ================================================================================

// ================================================================================
const respuesta1 = new RespuestaPosible('Si', 1)
const respuesta2 = new RespuestaPosible('No', 2)
const respuesta3 = new RespuestaPosible('Persona', 1)
const respuesta4 = new RespuestaPosible('Negro', 2)
const respuesta5 = new RespuestaPosible('Rojo', 1)
const respuesta6 = new RespuestaPosible('Azul', 2)


const respuestaDeEncuesta1 = new RespuestaCliente(new Date(2023, 4, 27, 10, 30), respuesta1)
const respuestaDeEncuesta2 = new RespuestaCliente(new Date(2023, 4, 27, 10, 30), respuesta2)
const respuestaDeEncuesta3 = new RespuestaCliente(new Date(2023, 4, 27, 10, 30), respuesta3)

const pregunta1 = new Pregunta('¿Comiste?', [respuesta1, respuesta2]);
const pregunta2 = new Pregunta('¿Que sos?', [respuesta3, respuesta4]);
const pregunta3 = new Pregunta('¿Color Favorito?', [respuesta5, respuesta6]);

const encuesta1 = new Encuesta('encuesta1', new Date(2023, 4, 25, 10, 30), [pregunta1]);
const encuesta2 = new Encuesta('encuesta2', new Date(2023, 4, 25, 10, 30), [pregunta2, pregunta3]);
// ================================================================================

// ================================================================================
const llamada1 = new Llamada('descripcionOperador1', 'detalleAccionRequerida2',
    20, 'Encuesta 1', 'Bonita', [respuestaDeEncuesta1, respuestaDeEncuesta2, respuestaDeEncuesta3], [cambioEstado1, cambioEstado2, cambioEstado3], cliente1);
const llamada2 = new Llamada('descripcionOperador1', 'detalleAccionRequerida2',
    20, 'Encuesta 1', 'Bonita', [respuestaDeEncuesta1, respuestaDeEncuesta3], [cambioEstado1, cambioEstado2], cliente1);
const llamada3 = new Llamada('descripcionOperador1', 'detalleAccionRequerida2',
    20, 'Encuesta 2', 'Bonita', [respuestaDeEncuesta1, respuestaDeEncuesta2], [cambioEstado1, cambioEstado3], cliente1);
const llamada4 = new Llamada('descripcionOperador1', 'detalleAccionRequerida2',
    20, 'Encuesta 3', 'Bonita', [], [], cliente1);

class GestorConsultarEncuesta {
    constructor() {
        this.llamadas = Llamada.instancias
        let fechaInicio = null
        let fechaFin = null
        let llamadaSeleccionada = null
        let cliente = null
        let ultimoEstado = null
        let duracion = null
        let respuestas = null
        let formaGeneracion = null


        this.consultarEncuesta = function () {
            this.pantalla.solicitarSeleccionFechas()
            this.tomarSeleccionFechas(new Date(2022, 4, 27), new Date(2024, 4, 27))
        }

        this.tomarSeleccionFechas = function (fechaIni, fechaF) {
            fechaInicio = fechaIni
            fechaFin = fechaF
            console.log(fechaInicio, fechaFin)
            return this.buscarLlamadasConEncuestaRespondida(fechaInicio, fechaFin)
        }

        this.buscarLlamadasConEncuestaRespondida = function (fechaInicio, fechaFin) {
            const llamadasConEncuestaRespondida = []
            this.llamadas.forEach(llamada => {
                if (llamada.esDePeriodo(fechaInicio, fechaFin) && llamada.tieneRespuestas()) {
                    llamadasConEncuestaRespondida.push(llamada)
                }
            })
            return llamadasConEncuestaRespondida

            //this.tomarSeleccionLlamada(llamada1)
        }

        this.tomarSeleccionLlamada = function (llamada) {
            llamadaSeleccionada = llamada
            cliente = this.buscarClienteDeLlamada(llamadaSeleccionada)
            ultimoEstado = this.buscarUltimoEstado(llamadaSeleccionada)
            duracion = this.buscarDuracion(llamadaSeleccionada)
            respuestas = this.buscarDatosRespuestaCliente(llamadaSeleccionada)
            return {cliente: cliente,ultimoEstado: ultimoEstado,duracion: duracion,respuestas: respuestas}
        }

        this.buscarClienteDeLlamada = function (llamadaSeleccionada) {
            return llamadaSeleccionada.getNombreClienteDeLlamada()
        }

        this.buscarUltimoEstado = function (llamadaSeleccionada) {
            return llamadaSeleccionada.determinarUltimoEstado()
        }

        this.buscarDuracion = function (llamadaSeleccionada) {
            return llamadaSeleccionada.getDuracion()
        }

        this.buscarDatosRespuestaCliente = function (llamadaSeleccionada) {
            return llamadaSeleccionada.getRespuestas()
            // this.pantalla.solicitarSelecwcionFormaGeneracionEncuesta()
        }

        this.tomarSeleccionFormaGeneracionEncuesta = function (eleccion) {
            formaGeneracion = eleccion
            this.generarConsultaEncuesta()
        }

        this.generarConsultaEncuesta = function () {
            console.log('Fecha Inicio:', fechaInicio)
            console.log('==================================================')
            console.log('Fecha Fin:', fechaFin)
            console.log('==================================================')
            console.log('Llamada Seleccionada:', llamadaSeleccionada)
            console.log('==================================================')
            console.log('Cliente:', cliente)
            console.log('==================================================')
            console.log('Nombre Ultimo Estado:', ultimoEstado)
            console.log('==================================================')
            console.log('Duracion:', duracion)
            console.log('==================================================')
            console.log('Respuestas:', respuestas)
            console.log('==================================================')
            console.log('Forma Generacion:', formaGeneracion)
            console.log('==================================================')
            this.finCU()
        }

        this.finCU = function () {
            console.log('FIN')
        }
    }
}
const gestor = new GestorConsultarEncuesta()
export default gestor