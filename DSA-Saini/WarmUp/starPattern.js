function PrintStar(n = 12) {
    let finalanswer = ''
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            row += '* '
        }
        finalanswer += row
        finalanswer += '\n'
    }
    return finalanswer
}
//console.log(PrintStar())

function PrintStarDup(n = 12) {
    for (let i = 0; i < 115; i++) {
        let row = '';
        for (let j = 0; j < 15; j++) {
            row += '* '
        }
        console.log(row)
    }
}
//PrintStar1(3)

function PrintStar1(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < i + 1; j++) {
            row += '* '
        }
        console.log(row)
    }
}
// PrintStar1(40)

function PrintStar2() {
    for (let i = 0; i < 5; i++) {
        let row = '';
        let count = 0
        for (let j = 0; j <= i; j++) {
            count += 1
            row = row + count + ' '
        }
        console.log(row)
    }
}
//PrintStar2()

function PrintStar2Dup() {
    for (let i = 0; i < 5; i++) {
        let row = '';
        for (let j = 0; j <= i; j++) {
            row = row + (j + 1) + ' '
        }
        console.log(row)
    }
}
//PrintStar2Dup()

function printStar3() {
    for (let i = 0; i < 5; i++) {
        let row = ''
        for (let j = 0; j <= i; j++) {
            row += (i + 1) + ' '
        }
        console.log(row)
    }
}

//printStar3()

function printStar4() {
    for (let i = 5; i > 0; i--) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row += (j + 1) + ' '
        }
        console.log(row)
    }
}
//printStar4()


function printStar5() {
    let array = [];
    for (let i = 0; i < 5; i++) {
        let row = ''
        array.push(5 - i - 1)
        for (let j = 0; j < 5; j++) {
            if (array.includes(j)) row += '*'
            else row += ' '
        }
        console.log(row)
    }
}
//printStar5()

function printStar5Dup() {
    for (let i = 0; i < 5; i++) {
        let row = '';
        let emptySpaces = 5 - i - 1
        for (let j = 0; j < 5; j++) {
            if (j < emptySpaces) row += ' '
            else row += '*'
        }
        console.log(row)
    }
}
//printStar5Dup()

function printStar5Dup1SirsSolution(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < (n - i - 1); j++) {
            row += '  '
        }
        for (let k = 0; k < (i + 1); k++) {
            row += '* '
        }
        console.log(row)
    }
}
//printStar5Dup1SirsSolution(5)

function printStar6(n) {
    for (let i = 0; i < n; i++) {
        let row = ''
        for (let j = 0; j <= i; j++) {
            if (j % 2 == 0) row += '1'
            else row += 0
        }
        console.log(row);
    }
}
//printStar6(6)
function printStar6Dup(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        let toggle = 1;
        for (let j = 0; j <= i; j++) {
            if (toggle == 1) {
                row += '1'
                toggle = 0
            }
            else {
                row += 0
                toggle = 1
            }

        }
        console.log(row);
    }
}
//printStar6Dup(67)

function printStar7(n) {
    let toggle = 1;
    for (let i = 0; i < n; i++) {
        let row = '';

        for (let j = 0; j <= i; j++) {
            if (toggle == 1) {
                row += '1'
                toggle = 0
            }
            else {
                row += 0
                toggle = 1
            }

        }
        console.log(row);
    }
}
//printStar7(6)


////Revision
var toggle = () => {
    let n = 4
    for (let i = 0; i < n; i++) {
        let t = 0
        let row = ''
        for (let j = 0; j <= i; j++) {
            t = t == 0 ? 1 : 0
            row += t
        }
        console.log(row)
    }
}

var toggleReverse = () => {
    let n = 4
    let t = 1
    for (let i = 0; i < n; i++) {
        
        let row = ''
        for (let j = 0; j <= i; j++) {
            row += t
            t = t == 0 ? 1 : 0
        }
        console.log(row)
    }
}
toggleReverse()