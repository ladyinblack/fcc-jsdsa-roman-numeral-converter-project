// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Roman Numeral Converter</h1>`;

/** TODO:
 * Convert the given number into a roman numeral.
 * M --> 1000
 * CM --> 900
 * D --> 500
 * CD --> 400
 * C --> 100
 * XC --> 90
 * L --> 50
 * XL --> 40
 * X --> 10
 * V --> 5
 * IV --> 4
 * I --> 1
 * All roman numerals answers should be provided in upper-case.
 */

function convertToRoman(num) {
  let romStr = '';
  let rem = 0;
  if (num >= 1000 && num / 1000 >= 1) {
    for (let i = 0; i < Math.floor(num / 1000); i++) {
      romStr = romStr + 'M';
    }
    rem = num % 1000;
  }
  if (rem / 900 >= 1) {
    romStr += 'CM';
    rem = rem % 900;
  } else if (num >= 900 && num < 1000 && num / 900 >= 1) {
    romStr += 'CM';
    rem = num % 900;
  }
  if (rem / 500 >= 1) {
    romStr += 'D';
    rem = rem % 500;
  } else if (num >= 500 && num < 900 && num / 500 >= 1) {
    romStr += 'D';
    rem = num % 500;
  }
  if (rem / 400 >= 1) {
    romStr += 'CD';
    rem = rem % 400;
  } else if (num >= 400 && num < 500 && num / 400 >= 1) {
    romStr += 'CD';
    rem = num % 400;
  }
  if (rem / 100 >= 1) {
    for (let i = 0; i < Math.floor(rem / 100); i++) {
      romStr += 'C';
    }
    rem = rem % 100;
  } else if (num >= 100 && num < 400 && num / 100 >= 1) {
    for (let i = 0; i < Math.floor(num / 100); i++) {
      romStr += 'C';
    }
    rem = num % 100;
  }
  if (rem / 90 >= 1) {
    romStr += 'XC';
    rem = rem % 90;
  } else if (num >= 90 && num < 100 && num / 90 >= 1) {
    romStr += 'XC';
    rem = num % 90;
  }
  if (rem / 50 >= 1) {
    romStr += 'L';
    rem = rem % 50;
  } else if (num >= 50 && num < 90 && num / 50 >= 1) {
    romStr += 'L';
    rem = num % 50;
  }
  if (rem / 40 >= 1) {
    romStr += 'XL';
    rem = rem % 40;
  } else if (num >= 40 && num < 50 && num / 40 >= 1) {
    romStr += 'XL';
    rem = num % 40;
  }
  if (rem / 10 >= 1) {
    for (let i = 0; i < Math.floor(rem / 10); i++) {
      romStr += 'X';
    }
    rem = rem % 10;
  } else if (num >= 10 && num < 40 && num / 10 >= 1) {
    for (let i = 0; i < Math.floor(num / 10); i++) {
      romStr += 'X';
    }
    rem = num % 10;
  }
  if (rem / 9 >= 1) {
    romStr += 'IX';
    rem = rem % 9;
  } else if (num >= 9 && num < 10 && num / 9 >= 1) {
    romStr += 'IX';
    rem = num % 9;
  }
  if (rem / 5 >= 1) {
    romStr += 'V';
    rem = rem % 5;
  } else if (num >= 5 && num < 9 && num / 5 >= 1) {
    romStr += 'V';
    rem = num % 5;
  }
  if (rem / 4 >= 1) {
    romStr += 'IV';
    rem = rem % 4;
  } else if (num >= 4 && num < 5 && num / 4 >= 1) {
    romStr += 'IV';
    rem = num % 4;
  }
  if (rem >= 1 && rem < 4) {
    for (let i = 0; i < Math.floor(rem); i++) {
      romStr += 'I';
    }
  } else if (num >= 1 && num < 4) {
    for (let i = 0; i < Math.floor(num); i++) {
      romStr += 'I';
    }
  }
  console.log(rem);
  return romStr;
}

console.log('2 =>', convertToRoman(2));
console.log('3 =>', convertToRoman(3));
console.log('4 =>', convertToRoman(4));
console.log('5 =>', convertToRoman(5));
console.log('9 =>', convertToRoman(9));
console.log('12 =>', convertToRoman(12));
console.log('16 =>', convertToRoman(16));
console.log('29 =>', convertToRoman(29));
console.log('44 =>', convertToRoman(44));
console.log('45 =>', convertToRoman(45));
console.log('68 =>', convertToRoman(68));
console.log('83 =>', convertToRoman(83));
console.log('97 =>', convertToRoman(97));
console.log('99 =>', convertToRoman(99));
console.log('400 =>', convertToRoman(400));
console.log('500 =>', convertToRoman(500));
console.log('501 =>', convertToRoman(501));
console.log('649 =>', convertToRoman(649));
console.log('798 =>', convertToRoman(798));
console.log('891 =>', convertToRoman(891));
console.log('1000 =>', convertToRoman(1000));
console.log('1004 =>', convertToRoman(1004));
console.log('1006 =>', convertToRoman(1006));
console.log('1023 =>', convertToRoman(1023));
console.log('2014 =>', convertToRoman(2014));
console.log('2022 =>', convertToRoman(2022));
console.log('3999 =>', convertToRoman(3999));
