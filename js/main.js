var htmlTitle  = document.title;
var speed = 250;
var endChar = "... ";
var pos = 0;
    
function moveTitle()
{
   var htmlTitleLength = htmlTitle.length;
    
  title = htmlTitle.substr(pos,htmlTitleLength) + endChar + htmlTitle.substr(0,pos);
  document.title = title;
  
  pos++;
  if (pos > htmlTitleLength) pos=0;
    window.setTimeout("moveTitle()",speed);
}

//Scroll feature to change background color of sticky header.
$(document).on('scroll', function(){
    if ( $(window).scrollTop() > 80) {
        $('#container-header').addClass('header-background-color');
    } else {
        $('#container-header').removeClass('header-background-color');
    }
});

//Scroll feature to change html title on specifc height
$(document).on('scroll', function(){
  if ( $(window).scrollTop() > 720) {
      $('#container-main').addClass('change-color');
  } else {
      $('#container-main').removeClass('change-color');
  }
});

moveTitle();