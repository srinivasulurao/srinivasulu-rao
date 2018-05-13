
//For bootstrap properties add a form-control class
$("input[type='email'], input[type='text'], textarea, input[type='password'], select, input[type='password'], input[type='file']").each(function( index ) {
	
    $( this ).addClass('form-control');
});

$('.button').each(function(index){
	$(this).addClass('btn').addClass('btn-info'); 
});

$("nav ol").addClass("breadcrumb");

//Add dropdown class to the submenu

$('nav > ul >li').each(function(index){
	$(this).addClass('dropdown'); 
});

$('nav > ul >li > ul').each(function(index){
	$(this).addClass('dropdown-menu');  
});

$(window).scroll(function(){
	var offset=$(document).scrollTop();
	if(offset==0){
		$('header').removeClass('floating_header');
	}
	else{
		$('header').addClass('floating_header');
	}
});

//JqueryCycle for the widget.
$('.testimonials').cycle({
  fx: 'scrollHorz', 
  sync: false,
  delay: -2000,
  pager:   '.testimonial_pager'
}); 

//Now we have to remove the innertext for the div.
var testimonial_pager_links=document.querySelectorAll('.testimonial_pager a');
for(var i=0;i<testimonial_pager_links.length;i++){ 
    testimonial_pager_links[i].innerText="";
}

//We need to deal with animation.
$(document).ready(function(){
    $(".welcome_banner_intro_text,.x-left,.x-right").hide(0).delay(1000).fadeIn(3000);  
});


//Animation for the projects blocks.
$('.myproject_list .show-more').click(function(){
    var id="flipper_"+$(this).attr('data-id');
    
    $('#'+id+" .card-front").addClass('card-front-active');
    $('#'+id+" .card-back").addClass('card-back-active'); 
});

$('.myproject_list .close-more').click(function(){
    var id="flipper_"+$(this).attr('data-id');
    
    $('#'+id+" .card-front").removeClass('card-front-active');
    $('#'+id+" .card-back").removeClass('card-back-active'); 
});

