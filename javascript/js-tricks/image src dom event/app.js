

const kontrol=document.querySelector(".kontrol");
const resim=document.getElementById("resim");
const inputValue=document.querySelector("input")
const loser=document.getElementById("loser");



kontrol.addEventListener("click",()=>{

    if(Number(inputValue.value)===2){

    resim.src="https://w7.pngwing.com/pngs/405/976/png-transparent-comic-characters-hello-man-smile-thumbnail.png";

    loser.play();



    }

   

})




