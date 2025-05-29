function rolldice(){

const numdice = document.getElementById("numdice");
const result = document.getElementById("result");
const images = document.getElementById("images");
const temp = Number(numdice.value)
const values = [];
const Images = [];
    // result.textContent = temp
    for(let i=1;i<=temp;i++){
        const  rand = Math.floor(Math.random()*6) + 1;
        values.push(rand);
        Images.push(`<img src="${rand}.png"width="150" ></img>`)
    }
    result.textContent = `Dice : ${values.join(",")}`
    images.innerHTML = Images.join("")
}
