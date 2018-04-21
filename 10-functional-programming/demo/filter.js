let nums = [1,2,3,4,5,6,7,8,9];

let odds = nums.filter( val => {
  return val %2;
});

let evens = nums.filter( val => {
  return !(val %2);
});

nums;
evens;
odds;


let articles = [
  {id:1, title:"foo"},
  {id:2, title:"bar"}
]

// Deleting an article. Cool, but impure
let pruned = articles.filter(article => {
  return article.id !== 1;
});
pruned;

// Here's a more functional way of doing this, where we send in the articles list and the ID to delete
let deleteArticle = function(arr, id) {
  return arr.filter(element => {
    return element.id !== id;
  });
};

let prunedFunctionally = deleteArticle(articles,1);
prunedFunctionally


