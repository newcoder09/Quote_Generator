
// create global variable so available in more than one function
let apiQuotes = [];

// API Quotes from API
async function getQuotes() {
 const apiUrl = 'https://type.fit/api/quotes';
 try {
    //  the const will populate when it has some fetch data not before
const response = await fetch(apiUrl);
// getting json as a reponse as a json string and passing as a variable quote
apiQuotes = await response.json();
console.log(apiQuotes[3]);

 } catch(error){

 }

}

// on load
getQuotes();