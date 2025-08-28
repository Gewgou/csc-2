const prompt = require("prompt-sync")();
let x;
let n;
function binaryTodecimal() {
    let result = 0, k = 0;
    let n, notGood;
    do {
        notGood = false;
        n = prompt('Insert a binary number: ');
        for (let i = 0; i < n.length; i++) {
            if (n[i] != '0' && n[i] != '1') {
                notGood = true;
                break
            }
        }                                                           //1101110
    } while (notGood);

    for (let i = n.length - 1; i >= 0; i--) {
        if (Number(n[i]) === 1) {
            result += Math.pow(2, k);
        }

        //console.log(`result = ${result}`)
        k++;
    }
    return result;
}

function DecimalTobinary() {
    let result;
    let str;
    const numbers = [];
    console.log('Please give a decimal number');
    n = Number(prompt()); //545

    while (n > 1) {
        result = Math.floor(n % 2);
        numbers.push(result);

        n = n / 2; // 1

        n = Math.floor(n);
        //40,20,10,5,2.5,1.25,


        if (n == 1) {
            break;
        }



    }
    return numbers.join('');
}



function DecimalTohexadecimal() {
    console.log('please give a decimal number');
    let n = Number(prompt())
    let hexadecimal = '';
    const hexDigits = "0123456789ABCDEF";
    while (n !== 0) {
        const remainder = n % 16;
        hexadecimal = hexDigits[remainder] + hexadecimal;
        n = Math.floor(n / 16);
    }
    console.log(hexadecimal);




}

//---------------------------------------- main
do {
    console.log('Do you want to convert to decimal or binary?');
    console.log('\nType:\n1 for binary to decimal and\n2 for decimal to binary\n3 dor decimal to hexadecimal');
    x = Number(prompt('> '));
} while ((x != 1 && x != 2 && x != 3));

if (x == 1) {
    console.log(binaryTodecimal());
}
else if (x == 2) {
    console.log(DecimalTobinary());
}
else if (x == 3) {
    console.log(DecimalTohexadecimal());
}
