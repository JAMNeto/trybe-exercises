//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verifyPalindrome(word){
    let isPalindrome = false;
    let reverseWord = '';
   for(index = (word.length - 1); index >= 0; index -= 1){
       reverseWord += word[index];
       
   if(word === reverseWord){
       isPalindrome = true;
   }
}
return isPalindrome;
}

let word = 'desenvolvimento';

verifyPalindrome(word);