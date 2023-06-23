//  question no 1
const sumOfNumber = () => {
     let number = Number(prompt("Enter your number"))
     sum = 0
     for( i = 1; i <=number; i++){
           sum += i
     }
       return sum
}
console.log(sumOfNumber())

//  question no 2
const isPrimeNum = ()=>{
      let inputNum = Number(prompt("enter your number"));
     for(i = 2; i<=Math.floor(inputNum/2); i++){
      if(inputNum % i){
            return "its not a prime number"
      }else{
            return "its a prime number"    
      }
     }
}
console.log(isPrimeNum())

//  question no 3

const num1 = 2;
const num2 = 5;
result = num1 + num2 // result = 2 + 5

const checkVowel = (str) =>{
      let count = 0
      let vowel = ["a","e","i","o","u"]  // check str if vowel is not available return 0 if its availablr count 1
      for(i=0; i<=str.length; i++){
            if(vowel.includes(str[i])){  
                  count++;
            }
      }
      return count
}
let input = prompt("enter your string")
console.log(checkVowel("selena"));

//  question no 4
function capitalizeWords(sentence) {
      const words = sentence.split(" "); // break sentence into array
      // console.log(words)
      const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      });
      return capitalizedWords.join(" ");// convert array into string
    }
    const sentence = prompt("enter your str");
console.log(capitalizeWords(sentence)); 



// question no 5

function generateRandomAlphanumeric(length) {
      // Define a string containing all possible alphanumeric characters
      const alphanumericChars = 'abcdefghiuvwxyzABCDEFGHPQRSTUVWXYZ0123456789';
      
      // Initialize an empty string to store the generated random string
      let randomString = '';
    
      // Generate random alphanumeric characters until the desired length is reached
      for (let i = 0; i < length; i++) {
        // Generate a random index within the range of alphanumericChars length
        const randomIndex = Math.floor(Math.random() * alphanumericChars.length);
         console.log("random" + randomIndex)
        // Select a random alphanumeric character using the randomIndex
        const randomChar = alphanumericChars[randomIndex];
        
        // Concatenate the random character to the randomString
        randomString += randomChar;
      }
    
      // Return the generated random string
      return randomString;
    }
    const randomString = generateRandomAlphanumeric(10);
//     console.log(randomString);



//  question no 6

let namesArr = [
      {fname: "ali", lname: "khan"},
      {fname: "aliya", lname: "alam"},
]
const fullName = namesArr.map(f => {
      return f.fname + " " + f.lname
})
console.log(fullName);



//  question no 7

function mergeObjects(obj1, obj2) {  
      return { ...obj1, ...obj2 };
    }
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    
    const merged = mergeObjects(obj1, obj2);
    console.log(merged)



//      question no 8

    function getKeyByValue(object, value) {
      return Object.keys(object).find(key => object[key] === value);
    }
    const map = {"first" : "1", "second" : "2"};
    console.log(getKeyByValue(map,"2"));



//     question no 9
 
let avgObj=[
      {name: "abc",
      age: 30
},
  {name: "def",
      age: 50
},
  {name: "ghi",
      age: 50
},
  {name: "jkl",
      age: 50
},
  {name: "mno",
      age: 40
}
]
const getAvgAge = avgObj.filter(ag =>{
      return ag.age == 50
})
console.log(getAvgAge)

// question no 10
 
const greet = (user =>{
     return "Hello " + user 
})
let userName = prompt("enter your name")
console.log(greet(userName))

//  question no 11

const square = (number => {
      return number * number
})
let num = Number(prompt("enter your square number"));
console.log(square(num));


// question no 12

const isEven = (num => {
      return num % 2===0
})
const evenNum = Number(prompt("enter your even number"));
console.log(isEven(evenNum));
   

//  question no 13

const conCat = (str1,str2)=> {
       return str1 + str2
}
const fStr = prompt("enter your first string");
const sStr = prompt("enter your second string");
console.log(conCat(fStr,sStr))

// question no 14

const lengthOfStr = (string) =>{
      return string.length;
}
const lstr = prompt("ennter your string");
const resultStr = lengthOfStr(lstr)
console.log(resultStr);


        