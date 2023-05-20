function procesarRespuestas(){
    let total = 4;
    let puntos = 0;

    let myForm = document.forms["formulario"];
    let respuestasCorrectas = ["c", "b", "c","a"];

    for (let i = 1; i <= total; i++){
        if (myForm["R" + i].value == null ||
            myForm["R" + i].value == ''){
            alert('responder todas las preguntas');
            return false;

        } else {
            if (myForm["R" + i].value === respuestasCorrectas[i- 1])
                puntos++;
        }
    }
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = 'Obtuviste '+ puntos +  'puntos de ' + total + 'posibles';
    return false;
    
} 
