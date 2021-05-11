var htmlTitle  = document.title;
var htmlScrollHeight = document.scrollHeight;
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

$(document).on('scroll', function(){
  if ( $(window).scrollTop() > 500) {
      $('#container-header').addClass('change-color');
  } else {
      $('#container-header').removeClass('change-color');
  }
});


moveTitle();