// funksiya yazin  istifadeciden soz ve herf alsin. 
// hemin sozun icerisinde o herf tekrarlanirsa true eks halda false qaytarsin 
// string methodlarindan istifade edin meselen indexOf, lastIndexOf

let word = prompt("Bir soz daxil edin:");
let letter = prompt("Herf daxil edin:");
let firstIndex = word.indexOf(letter);
let lastIndex = word.lastIndexOf(letter);
if (firstIndex !== lastIndex) {
    console.log(true);
}
else {
    console.log(false);
}
