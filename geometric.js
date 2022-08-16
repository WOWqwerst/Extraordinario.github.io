//area y perimetro del cuadrado
const valueResult = document.getElementById('result');
const perimSquare = (side) => side * 4;
const areaSquare = (side) => side * side;

function calculatePerimSquare(){
    let inputside = document.getElementById('inputSide');
    let value = Number(inputside.value);

    const result = `El perimetro de cuadrado es: ${perimSquare(value)} cm`;
    valueResult.innerText = result;
}

function calculateAreaSquare(){
    let inputside = document.getElementById('inputSide');
    let value = Number(inputside.value);

    const result = `El perimetro de cuadrado es: ${areaSquare(value)} cm2`;
    valueResult.innerText = result;
}

//area y perimetro del triangulo
//const perimTriangle = (side) => side + side + side;

function calculatePerimTriangle(){
    let inputleft = document.getElementById('inputLeft');
    let valueone = Number(inputleft.value);

    let inputright = document.getElementById('inputRight');
    let valuetwo = Number(inputright.value);

    let inputbottom = document.getElementById('inputBottom');
    let valuethree = Number(inputbottom.value);
//Se agrega suma de distinta manera
    let total = valueone + valuetwo + valuethree;

    const result = `El perimetro del triangulo es: ${total} cm`;
    valueResult.innerText = result;
}

function calculateAreaTriangle(){
    let inputbase = document.getElementById('inputbase');
    let valueone = Number(inputbase.value);

    let inputheight = document.getElementById('inputheight');
    let valuetwo = Number(inputheight.value);

    let total = valueone * valuetwo /2;

    const result = `El area del triangulo es: ${total} cm2`;
    valueResult.innerText = result;
}

//Diametro, perimetro y area de un criculo
const diameterCircle = (radio) => radio * 2;
const perimeterCircle = (radio) => (2 * 3.14) * radio;
const areaCircle = (radio) => radio ** 2 * 3.14;

function calculateDiameterCircle(){
    let inputradio = document.getElementById('inputradio');
    let value = Number(inputradio.value);

    const result = `El Diametro del circulo es: ${diameterCircle(value)} cm`;
    valueResult.innerText = result;
}

function calculatePerimeterCircle(){
    let inputradio = document.getElementById('inputradio');
    let value = Number(inputradio.value);

    const result = `El perimetro del circulo es: ${perimeterCircle(value)} cm`;
    valueResult.innerText = result;
}

function calculateAreaCircle(){
    let inputradio = document.getElementById('inputradio');
    let value = Number(inputradio.value);

    const result = `El perimetro de cuadrado es: ${areaCircle(value)} cm`;
    valueResult.innerText = result;
}