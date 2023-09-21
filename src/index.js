const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' ',
};

const ass = {
    '10': '.',
    '11': '-'
}

function decode(expr) {
    const arrayOfString = expr.match(/(.{1,10})/gim);
    const reformattedByte = [];

    for (let i = 0; i < arrayOfString.length ; ++i) {
        const subArr = arrayOfString[i]

        if (subArr === '**********') {
            reformattedByte.splice(i, 1, ' ');
        } else {
            for (let j = 0; j < subArr.length; j = j + 2) {
                const a = subArr[j] + subArr[j+1]

                if (a > 0) {
                    if (reformattedByte[i]) {
                        reformattedByte.splice(i, 1, reformattedByte[i]+ass[a])
                    } else {
                        reformattedByte.splice(i, 1, ass[a])
                    }
                }
            }
        }
    }

    let decodedMessage = ''
    for (let j = 0; j < reformattedByte.length; j++) {
        if (MORSE_TABLE[reformattedByte[j]]) {
            decodedMessage += MORSE_TABLE[reformattedByte[j]];
        }
    }

    return decodedMessage;
};

module.exports = {
    decode
}