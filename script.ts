function osszesOszto(szam: number): number[] {
    let szamTomb: number[] = [];
    for (let i = 1; i <= szam; i++) {
        if (szam % i == 0) {
            szamTomb.push(i)
        }
    }
    return szamTomb;
}

function parosDarab(szam: number[]): number {
    let parosSzamok: number = 0;
    for (let i = 0; i < szam.length; i++) {
        if (szam[i] % 2 === 0) {
            parosSzamok++;
        }
    } return parosSzamok
}

function fuggvenyhivasPalindrom(fuggveny: () => string): boolean {
    let szoveg = fuggveny();
    let tisztitottSzoveg = szoveg.replace(/ /g, "").toLowerCase();
    let forditottSzoveg = tisztitottSzoveg.split('').reverse().join('');
    if (tisztitottSzoveg === forditottSzoveg) {
        return true;
    } else {
        return false;
    }
}