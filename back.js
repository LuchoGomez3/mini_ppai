var datos = [
    { id: 1, nombre: "Juan", edad: 25 },
    { id: 2, nombre: "María", edad: 30 },
    { id: 3, nombre: "Carlos", edad: 35 }
];
// Obtén una referencia al elemento <div> donde deseas mostrar la tabla
var divTabla = document.getElementById("tabla");

// Crea la estructura HTML de la tabla
var tablaHTML = "<table><thead><tr><th>ID</th><th>Nombre</th><th>Edad</th></tr></thead><tbody>";

// Recorre el arreglo de datos y crea una fila por cada objeto
datos.forEach(function (dato) {
    tablaHTML += "<tr><td>" + dato.id + "</td><td>" + dato.nombre + "</td><td>" + dato.edad + "</td></tr>";
});

// Cierra la estructura HTML de la tabla
tablaHTML += "</tbody></table>";

// Asigna la tabla generada al contenido del elemento <div>
divTabla.innerHTML = tablaHTML;