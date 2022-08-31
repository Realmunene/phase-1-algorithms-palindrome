function isPalindrome(word) {
  // Write your algorithm here
  const lettersArray = word.split('');
  const lettersInReverse = lettersArray.reverse()
  const reverseWord  = lettersInReverse.join('')

  if (word == reverseWord){

    return true

  } else {
    return false
  }
}

/* 
  Add your pseudocode here
*/
/*
The isPalindrome function is assigned a parameter word which splite by .split and stored to a const called lettersArray which also is stored in reverses in the lettersInReverse variable. 
*/
/*
  Add written explanation of your solution here
*/
/* isPalindrome takes the word to splits each letter into an array, then the array is reversed. The array is then joined again into a word. Then we compare if the orginal word is the same as the reversed word. If true then it returns true, or else it will return false
You can run `node index.js` to view these console logs*/

if (require.main === module) {
  // add your own custom tests in here
  console.log('Expecting: false')
  console.log('=>', isPalindrome('boy'));

    //✓ returns false for 'ab'
    
  console.log('Expecting: true')
  console.log('=>', isPalindrome('abba'));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
