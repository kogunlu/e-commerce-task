var jQueryScript = document.createElement('script');
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);

$(document).ready(function(){
    $("#menu").click(function(){
      if($(window).width() < 1024){
        openNav()
      }else{
        $("#toggler-menu").toggle();
      }
    });
  });

  var delay = 3000;

  //Please uncomment the commented line below to see popup!
jQuery(document).ready(function($){
//setTimeout(function(){ showNewsletterPopup(); }, delay);s
  $('.popup-close').click(function(){
      $('.newsletter-overlay').hide(); 
  });
});

function showNewsletterPopup(){
    $('.newsletter-overlay').show();
}



function openNav() {
  $("#mySidenav").css("width", "250px")
  $("#main").css("margin-left", "250px")

  x = $("#i-1").detach()
  xa = $("#i-1").detach()

  x1 = $("#i-11").detach()
  x1a = $("#i-11").detach()

  y = $("#i-2").detach()
  ya = $("#i-2").detach()

  y1 = $("#i-22").detach()
  y1a = $("#i-22").detach()
 

}

function closeNav() {
  $("#mySidenav").css("width", "0")
  $("#main").css("margin-left", "0")

  $(".for-mobile").prepend(x)
  $(".for-mobile").prepend(x1)
  $(".for-mobile").prepend(y)
  $(".for-mobile").prepend(y1)
}