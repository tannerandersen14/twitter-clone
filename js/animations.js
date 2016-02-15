jQuery(document).ready(function() {
  jQuery("time.timeago").timeago();
});

$(document).ready(function() {
  $('#tweet-place').attr('maxlength', 200);
})

$('.tweet-actions').hide();
//Hides char count and tweet button if tweet box doesn't contain anything.
if ($('#tweet-place').val().length === 0) {
  $('#tweet-controls').slideUp();
}
//Doubles size of boxes on click.
$('textarea').on('click', function () {
  $(this).height(41);
});
$('#tweet-place').on('click', function() {
  if ($(this)) {
    $('#tweet-controls').slideDown();
  }
})
 //Returns text boxes to normal after clicking out. Also ensures char count and button still show if the tweet box is occupied.
$('textarea').on('blur', function () {
  var textareaHeight = $('textarea');
  if ($('#tweet-place').val().length === 0) {
    textareaHeight.height(20.5);
    $('#tweet-controls').slideUp();
  }
});



// Char count function.
var maxLength = 140;


$('#tweet-place').keyup(function () {
  var length = $(this).val().length;
  var length = maxLength - length;
  $('#chars').text(length);
  if (length < 11) {
    $('#chars').addClass('red');
  }
  if (length > 10) {
    $('#chars').removeClass('red');
  }
  if (length > -1 && length < 140) {
    $('#tweet-submit').removeAttr('disabled');
  } else {
    $('#tweet-submit').attr('disabled', 'disabled');
  }
})


if (length < 140) {
  $('#tweet-submit').show();
}
//Adds your tweet to the stream.
$('#tweet-submit').click(this, function() {
  if ($('#tweet-place').val().length > 0) {
    $('#stream').prepend('<div class="tweet"><div class="content"><img class="avatar" src="img/alagoon.jpg" /><strong class="fullname">Little Johnny XXXI </strong><span class="username">@theLittlestJohnny</span><p class="tweet-text">' + $('textarea').val());
  }
})

$('.tweet').mouseenter(function() {
  $(this).find('.tweet-actions').slideDown();
})

$('.tweet').mouseleave(function() {
  $(this).find('.tweet-actions').slideUp();
})
$('.stats').hide();
$('.tweet').mouseenter(function() {
  $(this).find('.stats').slideDown();
})
$('.tweet').mouseleave(function() {
  $(this).find('.stats').slideUp();
})
