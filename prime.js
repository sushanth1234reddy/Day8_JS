// for(let a=1;a<=100;a++){
//     for(let j=1;j<=100;j++)
    
//     if(a%1==0 && a%j==0){
//         console.log(a+" is prime")
//     }
// }
let num=10;
let flor=Math.floor(num/2);
if(num>1){
    for(let i=2;i<=num;i++){
        if(num%i==0){
            console.log(num+" not a prime number")
        }
    else{
            console.log(num+" is a prime")
        }
    }
}
else{
    console.log("not a prime");
}


