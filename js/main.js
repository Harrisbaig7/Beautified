 jQuery(document).ready(function(){
     
    "use strict";
     $('#slider-carousel').carouFredSel({
         responsive:true,
         width:'100%',
         circular:true,
         scroll:{
                 items:1,
                 duration:500,
                 pauseOnHover:true
             
         },
         auto:true,
         items:
         {
             visible:{
                   min:1,
                   max:1
             },
             height:"variable"
         },
         pagination:{
             container:".sliderpager",
             pageAnchorBuilder:false
         }
         
     });
    $(window).scroll(function(){
       var top = $(window).scrollTop();
        if(top>=60){
          $("header").addClass('secondary'); 
        }
        else 
            if($("header").hasClass('secondary')){
                $("header").removeClass('secondary');  
            }
    });
    
     $('#menu').slicknav({
         label:'',
     })
      $('a').smoothScroll();
     
       $('.animation').each(function(){

		var waypoint = new Waypoint({
		  element: this,
		  handler: function(direction) {
		    var animation = $(this.element).attr('data-animation');
		    $(this.element).css('opacity','1');
		    $(this.element).addClass("animated " + animation);
		  },
		  offset: '75%' 
		})
	});
 });


 