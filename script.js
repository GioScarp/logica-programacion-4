const fibonacci = [0 , 1];

document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("numero");
    const boton = document.getElementById("fibonacci");
    const resultado = document.getElementById("resultado");

    boton.addEventListener("click", function () {
        const valorIngresado = parseInt(input.value);

        if(!isNaN(valorIngresado)){
            limpiarLista();
            for(let i = 2; i < valorIngresado; i++ ){
                fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
                const dato = document.createElement("li");
                dato.textContent = fibonacci[i];
                resultado.appendChild(dato);
            }
            
        }else{
            alert("Ingrese un dato valido");
        }
    });

    function limpiarLista(){
        while(resultado.firstChild){
            resultado.removeChild(resultado.firstChild)
        }
        const zero = document.createElement("li");
        zero.textContent = fibonacci[0];
        resultado.appendChild(zero);
        const one = document.createElement("li");
        one.textContent = fibonacci[1];
        resultado.appendChild(one);
    }

});
