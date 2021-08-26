// navbar

var menuitems =document.getElementById("menuitems");
	menuitems.style.maxHeight ="0px";

	function menutoggle() {
		if (menuitems.style.maxHeight =="0px") {
			menuitems.style.maxHeight ="400px";
		}
		else{
			menuitems.style.maxHeight ="0px";
		}
	}

// navbar active	

	$(document).ready(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop()>200) {
	$('.navbar').addClass('active');
		}else {
			$('.navbar').removeClass('active');
		}
	})
	})



// owlCarousel
	   $('.as').owlCarousel({
                  loop:true,
                  margin:10,
                  nav:true,
                  responsive:{
           0:{
            items:1
                },
           600:{
            items:1
                  },
           1000:{
            items:1
                 }
             }
              })