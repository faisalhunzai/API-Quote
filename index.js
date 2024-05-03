
// async function getQuote (){
//       const proxyurl = 'https://cors-anywhere.herokuapp.com/'
//       const apiUrl =`http://api.forismatic.com/api/1.0/?method=getQoute&lang=en&fromat=json `;

//       try {
//         const response = await fetch(proxyurl + apiUrl);
//         const data = await response.json();
//         console.log(datas)
//       } catch ( error) {
//         getQuote ();
//         console.log("hello error", error)
     
//       }
// }
// getQuote ();

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader =document.getElementById('loader');

// function loading (){
//     loader.hidden =false;
//     loader.quoteContainer=true;
// }

// function complete (){
//     loader.hidden = false;
//     loader.quoteContainer = true;
// }

let apiQuote = [];

function newQuote() {
  const quote = apiQuote[Math.floor(Math.random() * apiQuote.length)];

// //   loading ()
//   if (!quote.author) {
//     authorText.textContent = "Unknown";
//   } else {
//     authorText.textContent = quote.author;
//   }

  if (quote.text.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  quoteText.textContent = quote.text;
//   complete()
}

async function getQuote() {
    // loading ()
  const apiUrl = `https://type.fit/api/quotes`;
  
  try {
    const response = await fetch(apiUrl);
    apiQuote = await response.json();
    newQuote();
  } catch (error) {
    console.error("Error fetching quotes:", error);
  }
}

function twitterQuote() {
  const twitterApi = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterApi, `blank`);
}

newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", twitterQuote);

getQuote();

// test code


// const quoteContainer = document.getElementById('quote-container')
// const qouteText =document.getElementById('quote')
// const authorText = document.getElementById('author')

// let apiquote = [];

// async function getQuote() {
//     const apiUrl = 'https://type.fit/api/quotes';

//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         apiquote = data;
//         const randomIndex = Math.floor(Math.random() * apiquote.length);
//         const randomQuote = apiquote[randomIndex];
//         console.log(randomQuote);
//     } catch (error) {
//         console.error('Error fetching quote:', error);
//     }
// }

// getQuote();

// api quotes
// const quoteContainer = document.getElementById('quote-container');
// const qouteText = document.getElementById('quote');
// const authorText = document.getElementById('author');
// const twitterBtn = document.getElementById('twitter');
// const newQuoteBtn = document.getElementById('new-quote');

// let apiQuotes =[];

// function newcode () {
//     const code = apiQuotes [math.floor(math.radom() * apiQuotes.length)]

//     authorText.textContent = qoute.author;
//     qouteText.textContent = qoute.text;

// }

// async function getQuotes (){
//     const apiUrl ='https://type.fit/api/quotes'

//     try {
//         const response =await fetch (apiUrl)
//         apiQuotes = await response.json()

//     } catch (error) {

//     }
// }
// getQuotes() ;
// let apifetch = []

// async function apicode (){
//     const apiUrl = `https://type.fit/api/quotes`

//     try {
//         const response =  await fecth(apiUrl)
//         apifetch = await response.json()
//         console.log(apifetch)
//     } catch (error) {

//     }
// }

// apicode ();
// function newcode (){
//     const code = apiQuotes [Math.floor(Math.random) * apiQuotes.length]
//     console.log(code)
// }

// function newapi (){
//     const code = newapi[Math.floor(Math.random) * apiQuotes.length]
//     console.log(code)
// }

// let apiQuote =[];

// async function getQuotes (){
//     const apiUrl  = `https://type.fit/api/quotes`

//     try {
//         const response =await fetch (apiUrl)
//         apiQuote = await response.json()
//         console.log(apiQuote)
//     } catch (error) {

//     }
// }

// getQuotes();

// let apicode = [];

// async function getQuotes (){

//     const apiUrl = `https://type.fit/api/quotes`

//     try {
//         const response = await fetch (apiUrl)
//         apicode = await response.json()
//         console.log(apicode)
//     } catch (error) {

//     }
// }

// getQuotes ()
