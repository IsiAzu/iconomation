// add icons

$('.playspace').append('<i class="em cracked-egg"></i>'); // break egg
$('.playspace').append('<i class="em droopy-egg"></i>'); // egg drop
$('.playspace').append('<i class="em em-fire"></i>'); // light fire
$('.playspace').append('<i class="em em-egg"></i>'); // fry egg
$('.playspace').append('<i class="em em-stew"></i>'); // serve
$('.playspace').append('<i class="em em-fork_and_knife"></i>'); // ...
$('.playspace').append('<i class="em em-yum"></i>'); // and eat


// set the initial positions

$('.cracked-egg').css({
  top: 50,
  left: 100
});

$('.droopy-egg').css({
  top: 100,
  left: 300
}).hide();

$('.em-fire').css({
  top: 240,
  left: 300
}).hide();

$('.em-egg').css({
  top: 170,
  left: 300
}).hide();

$('.em-stew').css({
  top: 250,
  left: 100
}).hide();

$('.em-fork_and_knife').css({
  top: 200,
  left: 120
}).hide();

$('.em-yum').css({
  top: 200,
  left: 300
}).hide();

//function crack(c, e){
  $('.cracked-egg').fadeIn().animate({
    top: 100,
    left: 300
  }, {
    queue: true,
    step: function(now, fx){
      $(this).css('transform', 'rotate(' + now*2 +'deg)');
    }
  }, 200);

setTimeout(function(){
  $('.droopy-egg').show().animate({top: 160}, 1900).fadeOut();
}, 600);

    $('.cracked-egg').animate({
      top: 50,
      left: 100
    }, {
      step: function(now, fx){
        $(this).css('transform', 'rotate(' + now/2 +'deg)');
      }
    }, 200).fadeOut("fast");

setTimeout(function(){
  $('.em-fire').fadeIn("easeInOutBounce").animate({top: 250}, 1500);
  $('.em-fire').effect("shake");

  setTimeout(function(){
    $('.em-fire').fadeOut();
  }, 2700);

}, 2700);

setTimeout(function(){
  $('.em-egg').fadeIn().animate({top: 230}, 1000);
  $('.em-egg').animate({top: 230}, 1000).effect( "shake");

  setTimeout(function(){
    $('.em-egg').animate({top: 250, left: 100}, 1000).fadeOut();
  }, 2000);
}, 2700);

setTimeout(function(){
  //$('.em-fork_and_knife').fadeIn().animate({top: 250, left: 150}, 600).effect("bounce");
  $('.em-fork_and_knife').fadeIn().animate({top: 250, left: 250}, 600).effect("bounce");
}, 6000);

setTimeout(function(){
  //$('.em-stew').fadeIn().animate({top: 250, left: 130}, 600).effect("bounce");
  $('.em-stew').fadeIn().animate({left: 230}, 600).effect("bounce");
}, 6000);

setTimeout(function (){
  $('.em-yum').fadeIn().animate({top: 250}, 600).effect("shake");
}, 7000);


// play!
//anim('.cracked-egg', '.droopy-egg', '.em-fire',
//    '.em-egg', '.em-fork_and_knife', '.em-stew', '.em-yum');




// after 660ms...

//setTimeout(function() {
//  // ...move the ball
//  $('.fa-futbol-o').animate({
//    left: 0
//  }, 800, 'easeOutQuart');
//}, 660);
