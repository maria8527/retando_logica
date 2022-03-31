


function num_menor(){
    let Pnumero = document.getElementById("primernum").value;
    let Snumero =document.getElementById("segundonum"). value; 
    // let igual= Object.is (Pnumero, Snumero);
    let men= Math.min(Pnumero, Snumero);
    alert (`el numero menor es ${men}`) 
    // let igual = Pnumero ===Snumero;
    // alert (`los numeros son iguales ${igual}`)
}

function igualdad(){
    let Pnumero = document.getElementById("primernum").value;
    let Snumero =document.getElementById("segundonum"). value; 
    let igual= Object.is (Pnumero, Snumero); 
    alert(`${igual}`); 
     
}

function inter(){
    let Pnumero = document.getElementById("primernum").value;
    let Snumero =document.getElementById("segundonum"). value; 
    [Pnumero,Snumero] = [Snumero, Pnumero]
   alert(`el intercambio de valores es: primer numero ${Pnumero} y segundo numero ${Snumero}`)
   
}

function sumar(){
    let Pnumero = document.getElementById("primernum").value;
    let Snumero =document.getElementById("segundonum"). value;
    let auxiliar; 
    while (Snumero != 0){
        auxiliar= Pnumero & Snumero; 
        Pnumero = Pnumero ^ Snumero;
        Snumero = auxiliar << 1; 
    }

    alert(`la suma es ${Pnumero}`)
}