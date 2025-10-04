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


// Task 02
// istifadeciden bir nece soz daxil etmesini isteyin
//  ve hemin metni ascii table codlarina cevirib console-a yazdirin. 
// reqemlerin arasinda tire olsun 
// string methodlarindan istifade edin meselen charCodeAt

// let text = prompt("Bir nece soz daxil edin:");
// let asciiCodes = "";
// for (let i = 0; i < text.length; i++) {
//     asciiCodes += text.charCodeAt(i);
//     if (i < text.length - 1) {
//         asciiCodes += "-";
//     }
// }
// console.log(asciiCodes);




// ----------------Task1----------------------
// İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin. 
// Bu rəqəmi üçrəqəmli olana qədər, 7 artırın. 
// Son dəyəri konsola çıxarın.
// let number = parseInt(prompt("İkirəqəmli ədəd daxil edin:"));
// while (number < 100) {
//     number += 7;
// }
// console.log("Nəticə: " + number);



// ----------------Task2----------------------
// Konsola N dəfə «I know how to use cycles» mesajı çıxaran proqram yazın. 
// Proqram N ədədini istifadəçidən soruşur.
// let N = parseInt(prompt("N ədədini daxil edin:"));
// for (let i = 0; i < N; i++) {
//     console.log("I know how to use cycles");
// }



// ----------------Task3----------------------
// İstifadəçidən tam adı «AD SOYAD» formatında daxil etməyi xahiş edin. 
// Tam adını konsola fərqli qaydada yəni «SOYAD AD» formatında çıxarın,

// let fullName = prompt("Tam adınızı 'AD SOYAD' formatında daxil edin:");
// let nameParts = 


// ???????????????????????????????????














// ----------------Task4----------------------
// Telefon nömrəsini parametr kimi qəbul edən ısvalidnumber() funksiyasını yazın. 
// Telefon nömrəsi 11 rəqəmdən ibarət olduqda və +7 ilə başladıqda, funksiya true qaytarır.
// Əks halda, funksiya false qaytarır.

// let phoneNumber = prompt("Telefon nömrənizi daxil edin:");
// function isValidNumber(number) {
// if (number.length === 11 && number.startsWith("+7")) {
//     return true;
// } else {
//     return false;
// }
// }
// console.log(isValidNumber(phoneNumber.toString()));



// ----------------Task5----------------------
// Funksiya yazın.Arqument olaraq aldığı sözün içərisində rəqəmləri seçsin və geri qaytarsın.
// Məsələn: "hell5o wor6ld" -> 56
// getNumberFromString(number)

// let text = prompt("Bir söz daxil edin:");
// function getNumberFromString(str) {
//     let numbers = "";
//     for (let i = 0; i < str.length; i++) {
//         if (!isNaN(str[i]) && str[i] !== ' ') {
//             numbers += str[i];
//         }
//     }
//     return numbers;
// }
// console.log(getNumberFromString(text));




// ----------------Task6----------------------






