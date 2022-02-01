// Palindrome
const str = "racecar";
//split, reverse and join
const reversedStr = str.split("").reverse().join("");

//compare if the reversed string is same as the String itself

if (reversedStr === str) {
    console.log("true")

} else {
    console.log("false")
}