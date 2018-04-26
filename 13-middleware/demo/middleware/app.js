'use strict';

// http://127.0.0.1:8080
// http://127.0.0.1:8080/#foo?id=15&john=bald

page('*', parse);

page('/', renderPhase);
page('/book/edit/:id', authenticate, initSingleBookView);
page('/book/delete/:id', authenticate, initDeleteBookView);

page();

// ?id=15&john=bald&cathy=blonde&zach=tall
// {id:15, john:"bald", cathy:"blonde", zach:"tall"}
function parse(ctx, next) {

  ctx.query = decodeURI(ctx.querystring).split('&').reduce( (obj,value) => {
    let parts = value.split('=');
    obj[parts[0]] = parts[1];
    return obj;
  }, {});

  next();

}

function doSomeMath(ctx, next) {
  let sum = (Math.floor(Math.random()*10) + 1 ) + (Math.floor(Math.random()*10) + 1 );
  $('aside ul').append(`<li>doSomeMath() = ${sum}</li>`);
  if( sum > 1 ) { next(); }
}

function doMoreMath(ctx, next) {
  let product = (Math.floor(Math.random()*10) + 1 ) * (Math.floor(Math.random()*10) + 1 );
  $('aside ul').append(`<li>doMoreMath() = ${product}</li>`);
  if( product > 2 ) { next(); }
}

function showHomePage(ctx, next) {
  console.log('context', ctx.query);
  $('aside ul').append('<li>showHomePage()</li>');
  $('#content').fadeIn();
}