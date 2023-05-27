import GestorConsultarEncuesta from "./gestorConsultarEncuesta";
//----------------------------------------------------------------------------------------------------------------
// Arreglo para almacenar los datos ingresados
const gestor = new GestorConsultarEncuesta

// Función para agregar los datos al arreglo y generar la tabla
function agregarDatos(event) {
    event.preventDefault(); // Evitar que se envíe el formulario
    console.log("nashe")
    // Obtener los valores del formulario
    
    var fechaDesde = document.getElementById("fechaDesde").value;
    var fechaHasta = document.getElementById("fechaHasta").value;

    const datos = gestor.tomarSeleccionFechas(fechaDesde,fechaHasta)
    
    console.log(fechaDesde)
    console.log(fechaHasta)

    // Crear un objeto con los datos ingresados
    if (fechaDesde < fechaHasta) {
        var nuevoDato = { fechaDesde: fechaDesde, fechaHasta: fechaHasta };
        datos.push(nuevoDato);
    }else
    {
        alert("La fecha desde debe ser mayor a la fecha hasta")
    }
    console.log(datos)
    // Agregar el nuevo objeto al arreglo de datos

    // Generar la tabla de datos
    if (datos.length == 0)
    {
        alert("No existen llamadas en el periodo seleccionado")
    }else generarTabla();
}

// Función para generar la tabla de datos
function generarTabla() {
    var tablaHTML = "<table><thead><tr><th>Nombre</th><th>Edad</th></tr></thead><tbody>";

    // Recorrer el arreglo de datos y generar una fila por cada objeto
    datos.forEach((dato, index) => {
        tablaHTML += "<tr><td>" + "<input type=\"button\" name=\"radBut\" id=\"{index}\" value=\"Mostrar Datos\">" +dato.fechaDesde + "-------" + dato.fechaHasta + "</td></tr>";
    });

    tablaHTML += "</tbody></table>";

    // Mostrar la tabla en el elemento con el id "tablaDatos"
    document.getElementById("tablaLlamadas").innerHTML = tablaHTML;
}

// Agregar un evento de submit al formulario para llamar a la función agregarDatos
document.getElementById("myForm").addEventListener("submit", agregarDatos);