
let son1 = prompt("1-soni kiriting")*1;
let amal = prompt("amalni kiriting +,-,*,/, lardan foydalaning")
let son2 = prompt("2-soni kiriting")*1;


// declaration function calculator

function calculator (a, b , c){
if(b == "+"){
  return a + c
}
else if(b == "-"){
  return a - c
}
else if(b == "*"){
  return a * c
}
else if(b == "/"){
  return a / c
}
else{
  return "Siz xato buyruq yubordingiz! Bunday buyruq topilmadi! 😑"
}
}

calculator(son1 , amal , son2);
document.write(calculator(son1, amal, son2));

// ////////////////////////////////////////////////////////////////

// expression function calculator

// const calc = function(a, b , c){
// if(b == "+"){
//   return a + c
// }
// else if(b == "-"){
//   return a - c
// }
// else if(b == "*"){
//   return a * c
// }
// else if(b == "/"){
//   return a / c
// }
// else{
//   return "Siz xato buyruq yubordingiz! Bunday buyruq topilmadi! 😑"
// }
// }

// calc(son1 , amal , son2);
// document.write(calculator(son1, amal, son2));

// ////////////////////////////////////////////////////////////////

// switch function calculator

// switch(amal){
//   case "+":
//    document.write(son1 + son2);
//    break;
//   case "-":
//    document.write(son1 - son2);
//    break;
//   case "*":
//    document.write(son1 * son2);
//    break
//   case "/":
//    document.write(son1 / son2);
//    break;
//   default:
//    document.write("Siz xato buyruq yubordingiz! Bunday buyruq topilmadi! 😑")
//    break;
// }

// ////////////////////////////////////////////////////////////////