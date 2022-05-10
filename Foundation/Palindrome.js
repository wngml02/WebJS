function isPalindrome(word) {
  const word_len = word.length;
  for(let i = 0; i<= word_len-1; i++){
    let left = word.charAt(i)
    let right = word.charAt(word_len -1 - i)
    if(left !== right){
      return false
    }
    
  }
  return true// 여기에 코드를 입력해 주세요.

}

// 테스트 코드
console.log(isPalindrome("racecar"));
console.log(isPalindrome("stars"));
console.log(isPalindrome("기러기"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("kayak"));