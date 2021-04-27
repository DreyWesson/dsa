import { stringReversal } from "./strReversal";
function palindrome(str) {
  return str === stringReversal(str) ? "Yes" : "False";
}
console.log("Palindrome >>>", palindrome("anna"));
