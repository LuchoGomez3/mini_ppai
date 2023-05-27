class Cliente {
    constructor(dni, nombre, nroCelular){
        this.dni = dni;
        this.nombre = nombre;
        this.nroCelular = nroCelular;
    }
    getNombre(){
        return this.nombre;
    }
    setNombre(newNom){
        this.nombre = newNom

    }
    getDni(){
        return this.dni
    }
    setDni(newdni){
        this.dni = newdni

    }
    getNroCelular(){
        return this.nroCelular
    }
    setNroCelular(newNum){
        this.nroCelular = newNum

    }
}

export default Cliente;