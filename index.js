//alert("its working");
$("input").keypress(function(event){
//  $("input").slideUp().slideDown();
$("input").delay(800).fadeOut().delay(800).fadeIn();
  $("h2").slideUp().slideDown().animate({opacity : 0.4 });
  $("h1").fadeOut().delay(600).fadeIn().append(" putul didi");

  var audio=new Audio("birthday.mp3");
  audio.play();
  document.querySelector("img").setAttribute("src","giphy.webp");
//
//  document.querySelector("img").setAttribute("src","bgirl.jfif");
});
