function openNav() {
  document.getElementById("mySidenav").style.width = "550px";
  //document.body.style.marginLeft = "250px";
  }

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  //document.body.style.marginLeft= "0";
  }

function myFunction(id) {
  var x = document.getElementById(id);
    
    x.style.display = "block";
}
function myHideLOD(id) {
  var x = document.getElementById(id);
  
  x.style.display = "none";
}

function light_people() {
  var element = document.getElementsByTagName("tei-persname");
  element.classList.add("highlight");
} 


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

jQuery(document).ready(function($){
  var $timeline_block = $('.cd-timeline-block');

  //hide timeline blocks which are outside the viewport
  $timeline_block.each(function(){
    if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
      $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
    }
  });

  //on scolling, show/animate timeline blocks when enter the viewport
  $(window).on('scroll', function(){
    $timeline_block.each(function(){
      if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
        $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
      }
    });
  });
});

$(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });
