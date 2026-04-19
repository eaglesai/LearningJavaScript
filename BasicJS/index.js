import * as objTextFile from './textNumATM.js';
import {logFile} from "./logOutput.js";
async function hello(name) {
        console.log('Hello World  '+name);
}

hello("Babu");
logFile("Execution is in progress")
window.ctrlExecution = objTextFile.ctrlExecution;
window.addText = objTextFile.addText
logFile("Adding Number object ")
window.addNumber = objTextFile.addNumber
window.logFile = logFile;
//objTextFile.handShake();