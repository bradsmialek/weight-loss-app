'use strict';

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const superagent = require('superagent');
const unirest = require('unirest');
const pg = require('pg');
const ejs = require('ejs');

const app = express();
// app.use(cors());
const PORT = process.env.PORT;

const client = new pg.Client(process.env.DATABASE_URL);

client.connect();
client.on('error', err => console.log(err));

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');


// Routes

// app.get('/', getBooksFromDB);  //  pages/index
// app.get('/new', searchForm);  //   searches/new
//
//app.post('/searches', searchNewBooks);  // searches/show
// app.get('/books/:book_id', viewDetails); // books/show
// app.post('/searches/:book_id', saveBookToDB); // redirect to home '/' page
// app.put('/books/:book_id', updateBook);

app.get('*', (request, response) => response.status(404).send('This route does not exist'));
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));





unirest.get('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?targetCalories=2000&timeFrame=day')
  .header('X-RapidAPI-Host', 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com')
  .header('X-RapidAPI-Key', `${process.env.X_RapidAPI_Key}`)
  .end(function (result) {
    console.log('line 55 $$$$$$$$$$$$$$',result.status, result.headers, result.body);
  });


// function searchNewBooks(request, response){
//   console.log('line77', 'request.body',request.body);
//   let url ='https://www.googleapis.com/books/v1/volumes?q=';
//   if (request.body.search[1]==='title') {url+= `+intitle:${request.body.search[0]}`;}
//   if (request.body.search[1]==='author') {url+= `+inauthor:${request.body.search[0]}`;}
//   // console.log(url);
//   // response.send('Ok');
  
//   superagent.get(url)
  
//     .then(apiResponse => apiResponse.body.items.map(bookResult => new Book(bookResult)))
//     .then(results => {
//       console.log('line103','results[1].identifier',results); //[1].identifier
//       response.render('pages/searches/show', {searchResults: results})
//     })
  
//     .catch(err => handleError(err,response));
  
// }




// function handleError(error, response){
//   console.log(error);
//   console.log('response', response);
//   if (response) response.render('pages/error', {error: 'Something went wrong....  Try again!'});
// }