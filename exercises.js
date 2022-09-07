(function() {
    'use strict';
  
    // ---------------------
    // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
    // ---------------------
    function max(num1, num2){
       if(num1>num2){
           return num1}
           else{return num2};
       }
    
  
  
    // ---------------------
    // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
    // ---------------------
    // var max=0;
    function maxOfThree(num1,num2,num3){
        const max = Math.max(num1,num2,num3);
        return max;
    }

    
  
    // ---------------------
    // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
    // ---------------------
    function isVowel(string){

        var text;
        var string = string.toLowerCase();
    
        var vowels = (['a', 'e', 'i', 'o', 'u']);
    
        for (var i = 0; i <= vowels.length; i++){
            if (string != vowels[i]) {
                continue;
            }
            return true;
        }
        return false;
    }
    //(string != vowels[i])
  
  
    // ---------------------
    // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
    // ---------------------  ASSUMING EVERYTHING IS LOWERCASE!
    function rovarspraket(str) {
		//split input string into array of individual characters
        var arr = str.split('');
		//define output variable
		var out ='';
		//loop through string array to check if vowel or space
		for (var i = 0; i < arr.length; i++){ // do all the below logic, then increase your integer by 1. rinse and repeat.
			if (!(arr[i] == ' ' || arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u')){
				//if the array[i] is not space(' ') OR = to a VOWEL ^^
				out += arr[i] + 'o' + arr[i];  // whatever my string is, start from that and add to it (+=)
			}
			else {
				//if vowel or space just insert character
				out += arr[i];
			}
		}
		//return string
		return out;
	}
        

    
  
  
    // ---------------------
    // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
    // ---------------------
  //define sum()
	function sum(arrNums) {
		//define output variable
		var outSum = 0;
		//loop through input array of numbers and add together
		for (var i = 0; i < arrNums.length; i++){
			outSum += arrNums[i];
		}
		//return sum of numbers
		return outSum;
	}
	
	//define multiply
	function multiply(arrNums){
		//define output variable
		var outMult = 1;
		//loop through input array of numbers and multiply values
		for (var i = 0; i <arrNums.length; i++){
			outMult = outMult * arrNums[i];
		}
		//return multiplied values
		return outMult;
		
	}
  
  
    // ---------------------
    // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
    // ---------------------
  //define reverse string function
	function reverse(str) {
		//define output string
		var outStr = '';
		//loop through string backwards
		for (var i = str.length - 1; i >= 0; i--) {
			//add to output string in backwards order
			outStr += str[i];
		}
		//return reversed string
		return outStr;
	}
  
  
    // ---------------------
    // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
    // ---------------------
  // define function to find the longest word and then return the length of that word
	function findLongestWord(arrStr){
		//define output length
		var longestLength = 0;
		//loop through input array and compare lengths of words
		for(var i = 0; i < arrStr.length; i++){
			//compare lengths
			if(arrStr[i].length > longestLength) {
				//store longest length
				longestLength = arrStr[i].length;
			}
		}
		//return longest length
		return longestLength;
	}
  
  
    // ---------------------
    // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
    // ---------------------
  //define function
	function filterLongWords(arrWords, i){
		//define output array
		var longestWords = [];
		//loop through word Array
		for(var j = 0; j < arrWords.length; j++){
			//compare if word in array is longer than i
			if(arrWords[j].length > i) {
				//store in output Array
				longestWords[longestWords.length] = arrWords[j];
			}
		}
		//return output Array
		return longestWords;
	}
  
  
    // ---------------------
    // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
    // ---------------------
  //define function to count how many times each letter is used
	function charFreq(str){
		//define frequency object
		var freq = {};
		//loop through the string backwards to build frequency listing
		for (var i = str.length - 1; i >= 0; i--) {
			//for str[i] position in freq array have it add 1 to itself or zero for specific letter "i"
			freq[str[i]] = 1 + (freq[str[i]] || 0);
		}
		//return frequency listing
		return freq;
	}
  
    ////////////////////////////////////////////////////////////////////////
    /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
    ////////////////////////////////////////////////////////////////////////
  
    console.assert(max(2, 4) === 4, 'function max error');
  
    console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');
  
    console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');
  
    console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');
  
    console.assert(isVowel('a') === true, 'ERROR function isVowel');
  
    console.assert(isVowel('b') == false, 'ERROR function isVowel');
  
    console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');
  
    console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');
  
    console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');
  
    console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');
  
    console.assert(findLongestWord(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');
  
    console.assert(filterLongWords(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');
  
    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);
  
    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);
  
    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);
  
    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
  })();