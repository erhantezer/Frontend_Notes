
   
let userEmail = document.getElementById("Email");
let button = document.querySelector("button");
let result = document.querySelector("p");



button.addEventListener("click", ()=>{
    let k = userEmail.value.lastIndexOf(".");
    // console.log(k);
    let lastOfEmail = userEmail.value.substring(k);
    // console.log(lastOfEmail);
    if (lastOfEmail.length == 4 || lastOfEmail.length == 3) {
        result.innerHTML = "valid email";
    } else {
        result.innerHTML = "invalid email";
    }
})