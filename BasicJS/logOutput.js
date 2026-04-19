

 export const logFile = (txt) => {
  
    console.log(`This is from logFile  :  ${txt}`);
    //document.getElementById("log").appendChild(document.createTextNode(` ►   ${txt}   `))
    document.getElementById("log").insertAdjacentHTML("beforeend", `<br> ► ${txt}`);

}
 

