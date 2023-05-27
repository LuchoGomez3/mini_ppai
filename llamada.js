import CambioEstado from "./cambiosEstado.js";
import Estado from "./estado.js";


class Llamada {
    constructor(descripcionOperador, detalleAccionRequerida,
        duracion, encuestaEnviada, obervacionAuditor, cliente, cambioEstado) {
            this.operador = descripcionOperador;
            this.accionRequerida = detalleAccionRequerida;
            this.duracion = duracion;
            this.encuestaEnviada = encuestaEnviada;
            this.obervacionAuditor = obervacionAuditor;
            this.cliente = cliente
            this.cambioEstado = [cambioEstado]
        }
        getDuracion(){
            return console.log(this.duracion)
        }
        getNombreClienteDeLlamada(){
            return this.cliente.getNombre()
        }
        nuevoCambioEstado(cambioest){
            this.cambioEstado.push(cambioest)
        
        }
        getEstadoAct(){

           let estAct = this.cambioEstado[(this.cambioEstado.length -1)]
            return estAct.getNombreEstado()
        }

        esDePeriodo(inicioPer,finPer){
           
            /*hay que validar que la fechaHoraIncio del primer cambio de estado
              esté entre las fechas InicioPer y FinPer (hay que buscar cual es ese cambio de estado incial)*/ 

            let esPer = false
            let primCamb = this.cambioEstado[0].getFechaHoraInicio()
            if ((primCamb> inicioPer) && (primCamb < finPer))
                esPer = true

            return esPer
        }
}



//para probar el esDePeriodo

/*const estad = new Estado("ramon")
const estados = new Estado("rn")
const esta2 = new Estado("orma")
const cambEst1 = new CambioEstado(12,estad)
const cambEst2 = new CambioEstado(8,estados)
const cambEst3 = new CambioEstado(6, esta2)
const llamada = new Llamada("a", "a", "b","a", "a", "b",cambEst1 )
llamada.nuevoCambioEstado(cambEst2)
llamada.nuevoCambioEstado(cambEst3)


let e = llamada.esDePeriodo(14,16)

console.log(e)*/


export default Llamada