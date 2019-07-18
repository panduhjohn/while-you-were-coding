console.log('Challenge #1');

// Console out the numbers from 1-20, but only if they're divisible by 3.

// Use `if` and a modulus operation.

const number = 20;
let counter = 1;

while (counter <= number) {
    if (counter % 3 === 0) {
        console.log(counter)
    }
    counter = counter + 1;
} 

console.log(challenge1)

console.log('Challenge #2');

// Same problem as #1, but no `if`s, `mods`, or `but`s (and no, that last one is
// not a thing). If you did it right, you should run the loop 6 times with 1
// console log per loop. That's called... a clue!


console.log('Challenge #3');

// Console out the numbers from 1-20. BACKWARDS.

// (And, optionally, in heels.)

// (That's a reference that only Olds make, and only if they're SUPER CULTURED.)

// (No extra credit will be given for wearing heels during this challenge.)

const number = 20;
let counter = number;

while (counter > 0) {
    console.log(counter)
    counter = counter - 1;
} 

console.log(challenge3)

console.log('Challenge #4');

// For the string 'Boy howdy am I good at this!', console out the letters
// individually.

const howdy = 'Boy howdy am I good at this!';

let counter = 0;

while (counter < howdy.length) {

    console.log(howdy[counter]);
    counter = counter + 1;

}

console.log(challenge4)

console.log('Challenge #5');

// For the string, 'And getting better every day.', starting with the second
// character, print out every third character.

let getting = 'And getting better every day.';
let counter = 1;

while (counter < getting.length) {
    console.log(getting[counter]);
    counter = counter + 3;
}


console.log('Challenge #6');

// For the string 'Am I the best?', console out the letters individually, AND
// UPPERCASED.

let best = 'Am I the best?';
let counter = 0;

while (counter < best.length) {

    console.log(best[counter].toUpperCase());
    counter = counter + 1;
}


console.log('Challenge #7');

// For the string 'Whoa, I am the best!', console out the letters individually,
// but also capitalize the letters in the third word.

const better = "Woah, I am the best!";
let counter = 0;
let space = 0;

while (counter < better.length) {

    if (better[counter] === " ") {
        space = space + 1;
    } if (space === 2) {
        console.log(better[counter].toUpperCase());
    } else {
        console.log(better[counter]);
    }
    counter = counter + 1;
}

console.log('Challenge #8');


// For the string 'I am become death, destroyer of worlds.', console out the letters
//  individually, but backwards. That is, the first console log should be
// `.`, followed by `s`, followed by `d`, and so on.

const death = 'I am become death, destroyer of worlds.';
let counter = death.length;

while (counter >= 0) {
    console.log(death[counter]);
    counter = counter - 1;
}

const names = 'Colin|Mesuara|Drew|In Seop|Emma|Ben|J|Ryan|Olgy|Mike|Chris|John';

// Console out the individual letters of each person in class today, which are
// in the string above. Every time you start a new name (including the first
// one!), console out the string: 'Here today is:'.

// You'll know you're at a new person's name when you hit the pipe character.

// Don't print the pipes!

const names = 'Colin|Mesuara|Drew|In Seop|Emma|Ben|J|Ryan|Olgy|Mike|Chris|John';
const str = 'Here today is:';
let counter = 0;
let hereToday = 'Here today is:';
let replace = hereToday.replace("|", " ")

while (counter < names.length) {
    if (counter === 0) {
        console.log(hereToday)
    }
    if (names[counter] === "|") {
        console.log(hereToday)
    } else {
        console.log(names[counter])
    }
    counter = counter + 1;
}