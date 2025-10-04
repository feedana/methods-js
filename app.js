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
// let parts = fullName.trim().split(/\s+/);
// if (parts.length >= 2) {
// 	let ad = parts[0];
// 	let soyad = parts.slice(1).join(" ");
// 	console.log(`${soyad} ${ad}`);
// } else {
// 	console.log("Zəhmət olmasa 'AD SOYAD' formatında daxil edin.");
// }




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
// Remove all exclamation
// Funksiya yazın.Arqument olaraq string alsın,
// sözün içərisindəki bütün nida işarələrini silsin və 
// sözün sonuna bir ədəd nida işarəsi əlavə etsin.
// məsələn:
// He!llo! !!FE-25 // netice olmalıdır Hello FE-25!

// let text = prompt("Bir söz daxil edin:");
// function removeAllExclamation(str) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== "!") {
//             result += str[i];
//         }
//     }
//     return result + "!";
// }
// console.log(removeAllExclamation(text));



// ----------------Task7----------------------
// Funksiya yazın,qəbul etdiyi parametrin baş hərfini böyütsün və ekarana  bas herfi boyuk yazdırsın
// istifadeci parametri daxil etsin

// let text = prompt("Bir söz daxil edin:");
// function capitalizeFirstLetter(str) {
//     if (str.length === 0) return str;
// return str.charAt(0).toUpperCase() ;
// }

// console.log(capitalizeFirstLetter(text));




// ----------------Task8----------------------
// Funksiya yazın,qəbul etdiyi parametrin bütün hərflərini böyütsün və ekarana yazdırsın
// istifadeci parametri daxil etsin

// let text = prompt("Bir söz daxil edin:");
// function capitalizeAllLetters(str) {
//     return str.toUpperCase();
// }
// console.log(capitalizeAllLetters(text));




// ----------------Task9----------------------
// Funksiya yazın,qəbul etdiyi parametrin bütün hərflərini kiçiltsin və ekarana yazdırsın
// istifadeci parametri daxil etsin

// let text = prompt("Bir söz daxil edin:");
// function lowercaseAllLetters(str) {
//     return str.toLowerCase();
// }
// console.log(lowercaseAllLetters(text));




// ----------------Task10----------------------

// Funksiya yaradin, ilk characterimizi deyisek: ilkHerfiDeyis(soz, ilkHerf)
// ilkHerfiDeyis('Qara', "Y") // Yara
// let text = prompt("Bir söz daxil edin:");
// let newFirstLetter = prompt("Yeni ilk hərfi daxil edin:");
// function replaceFirstLetter(str, newLetter) {
//     if (str.length === 0) return str;
//     return str.replace(str.charAt(0), newLetter);
// }
// console.log(replaceFirstLetter(text, newFirstLetter));




// ----------------Task11----------------------
// funksiya yazın ad və soyad alsın və aşağıdakı kimi nəticə versin
// nameFormat(str) —> Ramin Mammadzada-=> M. Ramin
// function nameFormat(str) {
//     let parts = str.split(" ");
//     if (parts.length < 2) return str;
//     return parts[1] + ". " + parts[0];
// }

// let fullName = prompt("Ad və soyadınızı daxil edin:");
// console.log(nameFormat(fullName));





// ---------------------Task 12---------------
// verify gmail address. 
// (gmail addressleri sonu @gmail.com ile bitmelidir, abcdf@gmail.com meselen) //true

// function isGmailAddress(email) {
//     return email.endsWith("@gmail.com");
// }

// let email = prompt("Gmail adresinizi daxil edin:");
// console.log(isGmailAddress(email));





// ------------------Task13---------------
// Funksiya yazın,aldığı paramterdə bütün hərflər böyükdürsə true deyilsə false qaytarsın
// function isAllUpperCase(str) {
//     if (str === str.toUpperCase()) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let text = prompt("Bir söz daxil edin:");
// console.log(isAllUpperCase(text));




















