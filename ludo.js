// 1. how we can print number 
/*  function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
 }
 console.log(getRandomNumber(1,6)) */

// 2. how can we sort an array alphabetically
// const students = ['kamal','jamal', 'salam','abdul', 'radid', 
// 'torikul'];
// console.log(students.sort());

// 3. how to sort an array numerically 

/* const rollNumber=[3,4,8,1,5,11,32,12,2];
const sortedRollNumber = rollNumber.sort(function(a,b){
    return a - b;
})
console.log(sortedRollNumber); */

// 4 checking year is leap year or not 

/* function leapYear(year){
    if((year % 400 ===0) || (year% 4===0 ) && (year%100 !== 0)){
        console.log( `${year } is a leap year`)
    }
    else{
        console.log( `${year } is not a leap year`)
    }
}
leapYear(2026) */
// how to figure out a sentence a have how many vowels.

const vowels = ['a', 'e', 'i', 'o', 'u']

/* function countVowels(sentence){
    const letters = Array.from(sentence.toLowerCase());
    let count = 0;
    letter.forEach(function(value){
        if(vowels.includes(value)){
            count++;
        }
    })
    return count;
} */
function countVowels(sentence){
    const letters = Array.from(sentence.toLowerCase());
    let count = 0;
    for(const letter of letters){
        if(vowels.includes(letter)){
            count++;
        }
    }
    return count;
}

console.log(countVowels('I love  bangladesh it is a very beautiful country'))