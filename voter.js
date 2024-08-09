
let age=-90;
switch(true){
    case (age>=18):
        console.log("Eligible for voting");
        break;
    case (age<18 && age>=0):
        console.log("Not eligible for voting");  
        break;
    default:
        console.log("Enter valid age");  
}