/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * Array of objects with properies for the quote, the source of the quote, 
 * the citation and year, and a tag to categorise quotes
***/
const quotes = [
	{
		quote: "The best of healers is good cheer.", 
		source: "Pindus",
		tag: "health"
	},	
	{
		quote: "It's not the men in your life that counts, it's the life in your men.",
		source: "Mae West",
		citation: "I'm No Angel",
		year: "1933"
	},
	{
		quote: "Maybe ever’body in the whole damn world is scared of each other.",
		source: "John Steinbeck" ,
		citation: "Of Mice and Men",
		tag: "fear"	
	},
	{
		quote: "Life appears to me too short to be spent in nursing animosity or registering wrongs.",
		source: "Charlotte Bronte",
		citation: "Jane Eyre"
	},
	{
		quote: "Memories warm you up from the inside. But they also tear you apart.",
		source: "Murakami",
		year: "2002",
		tag: "memories"
	}
];


/***
 * `getRandomQuote` function
 * selects a random quote object from the quotes array,
 * returns the randomly selected quote object
***/
function getRandomQuote(){
  let randomItem = quotes[Math.floor(Math.random() * quotes.length)];
  return randomItem;
};


/***
 * `printQuote` function
 * printQuote calls the getRandomQuote function and stores the returned quote object in a variable
 * printQuote constructs a string containing the different properties of the quote object using the following HTML template:
 * printQuote doesn't add a <span class="citation"> for a missing citation or a <span class="year"> if the year property is missing
 * printQuote displays the final HTML string to the page. You can use this JS snippet to accomplish that: document.getElementById('quote-box').innerHTML
***/
function printQuote(){	
  let randomQuote = getRandomQuote();
		
	let message = '<p class="quote">' + randomQuote.quote + '</p>';
	message += '<p class="source">' + randomQuote.source ;

	if (randomQuote.citation){
		message += '<span class="citation">' + randomQuote.citation + '</span>';
	}

	if (randomQuote.year){
		message += '<span class="year">' + randomQuote.year + '</span>';
	} 
	//Extra: tags on quotes show up if present
	if (randomQuote.tag){
		message += '<span class="tag">, <i>tagged: ' + randomQuote.tag + '</i></span>';
	} 
	message += '</p>';

	document.getElementById('quote-box').innerHTML = message;
	return message;
  
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

//Extra: random background colour creates a random rgb value for red, blue and green values. It then loads it into the background of the body
function randomColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
 
  document.body.style.background = bgColor;
  }
  
//when user clicks anywhere on the button, the "randomColor" function is called and changes the background colour to a random colour
document.getElementById('load-quote').addEventListener("click", randomColor, false);

//Extra: timed interval: a random quote are changed after a set interval and called in the function autoShow.
let autoQuote;

function autoShow() {
  autoQuote = setInterval(printQuote, 5000);
 }

autoShow();
