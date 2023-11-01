//arreglo que contiene las respuesta correctas
let correctas=[1,3,2,2,3,1,2,3,1,3];

//arreglo donde se guarda las respuestas del usuario
let opcion_elegida=[];

let cantidad_correctas=0;

//funcion que toma el num de preguntas y el input elegido de esa pregunta
function respuesta(num_pregunta, seleccionada){
    //guardo las respuestas
    opcion_elegida[num_pregunta] = seleccionada.value;


    //el siguiewnte codigo es para pober en color blanco
    //el fondo de los inputs para  cuadno elige la opcion
    //armo el id para selecionar el section correspondiente
    id="p" + num_pregunta;

    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor= "white";
    labels[5].style.backgroundColor= "white";
    labels[7].style.backgroundColor= "white";
    //color correspondiente

    seleccionada.parentNode.style.backgroundColor ="#cec0fc";
}

function corregir(){
    cantidad_correctas = 0;
    for(i=0; i < correctas.length;i++){
        if(correctas[i]==opcion_elegida[i]){
            cantidad_correctas++;
        }
    }
    document.getElementById("resultado").innerHTML = cantidad_correctas;
}