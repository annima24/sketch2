const container = document.querySelector('#container');
const left = document.querySelector('#left');
const inputField = document.querySelector('#sidesInput');
const submitBtn = document.querySelector('#submitBtn');
const colorBtn = document.querySelector('#colorBtn')
const boxes = document.querySelectorAll('.box');
let color = 'black'


function makeGrid(input) {
    for (let i = 0; i < (input * input); i++)    {        
        let div;
        div = document.createElement('div');        
        container.style.setProperty('--cols', input);
        div.classList.add(`box`, `box${i}`);
        container.appendChild(div);  
        listen();      
    }   
}

function reset()    {
    container.innerHTML= '';
    color = 'black';
    inputField.value = ''
    return makeGrid(15);
}

function updateGrid()   {
    if (inputField.value > 35)  {
        reset();
        alert('Number of sides is too high, please select a number below 36, thank you.')
    } else  container.innerHTML='';
            color = 'black';
        return makeGrid(inputField.value), inputField.value = '';
}

function changeColor()  {
    return color = 'color';
}

function draw(e) {
    e.target.classList.add(color);
}

function listen()   {
    document.querySelectorAll('.box').forEach(box => {
        box.addEventListener('mouseenter', draw);
      })
}
makeGrid(15);

resetBtn.addEventListener('click', reset)
submitBtn.addEventListener('click', updateGrid);
colorBtn.addEventListener('click', changeColor);


