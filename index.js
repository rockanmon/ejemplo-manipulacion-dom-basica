// const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const parrafito = document.getElementsByClassName('.parrafito');
// const pid = document.getElementById('pid');
// const input = document.querySelector('input');


// // console.log({
// //     h1,
// //     p,
// //     parrafito,
// //     pid,
// //     input,
// // });

// // h1.innerHTML = "Te amo Brenda <br> mucho";
// // h1.innerText = "Te amo Brenda <br> mucho";
// // console.log(h1.getAttribute('class'));
// // // h1.setAttribute('class', 'rojo')
// // // console.log(h1.getAttribute('class'));

// // h1.classList.add('rojo')
// // console.log(h1.getAttribute('class'))
// // h1.classList.remove('verde');
// // console.log(h1.getAttribute('class'))


// // input.placeholder = "fsdfsadf";

// // const img = document.createElement('img');
// // img.setAttribute('src','https://www.pexels.com/es-es/foto/moda-mujer-joven-retrato-9571003/')

// // console.log(img);

// // pid.innerHTML = "";

// // pid.appendChild(img);


const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// form.addEventListener('submit', sumarInputValues);

// function sumarInputValues(event) {
//     console.log({event});
//     event.preventDefault();
//     const sumaInputs = parseInt(input1.value) + parseInt(input2.value)
//     pResult.innerText = "Resultado: " + sumaInputs;

// }

btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event) {
    // console.log({event});
    // event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value)
    pResult.innerText = "Resultado: " + sumaInputs;

}

