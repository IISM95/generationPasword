
let alphabet = "abcdefghijklmnopqrstuvwxyzkmkjsdfgkjgmlffgvbvl";
const digits = "0123456789";
const symbols = "!#$%&()*+,-./:;<=>?@[]^_{|}~";
easy = alphabet;
medium = alphabet + digits;
hard = alphabet + digits + symbols;
password = "";
arr = [];
let generatePassword = (length, numbers, amount) => {
  do {
    for (i = 0; i < length; i++) {
      randomLetter = numbers[Math.ceil(Math.random() * numbers.length)];
      password += randomLetter;
    }
	 
    arr.push(password);
	 password ="";
  } while (arr.length < amount);
  return arr;
};
console.log(generatePassword(13, hard, 3));

