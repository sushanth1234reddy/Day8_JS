let n=324;
let count=0
if(n==0){
    console.log("Length is 0");
    
    
}
else{
while(n>0){
    n=Math.floor(n/10);
    count+=1;

}
console.log("Length is "+count)
}


// let num=36;
// let str=String(num)
// console.log(str.length);