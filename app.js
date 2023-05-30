s = 'DCCCXCII';

function romanToInt(roman_numeral) {
    if (s.length >= 1 && s.length <= 15) {
        let sum = 0;
        for(i = s.length - 1; i >= 0; i--) {
            if(s[i] === 'I' && (s[i + 1] === 'V' || s[i + 1] === 'X')) {
                sum = sum - 1;
            } else if (s[i] === 'I') {
                sum = sum + 1;
            } else if(s[i] === 'V') {
                sum = sum + 5;
            } else if (s[i] === 'X' && ((s[i + 1] === 'L') || s[i + 1] === 'C')) {
                sum = sum - 10;
            } else if (s[i] === 'X') {
                sum = sum + 10;
            } else if (s[i] === 'L') {
                sum = sum + 50;
            } else if (s[i] === 'C' && (s[i + 1] === 'D' || s[i + 1] === 'M')) {
                sum = sum - 100;
            } else if (s[i] === 'C') {
                sum = sum + 100;
            } else if (s[i] === 'D') {
                sum = sum + 500;
            } else if (s[i] === 'M') {
                sum = sum + 1000;
            } else {
                alert("Invalid Number. Try Again")
                return
            }
        }
        return sum
    } else {
        alert("Number has to between 1 and 15 characters")
    }
};

let sum = romanToInt(s);
console.log(sum);