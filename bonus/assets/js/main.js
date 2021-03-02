var mail= prompt("Inserisci la tua email:");
var mailToCheck = document.getElementById("emailCheck").innerHTML = mail;
var loader= document.getElementById("loader");
var check= document.getElementById("check");
var cross= document.getElementById("cross");

var mailDb =["prova@.mail","prova@1.mail","prova@2.mail","prova@3.mail"];

var statusChecker = false;

for (var i = 0; i < mailDb.length; i++) {
    if (mail==mailDb[i]) {
        statusChecker=true;
        
    }
}

if(statusChecker){
    console.log("Accesso Riuscito");
    setTimeout(function(){
        loader.remove();
        check.style.opacity=1;
      }, 2000);
      

    
}else{
    console.log("la mail non è presente nel database");
    setTimeout(function(){
        loader.remove();
        cross.style.opacity=1;
      }, 2000);
}