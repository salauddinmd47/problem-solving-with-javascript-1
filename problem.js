//  ludo খেলাই আমরা কিভাবে ১ থেকে ৬ সংখ্যা
//  randomly print করতে পারি 

// solve with reuseable code 

/* function randomNumber(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(randomNumber(1,6)) */

// solve for only ludo 

/* const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber) */

// 2. কিভাবে আমরা আমাদের শ্রেণীকক্ষের সকলের নাম অক্ষর অনুযায়ি সাজাতে পারি 

// const studentsName = ['salam', "Ashik", 'Madhu', "Osman", "Faruk", "Tonni", "Lovely", "Belly", "Rokom", "Chandra", "Dulal"]
// studentsName.sort()
// console.log(studentsName)

// 3.কিভাবে আমরা আমাদের শ্রেণীকক্ষের সকলের রোল নাম্বার ক্রমনুযায়ি   সাজাতে পারি

/* const rollNumbe = [17, 12, 4, 7, 3, 2, 6, 8, 5, 1, 10, 13, 14,];
const sortedNumber = rollNumbe.sort(function(a, b){
    return a-b;
})
console.log(sortedNumber) */

// solve with function

/* function sortedRollNumber(roll){ 
    const sortedNumber = roll.sort(function(a, b){
        return a-b;
    })
    return sortedNumber;
    
}
const rollNumber = [17, 12, 4, 7, 3, 2, 6, 8, 5, 1, 10, 13, 14,];
console.log(sortedRollNumber(rollNumber)) */

// 4.  কোন সাল লিপ ইয়ার কিনা তা কিভাবে বের করবো;

/* function isLeapYear(year){
    if((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))){
        console.log(`${year} is a leap year`)
    }
    else{
        console.log(`${year} is not a leap year`)
    }
}
isLeapYear(2044) */

// 5 কোন sentence এ  কতগুল vowels  আছে তা কিভাবে নির্ণয় করা যায় ?

/* function countVowels(sentence){
    const vowels = ['a','e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;
    const letters = Array.from(sentence)
    letters.forEach(function(value){
        if(vowels.includes(value)){
            count++;
        }
        
    })
    return count;
}*/

// using for of loop 

/* function countVowels(sentence){
    const vowels = ['a','e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;
    const letters = Array.from(sentence)
     for(const letter of letters){
         if(vowels.includes(letter)){
             count++;
         }
     }
     return count;
} */

// একটা  array থেকে  duplicate number কিভাবে বের করে আনব?

/* const numbers = [1, 4, 2, 4, 5, 2, 3, 7, 8,  5, 11, 32, 16, 3]

const duplicateNumber = numbers.filter(function(value, index, array){
    return numbers.indexOf(value) !== index;
})
console.log(duplicateNumber) */

// একটা  array থেকে unique number কিভাবে বের করে আনব?

/* const numbers = [1, 4, 2, 4, 5, 2, 3, 7, 8,  5, 11, 32, 16, 3]

const uniqueNumber = numbers.filter(function(value, index, array){
    return numbers.indexOf(value) === index;
})
  */