function osszesOszto(szam) {
    var szamtomb = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i == 0) {
            szamtomb.push(i);
            console.log(i);
        }
    }
    return szamtomb;
}
function parosDarab(szam) {
    var parosszamok = 0;
    for (var i = 0; i < szam.length; i++) {
        if (szam[i] % 2 === 0) {
            parosszamok++;
        }
    }
    return parosszamok;
}
function fuggvenyhivasPalindrom(fuggveny) {
    var szoveg = fuggveny();
    var tisztitottSzoveg = szoveg.replace(/ /g, "").toLowerCase();
    var forditottSzoveg = tisztitottSzoveg.split('').reverse().join('');
    if (tisztitottSzoveg === forditottSzoveg) {
        console.log("A szöveg palindróm");
        return true;
    }
    else {
        console.log("A szöveg nem palindróm");
        return false;
    }
}
