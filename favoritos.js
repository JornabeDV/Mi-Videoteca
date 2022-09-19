
let agregarFavorito = document.getElementById("capturar")
agregarFavorito.addEventListener("click", capturar);

function capturar(){
    //console.log("Capturada"); 
    function Pelicula(id,nombre){
        this.id=id;
        this.nombre=nombre;
    }
    let idCapturar = document.getElementById("id").value;
    console.log(idCapturar);
    let nombreCapturar = document.getElementById("nombre").value;
    console.log(nombreCapturar);

    nuevaPelicula = new Pelicula(idCapturar, nombreCapturar);
    console.log(nuevaPelicula);
    agregar ();
}
let baseDatos = [];
function agregar () {
    baseDatos.push(nuevaPelicula);
    console.log(baseDatos);
    document.getElementById("tabla").innerHTML += "<tbody><td>"+nuevaPelicula.id+"</td><td>"+nuevaPelicula.nombre+"</td></tbody>";
};
