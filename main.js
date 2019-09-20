// While I Should Have Been Coding...

console.log('Challenge #1');

// Console out the numbers from 1-20, but only if they're divisible by 3.
// Use `if` and a modulus operation.

for(let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

console.log('---')
console.log('Challenge #2');

// Same problem as #1, but no `if`s, `mods`, or `but`s (and no, that last one is
// not a thing). If you did it right, you should run the loop 6 times with 1
// console log per loop. That's called... a clue!

for(let i = 3; i <= 20; i+= 3) {
    console.log(i);
}

console.log('---')
console.log('Challenge #3');

// Console out the numbers from 1-20. BACKWARDS.
// (And, optionally, in heels.)
// (That's a reference that only Olds make, and only if they're SUPER CULTURED.)
// (No extra credit will be given for wearing heels during this challenge.)

for(let i = 20; i >= 1; i--) {
    console.log(i);
}

console.log('---')
console.log('Challenge #4');

// For the string 'Boy howdy am I good at this!', console out the letters
// individually.

const howdy = 'Boy howdy am I good at this!';

for(let i = 0; i < howdy.length; i++) {
    console.log(howdy[i]);
}

console.log('---')
console.log('Challenge #5');

// For the string, 'And getting better every day.', starting with the second
// character, print out every third character.

let str = 'And getting better every day.';

for(let i = 1; i < str.length; i+=3) {
    console.log(str[i]);
}

console.log('---')
console.log('Challenge #6');

// // For the string 'Am I the best?', console out the letters individually, AND
// // UPPERCASED.

let str = 'Am I the best?';
console.log(str.length)

for(let i = 0; i < str.length; i++) {
    let newStr = str.toUpperCase();
    console.log(newStr)
}



console.log('---')
console.log('Challenge #7');

// For the string 'Whoa, I am the best!', console out the letters individually,
// but also capitalize the letters in the third word.

let str = "Woah, I am the best!";

for(let i = 0; i < str.length; i++) {
    let newStr = str.replace('am', 'AM')
    console.log(newStr[i])
}

console.log('---')
console.log('Challenge #8');

// For the string 'I am become death, destroyer of worlds.', console out the letters
//  individually, but backwards. That is, the first console log should be
// `.`, followed by `s`, followed by `d`, and so on.

let str = 'I am become death, destroyer of worlds.';

for(let i = 0; i <= str.length; i++) {
    let newStr = str.split('').reverse().join('');
    console.log(newStr[i]);
}

console.log('---')
console.log('Challenge #9');
// stolen from : https://stackoverflow.com/questions/29593532/how-to-globally-replace-pipe-symbol-in-string // "so|me|str|ing".replace(/\|/g, ',');

// // Console out the individual letters of each person in class today, which are
// // in the string above. Every time you start a new name (including the first
// // one!), console out the string: 'Here today is:'.
// // You'll know you're at a new person's name when you hit the pipe character.
// // Don't print the pipes!

const names = 'Colin|Mesuara|Drew|In Seop|Emma|Ben|J|Ryan|Olgy|Mike|Chris|John';

for (let i = 0; i < names.length; i++) {
    if (names[i] === "|") {
        console.log('Here today is: ')
    } else {
        console.log(names[i])
    }
}

// // // let newNames = names.replace('|', ',');
// // let newNames1 = names.replace(/|/g, '');
// // // console.log(newNames);
// // console.log(newNames1);




// for (let i = 0; i < names.length; i++) {
//     let newNames = names.replace(/\|/g, ',');
//     console.log(newNames[i]);
// }

// for (let i = 0; i < names.length; i++) {
//     if(names.length[i] === '|') {
//         console.log(names[i]);
//     }
// }


//Colins Solution... didnt include the message 'Here today is:' before the start of 'Colin'
// i = 0;
// while (i < names.length) {
//     if (names[i] === '|') {
//         console.log('Here today is:');
//     } else {
//         console.log(names[i])
//     }

//     i = i + 1;
// }