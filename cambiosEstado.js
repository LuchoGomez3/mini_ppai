
class CambioEstado {
    constructor(fechaHoraInicio, estado){
        this.fechaHoraInicio = fechaHoraInicio;
        this.estado = estado;
    }
    getEstado(){
        return this.estado
    }
    getFechaHoraInicio(){

        return this.fechaHoraInicio
    
    }
    setFechaHoraInicio(fecha){

        this.fechaHoraInicio = fecha
    }
    getNombreEstado(){
       return this.estado.getNombre()

    }
    setEstado(objet){
        this.estado = objet

    }


  }
  

export default CambioEstado;