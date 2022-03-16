
// create global variable so available in more than one function
let apiQuotes = [];

// newQuote function 
    
function newQuote () {
// this is to pick the random quote using the math.floor which rounds down
const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
console.log(quote);
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

// on load
getQuotes();