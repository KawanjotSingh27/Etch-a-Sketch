const container=document.querySelector(".container");
const number_button=document.querySelector("#number_button");
const normal_button=document.querySelector("#normal_button");
const rgb_button=document.querySelector("#rgb_button");
const dark_button=document.querySelector("#dark_button");

let number_of_div=16;
const container_size=500;

number_button.addEventListener("click",()=>{
    let temp=Number(prompt("What should be the number of rows/columns?"));
    if(temp<=100){
        number_of_div=temp;
        blocks_list=document.querySelectorAll(".blocks");
        blocks_list.forEach(e=>e.remove());

        for(let i=0;i<number_of_div**2;i++){
            let block=document.createElement("div");
            block.classList.add("blocks");
            container.appendChild(block);
        }
        
        blocks_list=document.querySelectorAll(".blocks");
        blocks_list.forEach(e=>e.style.width=`${container_size/number_of_div}px`);
        blocks_list.forEach(e=>e.style.height=`${container_size/number_of_div}px`);
        
        blocks_list.forEach(e=>e.addEventListener("mouseenter",()=>{
            e.style.backgroundColor="black";
         }))
    }
    else{
        alert("The maximum limit is 100!");
    }
})

for(let i=0;i<number_of_div**2;i++){
    let block=document.createElement("div");
    block.classList.add("blocks");
    container.appendChild(block);
}
let blocks_list=document.querySelectorAll(".blocks");
let blocks=document.querySelector(".blocks");

blocks_list.forEach(e=>e.style.width=`${container_size/number_of_div}px`);
blocks_list.forEach(e=>e.style.height=`${container_size/number_of_div}px`);

window.addEventListener("load",normal);
normal_button.addEventListener("click",normal);
rgb_button.addEventListener("click",rgb);
dark_button.addEventListener("click",dark);

function normal(){
    blocks_list=document.querySelectorAll(".blocks");
    blocks_list.forEach(e=>e.remove());
    
    for(let i=0;i<number_of_div**2;i++){
        let block=document.createElement("div");
        block.classList.add("blocks");
        container.appendChild(block);
    }
    blocks_list=document.querySelectorAll(".blocks");
    blocks_list.forEach(e=>e.style.width=`${container_size/number_of_div}px`);
    blocks_list.forEach(e=>e.style.height=`${container_size/number_of_div}px`);

    blocks_list.forEach(e=>e.addEventListener("mouseenter",()=>{
        e.style.backgroundColor=`black`;
    }
))}

function rgb(){
    blocks_list=document.querySelectorAll(".blocks");
    blocks_list.forEach(e=>e.remove());
    
    for(let i=0;i<number_of_div**2;i++){
        let block=document.createElement("div");
        block.classList.add("blocks");
        container.appendChild(block);
    }
    blocks_list=document.querySelectorAll(".blocks");
    blocks_list.forEach(e=>e.style.width=`${container_size/number_of_div}px`);
    blocks_list.forEach(e=>e.style.height=`${container_size/number_of_div}px`);
    blocks_list.forEach(e=>e.addEventListener("mouseenter",()=>{
        let x=Math.floor(Math.random()*256);
        let y=Math.floor(Math.random()*256);
        let z=Math.floor(Math.random()*256);
        e.style.backgroundColor=`rgb(${x} ${y} ${z})`;
}))}

function dark(){
    blocks_list=document.querySelectorAll(".blocks");
    blocks_list.forEach(e=>e.remove());
    
    for(let i=0;i<number_of_div**2;i++){
        let block=document.createElement("div");
        block.classList.add("blocks");
        container.appendChild(block);
    }
    blocks_list=document.querySelectorAll(".blocks");
    blocks_list.forEach(e=>e.style.width=`${container_size/number_of_div}px`);
    blocks_list.forEach(e=>e.style.height=`${container_size/number_of_div}px`);
    blocks_list.forEach(e=>e.addEventListener("mouseenter",()=>{
        let x;
        if(!e.style.backgroundColor){
            e.style.backgroundColor="hsl(0 0% 100%)"
        }
        else if(rgbToHsl(e.style.backgroundColor).substring(11,14)==100){
            x=90;
            e.style.backgroundColor=`hsl(0, 0%, ${x}%)`;
        }
        else{
            x=rgbToHsl(e.style.backgroundColor).substring(11,13)-10;
            e.style.backgroundColor=`hsl(0, 0%, ${x}%)`;
        }
    }))
}

function rgbToHsl(rgb) {
    // Extracting RGB values
    const regex = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
    const match = rgb.match(regex);
    const r = parseInt(match[1]);
    const g = parseInt(match[2]);
    const b = parseInt(match[3]);

    // Normalizing RGB values
    const normalizedR = r / 255;
    const normalizedG = g / 255;
    const normalizedB = b / 255;

    // Finding the maximum and minimum values
    const max = Math.max(normalizedR, normalizedG, normalizedB);
    const min = Math.min(normalizedR, normalizedG, normalizedB);

    // Calculating lightness
    const lightness = (max + min) / 2;

    // Calculating saturation
    let saturation = 0;
    if (max !== min) {
        saturation = lightness > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
    }

    // Calculating hue
    let hue = 0;
    if (max !== min) {
        if (max === normalizedR) {
            hue = (normalizedG - normalizedB) / (max - min);
        } else if (max === normalizedG) {
            hue = 2 + (normalizedB - normalizedR) / (max - min);
        } else {
            hue = 4 + (normalizedR - normalizedG) / (max - min);
        }
    }
    hue *= 60;
    if (hue < 0) {
        hue += 360;
    }

    // Formatting and returning HSL string
    return `hsl(${Math.round(hue)}, ${Math.round(saturation * 100)}%, ${Math.round(lightness * 100)}%)`;
}