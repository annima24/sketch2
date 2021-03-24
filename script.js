const container = document.querySelector('#container');
const left = document.querySelector('#left');
const inputField = document.querySelector('#sidesInput');
const submitBtn = document.querySelector('#submitBtn');
const colorBtn = document.querySelector('#colorBtn')


function makeGrid(input) {
    for (let i = 0; i < (input * input); i++)    {
        
        let div = document.createElement('div');
        let color = 'black'
        
        container.style.setProperty('--cols', input);
        div.classList.add(`box`, `box${i}`);
        container.appendChild(div);
        
        colorBtn.addEventListener('click', function()   {
            return color = 'color'
        })
        
        div.addEventListener('mouseenter', function(e)   {
            e.target.classList.add(color);
            if(e.target.classList)  {
                e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1;
            }
        })
    }   return;
}

function reset()    {
    container.innerHTML= '';
    return makeGrid(15);
}

function updateGrid()   {
    container.innerHTML='';
    return makeGrid(inputField.value);
}
makeGrid(15);
resetBtn.addEventListener('click', reset)
submitBtn.addEventListener('click', updateGrid);
