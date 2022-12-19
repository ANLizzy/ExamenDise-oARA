        /* Alicia Ruiznavarro Ambrona */
var tabla = document.querySelector("#contenedor")
var modal = document.querySelector("#contenedor2");
var agregar = document.querySelector("#modalbtn");
var volver = document.querySelector("#volver");

agregar.onclick = function() {
    tabla.style.display = "none";
    modal.style.display = "block";
}

volver.onclick = function() {
    modal.style.display = "none";
    tabla.style.display = "block";
}