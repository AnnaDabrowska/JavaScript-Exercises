function pyramid(n) {
    if (n < 0) {
        throw new Error(`n powinno być dodatnie!`);
    }
    if (n % 2 == 0) {
        throw new Error(`n powinno być nieparzyste!`);
    }
    for (let i = 1; i <= n; i = i + 2) {
        let spaces = (n - i) / 2
        let row = `${' '.repeat(spaces)}${'#'.repeat(i)}${' '.repeat(spaces)}`
        console.log(row);
    }
}

try {
    console.log(pyramid(9))
    console.log(pyramid(1))
    console.log(pyramid(5))
} catch (err) {
    console.error(err)
}

// pyramid(9)
//     #
//    ###
//   #####
//  #######
// #########

// pyramid(1)
// #

// pyramid(5)
//   #
//  ###
// #####
