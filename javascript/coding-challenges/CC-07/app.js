


function myDigits(digit,low,high){
    let counter=0;

    

    for(let i=low;i<=high;i++){
       let a=i.toString().split("");
       a.forEach((v)=>{
         v==digit ? counter++ : -1
       })
       
        

    }
    return counter
   

}
console.log(myDigits(5,10,23));

