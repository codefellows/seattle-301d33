'use strict';

$(function(){
  $('form').on('submit', handleSearch);
});

let handleSearch = (event) => {

  event.preventDefault();

  console.log("Handling Search");

  // If using search.json, you'll need to change the handlebars template to use the right data keys
  // let url = "/search.json";
  let url = "https://swapi.co/api/starships";

  $.getJSON(url)
   .then( data => renderResults(data.results) )
   .catch( err => console.error('You suck', err) );

  console.log("Search Handled");

};


let renderResults = (data) => {

  let template = $('#search-template').html();
  let searchTemplate = Handlebars.compile(template);

  $('.results ul').empty().hide();

  data.forEach( (listing) => {
    $('.results ul').append(searchTemplate(listing));
  });

  $('.results ul').fadeIn(125);

};

