var mail= prompt("Inserisci la tua email:");

var mailDb =["prova@.mail","prova@1.mail","prova@2.mail","prova@3.mail"];

var statusChecker = false;

for (var i = 0; i < mailDb.length; i++) {
    if (mail==mailDb[i]) {
        statusChecker=true;
        
    }
}

if(statusChecker){
    console.log("Accesso Riuscito");
}else{
    console.log("la mail non è presente nel database");
}