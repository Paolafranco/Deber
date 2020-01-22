var bomberos = [];
var motobombas = [];
var disBom = [];
var disMon = [];
var contene1 = document.getElementById("contene1");
var contene2 = document.getElementById("contene2");


document.getElementById("agreBombe")
    .addEventListener("click", function() {
        document.getElementById("contene1").innerHTML = "";
        disBom = [];
        let nom = document.getElementById("nombre").value;
        let fecha = document.getElementById("fecha").value;
        let bomber = new Bombero(nom, fecha);
        bomberos.push(bomber);
        dibBomb();
        marcarVariosBomberos();

        document.getElementById("nombre").value = "";
        document.getElementById("fecha").value = "";


    });
document.getElementById("agreMotobm")
    .addEventListener("click", function() {
        disMon = [];
        document.getElementById("contene2").innerHTML = "";
        let codigo = document.getElementById("codigo").value;
        let motobomb = new Motobomba(codigo);
        motobombas.push(motobomb);
        dibujarMotobomba();
        marcarVariasMotobombas();
        document.getElementById("codigo").value = "";



    });
document.getElementById("asociar")
    .addEventListener("click", function() {


    });

dibBomb = () => {
    for (var i = 0; i < bomberos.length; i++) {
        var celda = document.createElement('div');
        celda.className = 'celdas';
        celda.id = i;
        disBom.push(i);
        celda.appendChild(document.createTextNode(bomberos[i].nombre));

        contene1.appendChild(celda);

    }
}


MotobomDiv= () => {
    for (var i = 0; i < motobombas.length; i++) {
        var celda = document.createElement('div');
        celda.className = 'celdas';
        celda.id = i;
        disMon.push(i);
        celda.appendChild(document.createTextNode("M" + i));
        contene2.appendChild(celda);

    }
}

selccBomb= () => {
    for (let d = 0; d < disBom.length; d++) {
        marcaNumeroB(d);
    }
}

seleccNum1= (d) => {
    let no = document.getElementById(d);
    let f = document.getElementById(d).innerHTML;
    let x1 = 0;
    no.addEventListener("click", function() {
        if (x1 === 0 && f != "0") {
            no.style.backgroundColor = "green";
            x1 = 1;
            console.log(no.innerHTML);
            //console.log(f);
        } else if (f == "0") {} else {
            no.style.backgroundColor = "white";
            x1 = 0;
            //console.log(f);
        }
    });
}

seleccMotobom= () => {
    for (let d = 0; d < disMon.length; d++) {
        seleccNum2(d);
    }
}

seleccNum2 = (d) => {
    let no = document.getElementById(d);
    let f = document.getElementById(d).innerHTML;
    let x1 = 0;
    no.addEventListener("click", function() {
        if (x1 === 0 && f != "0") {
            no.style.backgroundColor = "green";
            x1 = 1;
            console.log(no.innerHTML);
            //console.log(f);
        } else if (f == "0") {} else {
            no.style.backgroundColor = "white";
            x1 = 0;
            //console.log(f);
        }
    });
}