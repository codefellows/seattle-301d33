'use strict';

// A standard $( document ).ready() block.
$( document ).ready(function() {
  console.log( "old school ready!" );
});

// Shorthand for $( document ).ready()
$(function() {
  console.log( "shorthand ready!" );
});

// Using something different than $
// jQuery.noConflict();
// (function(x) {
//   x(function() {
//     console.log( x('body').html() );
//   });
// })(jQuery);

// Shorthand for $( document ).ready()
$(function() {

  let count = 0;

  $('h2').on('click', function() {
    $(this).find('+section').fadeToggle(125);
  });

  $('#todo').find('form').on('submit', addTodoItem );
  $('#todo').find('ul').on('click', 'li', toggleToDoStatus );

  function addTodoItem(e) {
    e.preventDefault();
    let $input = $(this).find('input');
    $('#todo').find('ul').append(`<li>${$input.val()}</li>`);
    $input.val('');
  }

  function toggleToDoStatus() {
    $(this).toggleClass('complete');
  }


  $("#add").on('click', incrementCounter);
  $("#subtract").on('click', decrementCounter);

  function incrementCounter() { count++; updateCounter(); }
  function decrementCounter() { count--; updateCounter(); }
  function updateCounter() {
    $('#count').text(count);
    $("#count").removeClass('positive');
    $("#count").removeClass('negative');
    if(count < 0 ) {
      $("#count").addClass('negative');
    }
    if(count > 0 ) {
      $("#count").addClass('positive');
    }
  }


  $('select').on('change', function(){
    console.log( `${$(this).find(':selected').text()} has ${$(this).val()} hair` );
  });

});