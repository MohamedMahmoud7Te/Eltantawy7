

//function   ==>  block of statment

// function creative (){
//     alert(123);
// }  

// creative();   //>colling function
// creative();
// creative();



// function sumNumber(a,b){
//     return a+b;
// }

// sumNumber(5,8);

var conter = 0;
function add(){
    conter++;
    document.getElementById("demo").innerHTML = conter;
}

function decrement(){
    conter--;
    document.getElementById("demo").innerHTML = conter;

}




//=====================================

//=====================================

// var x =prompt("What is your price")

// if(x<20){
//     alert("The price is cheap");
// }else if(x>20){
//     alert("the price is expensive")
// }else if(x==20){
//     alert('cool')
// }else{
//     alert("Not A Number")
// }

 

function mouse (){
    var abdo = document.getElementById("omar").value;
    var result = document.getElementById("result");
    

    if(isNaN(abdo)){
        result.innerHTML = "Enter Number NOt Text";
        return false
    }else if(abdo<0){
        result.innerHTML = "Enter postive Number";
        return false
    }else if(abdo==0){
        result.innerHTML = "Enter value Reter Than Zero"
        return false
    }else{
        result.innerHTML = abdo *60;
        return false;
    }
}
 

//==============================


//==============================

// var x = prompt("who is the winner of Fifa World Cup 2022")

// switch(x){
//     case"france" :{
//         alert("out Door From final match");
//         break;
//     }
// }
// switch(x){
//     case"Brazil" :{
//         alert("out Door From 8");
//         break;
//     }
// }
// switch(x){
//     case"England" :{
//         alert("out Door From 16");
//         break;
//     }

//     default:{

//         alert("Argntina is the winner of Fifa World cup 2022");
//         break;
//     }
// }