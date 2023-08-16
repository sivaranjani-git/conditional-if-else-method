//switch conditional statement

 switch(condition/expression/variables){
    case value1:
     //body
     break;
    case value2:
        //code
        break; 
      case value3:
          //code
          break;
          default:
            //default statement
 }

 //program to name the day

 //var day=prompt("enter the day number");

//switch(day){
//  case "2":
//       alert("MONDAY");
//      break;
//    case "3":
//        alert("TUESDAY");
//        break;
//    case "4":
//        alert("WEDNESDAY");
//        break;
//    case "5":
//        alert("THURSDAY");
//        break;
//    case "6":
//        alert("FRIDAY");
//        break;
//    case "7":
//        alert("SATURDAY");
//        break;
//        default:
//            alert("INVALID INPUT");
//}

var game=prompt("enter the name of the game");

switch(game){
    case "chess":
    case "carrom":
    case "dictionary":
        console.log(game+"is an indoor game");
        break;
    case "cricket":
    case "football":
    case "throwball": 
        console.log(game+"is an outdoor game");   
        break;
        default:
            console.log("the game  doesn't exist");
}