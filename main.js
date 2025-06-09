let btn= document.querySelector('button');

btn.addEventListener("click", function(){
    console.log("generate random color");
    let h2=document.querySelector("h2");
    let randomColor=getRandomColor();

    h2.innerText= randomColor;

    let div= document.querySelector("div");
    div.style.backgroundColor= randomColor;
    console.log("color has been updated")

})
function getRandomColor(){
    let red= Math.floor(Math.random() * 255);
    let green=Math.floor(Math.random() *255);
    let blue= Math.floor(Math.random() *255);

    let color= `rgb(${red} ,${green}, ${blue})`
    return color;
}