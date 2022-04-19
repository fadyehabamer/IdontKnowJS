//  setTimeout ,  ClearTimeout , setInterval , clearInterval

function logMessage (msg){
    console.log("Message is",msg);
}

//  settimeout only runs once
let oneTime = setTimeout(logMessage, 1000 , 'Hello World');
clearTimeout(oneTime);

// setInterval runs every given time
let everyTime = setInterval(logMessage, 1000 , 'Hello World');
clearInterval(everyTime);
