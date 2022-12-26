let quadro = document.querySelector('.quadro');
let btn = document.querySelector('.reset');
let tam = 16 * 16
let calc = 500/10
calc = calc.toFixed(0);
for(let i =0; i < tam; i++){
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.addEventListener('mouseover',() =>{
        pixel.style.backgroundColor = "blue";
    })
    quadro.appendChild(pixel);
    pixel.style.width = calc+"px";
    pixel.style.height = calc+"px"
    pixel.style.border = "solid 1px black";
}
btn.addEventListener('click', ()=>{
    let pixel = document.querySelectorAll('.pixel');
    for(let b = 0; b< pixel.length; b++)
    pixel[b].style.backgroundColor = "bisque" 
})