(function() {
    'use strict';
  
    // ---------------------
    // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
    // ---------------------
    function max(num1, num2){
       if(num1>num2){		// if num1 is greater than num2
           return num1}		// (if it's true)then return num1. 'Return' kicks you out of the function.
           else{return num2}; // if false, then return num2.
       }
    
  
  
    // ---------------------
    // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
    // ---------------------
    // var max=0;  
    function maxOfThree(num1,num2,num3){
        const max = Math.max(num1,num2,num3);
        return max;
    }

	// Could also do: (using the "if...else construct") https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else#description
	// function maxOfThree(num1,num2,num3) {
	// if (num1 > num2 && num1 > num3) {
	// 	return num1;
	// } else if (num2 > num3) {
	// 	return num2;
	// } else {
	// 	return num3;
	// }
	// }
    
  
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
    //(string != vowels[i]) Meaning: string is NOT EQUAL to vowels[i]

	// Could also do:
	// 	function isVowel(str) {
	//		str = str.toLowerCase();		====best practice is to specify lowercase or caps
	//		return 'aeiou'.includes(str);
	//	}
  
  
    // ---------------------
    // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
    // ---------------------  ASSUMING EVERYTHING IS LOWERCASE!
    
		
		//returns string
		
	
    
	// Could also do: ^^^ ===RECOMMENDED===
			function rovarspraket(text) {
				let translatedText = '';
	
				for(let i = 0; i < text.length; i++) {   //I want to start from "greater than" 0, and go from there//
					if('bcdfghjklmnpqrstvwxz'.includes(text[i])) {
						translatedText += text[i] + 'o' + text[i]
					} else {
						translatedText += text[i];
					}
				}
				return translatedText;
			}

    
  // let and const are BLOCK SCOPED.
  // var is FUNCTON SCOPED.
  
    // ---------------------
    // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
    // ---------------------
  //define sum() Replaing original 'var' with const/let
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
		const outStr = '';
		//loop through string backwards
		for (let i = str.length - 1; i >= 0; i--) {
			//add to output string in backwards order
			outStr += str[i];
		}
		//return reversed string
		return outStr;
	}

	// one liner
	function reverse(str) {
		return str.split('').reverse().join('');
	}

	//==Could also do:

	// function reverse(str) {
	// 	var length = str.length;
	// 	var reversed = [];
	// 	var joined = ("");
	// 	for (let i = length; i > 0; i--){
	// 		reversed.push(str.charAt(i-1));
	// 	};
	//===== ['y', 'p', 'p', 'a', 'h']				COMMENTS WITHIN COMMENTS
	//===== for(let i = 0; i< (length) ; i++){				''
	//===== 	joined += (reversed[i]);					''
	//===== }												''
	//	return reversed.join('');
	// }
  
  
    // ---------------------
    // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
    // ---------------------
  // define function to find the longest word and then return the length of that word
	function findLongestWord(arrStr){
		//define output length
		let longestLength = '';
		//loop through input array and compare lengths of words. ('i++' = 'i + 1')
		for(let i = 0; i < arrStr.length; i++){
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
		const longWords = [];
		//loop through word Array
		for(let j = 0; j < arrWords.length; j++){
			//compare if word in array is longer than i. if this word is greater in length than i
			if(arrWords[j].length > i) {
				//store in output Array
				longWords[longWords.length] = arrWords[j];
			}
		}
		//return output Array
		return longestWords;
	}

	// =====CAN ALSO DO===== PREFER THIS ONE====
	function filterLongWords(arr, i) {
		const result = [];		//going to be changing the array(arr)//
		for(let j = 0; j < arr.length; j++) {
			if(arr[j].length > i){
				result.push(arr[j])  //push this result into my array
			}
		}
	
		return result;
	}
  
    // ---------------------
    // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
    // ---------------------
  //define function to count how many times each letter is used
	function charFreq(str){
		//define frequency object
		const freq = {};
		//loop through the string backwards to build frequency listing
		for (let i = str.length - 1; i >= 0; i--) {
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