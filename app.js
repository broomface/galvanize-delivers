$(document).ready(function() {




// card action should be the target (with closest),
// card should be the parent for the listener

//utilize the CSS selectors everywhere (#, ., etc.)...
// use this often...


// click event with card action...
//event predef
// set up the closest card to a traversing type variable. this will cut off time/space for future events...



$('.card-action').click(function(event){
  event.preventDefault();
  let nearestCard = $(this).closest('.card');
  let itemChoice = nearestCard.find('.card-title')[0].text;
  let itemPrice = nearestCard.find('.price')[0].text;
console.log(itemPrice);

  $('p').on('click', function() {
    console.log('<p> clicked!');


});


});  // last tag
