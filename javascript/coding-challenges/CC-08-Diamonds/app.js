const buton = document.getElementById("btn");
const nn = document.getElementById("input");

const star = document.getElementById("star");

buton.addEventListener("click", function(){
  console.log(nn.value);
  diamond(nn.value)
});
  console.log(star);

console.log(star);

function diamond() {
  
  let n = nn.value;

  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = n; j > i; j--) {
      string += " ";
    }
    for (let k = 0; k < i * 2 - 1; k++) {
      if (k === 0 || k === 2 * i - 2) {
        string += "*";
      } else {
        string += " ";
      }
    }
    string += "\n";
  }
  for (let i = 1; i <= n - 1; i++) {
    for (let j = 0; j < i; j++) {
      string += " ";
    }
    for (let k = (n - i) * 2 - 1; k >= 1; k--) {
      if (k === 1 || k === (n - i) * 2 - 1) {
        string += "*";
      } else {
        string += " ";
      }
    }
    string += "\n";
  }
  star.innerHTML = string;
}