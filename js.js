function Modulo(){
    nome = document.getElementById("nome").value
    cognome = document.getElementById("cognome").value
    eta = document.getElementById("eta").value
    indirizzo = document.getElementById("indirizzo").value

    let regexNomeCognome = /^[A-Za-z]+$/; // Accetta solo lettere per nome e cognome
    let regexEta = /^[1-9][0-9]*$/; // Accetta solo numeri positivi per l'età
    let regexIndirizzo = /^Via\s[A-Za-z0-9\s,.]+?\s\d+$/i // Via nomeVia numero

    if (!regexNomeCognome.test(nome)) {
        document.getElementById("errore").innerHTML = "Campo nome non valido";
        document.getElementById("nome").focus();
        return false;
    }
    if (!regexNomeCognome.test(cognome)) {
        document.getElementById("errore").innerHTML = "Campo cognome non valido";
        document.getElementById("cognome").focus();
        return false;
    }
    if (!regexEta.test(eta)){
        document.getElementById("errore").innerHTML = "Campo età non valido";
        document.getElementById("eta").focus();
        return false;
    }
    if (!regexIndirizzo.test(indirizzo)) {
        document.getElementById("errore").innerHTML = "Campo indirizzo non valido";
        document.getElementById("indirizzo").focus();
        return false;
    }else{
        document.getElementById("errore").innerHTML = "Tutti i campi sono validi";
    }
}