
//TODO :"SHORT LİNK "
// ! https://www.youtube.com/watch?v=b7vfp5G4brE => uzun-link
// ! https://youtu.be/b7vfp5G4brE => kısa-link


//* SOLUTİON-1
let x = "https://www.youtube.com/watch?v=b7vfp5G4brE";
let y = x.split("");
y.splice(x.indexOf("w"),x.indexOf("=")-6,"youtu.be/");
console.log(y.join(""));

//* SOLUTİON-2


let longlink="https://www.youtube.com/watch?v=b7vfp5G4brE";

shortlink=longlink.slice(0,longlink.indexOf("w"))+"youtu.be/"+longlink.slice(longlink.lastIndexOf("=")+1)

console.log(shortlink)

