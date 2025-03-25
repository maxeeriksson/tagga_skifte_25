var password = "blobgruppen25";

/*
Yes ja, you "hittade" de very hemliga lösenord, this är inte
ment to vara jätte safe, but snusk is bakom detta lösen så
plz inte gå in if du vill take saker public

mvh max
*/

function passcheck(){
    if (document.getElementById('pass1').value != password){
        alert('fel lösen, inge snusk för dig. :(');
        return false;
    }

    if (document.getElementById('pass1').value == password){
        alert('snusk till dig! :D om du klickar vidare dvs.');
        return true;
    }
}

