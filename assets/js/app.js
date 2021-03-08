/*$(document).ready(function(){
    test();
});

function test() {
    console.log("Hola")
}*/

$("#verde").click(function(){
    $("#color").removeClass().addClass("bg-success");
    $("#texto").text("Verde");
    console.log("Verde");
});

$("#amarillo").click(function(){
    $("#color").removeClass().addClass("bg-warning");
    $("#texto").text("Amarillo");
    console.log("Amarillo");
});

$("#rojo").click(function(){
    $("#color").removeClass().addClass("bg-danger");
    $("#texto").text("Rojo");
    console.log("Rojo");
});

$("#imagen").click(function(){
    $("#color").removeClass().addClass("bgIMG");
    $("#texto").text("Imagen");
    console.log("Imagen");
});