// funksiya yazin  istifadeciden soz ve herf alsin. 
// hemin sozun icerisinde o herf tekrarlanirsa true eks halda false qaytarsin 
// string methodlarindan istifade edin meselen indexOf, lastIndexOf

// let word = prompt("Bir soz daxil edin:");
// let letter = prompt("Herf daxil edin:");
// let firstIndex = word.indexOf(letter);
// let lastIndex = word.lastIndexOf(letter);
// if (firstIndex !== lastIndex) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }


// Task 2
// istifadeciden bir nece soz daxil etmesini isteyin
//  ve hemin metni ascii table codlarina cevirib console-a yazdirin. 
// reqemlerin arasinda tire olsun 
// string methodlarindan istifade edin meselen charCodeAt

let text = prompt("Bir nece soz daxil edin:");
let asciiCodes = "";
for (let i = 0; i < text.length; i++) {
    asciiCodes += text.charCodeAt(i);
    if (i < text.length - 1) {
        asciiCodes += "-";
    }
}
console.log(asciiCodes);

