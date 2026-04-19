import {classTest} from "./classTest.js";
import {logFile} from "./logOutput.js";

export function handShake(){

 alert("this is from handShake function");
}
let flag = true;
export function addNumber() {
    let text1 = "Welcome ";
    let text2 = "Thank You ";
    text1 = "Changed From Welcome  "
    document.getElementById("output").textContent= text1 + " to JS " + "\n" + text2;
}
export function addText() {
    let text1 = "This is Day2 ";
    let text2 = "  THANK YOU ";
    document.getElementById("output").textContent= text1 + document.getElementById("input1").value + " to JS " + "\n" + text2;
}

export function ctrlExecution(){
    console.log("Before creating the object for the class");
    logFile("\n Before creating the object for the class \n ");
    try {
            let objClass =  new classTest();
            objClass.addPage();
            operationAdd2Array();
            if (isNaN(Number(document.getElementById("input1").value)) )
                addText();
            else
                addNumber();

            operation2Object();
        } catch (error) {
            console.log(`this is an ERROR  :  ${error}`);
    }
}

//export const flgText () => 

let obj = new classTest();
export function operationAdd2Array(){

    console.log(`Display Array Element  ${obj.opArray[0]}`);
    obj.opArray.push("MyAccount");
    let myLen = obj.opArray.length;
    console.log(`Display Array's Last Element  ${obj.opArray[myLen-1]}`);
   
}

export function operation2Object(){
    console.log(`Display from List object  ${obj.objPin.Vishal}`);
    obj.objPin.arjun = 9990;
    console.log(`Display from List object  ${obj.objPin.arjun}`);
}

