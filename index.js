const myObj = require("./information.js");

let cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello I'm ${myObj.myName} from ${myObj.myCampus}!`,
})); 

