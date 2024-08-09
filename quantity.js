let units=200;
if(units>=1 && units<=5){
    console.log("No Discount");
}
else if(units>=6 && units<=10){
    console.log("5% Discount");
}
else if(units>=11 && units<=20){
    console.log("10% Discount");
}
else{
    console.log("15% Discount")
}