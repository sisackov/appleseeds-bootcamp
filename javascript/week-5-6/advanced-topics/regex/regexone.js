/**
 * https://regexone.com/
 */

let [text, pattern, result] = ['', '', ''];


/**
 * Exercise 3: Matching Characters
Task	Text
Match	can
Match	man
Match	fan
Skip	dan
Skip	ran
Skip	pan
 */
// text = "can man fan dan ran pan";
// pattern = /[^drp](an)/g;
// result = text.match(pattern);
// console.log(result);

/**
 * Exercise 4: Excluding Characters
Task	Text	 
Match	hog	To be completed
Match	dog	To be completed
Skip	bog
 */
// text = "hog dog bog";
// pattern = /[^b](og)/g;
// result = text.match(pattern);
// console.log(result);


/**
 * Exercise 5: Matching Character Ranges
Task	Text	 
Match	Ana	To be completed
Match	Bob	To be completed
Match	Cpc	To be completed
Skip	aax	To be completed
Skip	bby	To be completed
Skip	ccz
 */
text = "Ana Bob Cpc aax bby ccz";
pattern = /\b[A-Z](\w+)\b/g;//! \b is a word boundary and enables us to catch all words
result = text.match(pattern);
console.log(result);


/**
 * Exercise 6: Matching Repeated Characters
Task	Text	 
Match	wazzzzzup	
Match	wazzzup	
Skip	wazup
 */
text = "wazzzzzup wazzzup wazup";
pattern = /\b(wa)(z){2,}(up)\b/g;
result = text.match(pattern);
console.log(result);


/**
 * Exercise 7: Matching Repeated Characters
Task	Text	 
Match	aaaabcc	
Match	aabbbbc	
Match	aacc	
Skip	a
 */
text = "aaaabcc aabbbbc aacc a ac";
pattern = /\b[abc]{2,}\b/g;
result = text.match(pattern);
console.log(result);






