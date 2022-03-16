
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


// create global variable so available in more than one function
let apiQuotes = [];

// newQuote function 
    
function newQuote () {
// this is to pick the random quote using the math.floor which rounds down
const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
// replace null author with unknown
if (!quote.author){
    authorText.textContent = 'unknown';
} else {
  authorText.textContent = quote.author;  
}
// see if quote length to choose style
if (quote.text.length > 120){
  quoteText.classList.add('long-quote')
}else{
    quoteText.classList.remove('long-quote') 
}




// set the value of the text content, we can pass a string which is shown in the element. we only want the auther 

quoteText.textContent = quote.text;
}

// API Quotes from API
async function getQuotes() {
 const apiUrl = 'https://type.fit/api/quotes';
 try {
    //  the const will populate when it has some fetch data not before
const response = await fetch(apiUrl);
// getting json as a reponse as a json string and passing as a variable quote
apiQuotes = await response.json();

// this is what the new function above is called.
newQuote()

 } catch(error){

 }

}

// to tweet
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textConten} - ${authorText.textContent}`;
    // this will open twitter in a new tab
    window.open(twitterUrl, '_blank');
}

// event listeners to make things work
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// on load
getQuotes();