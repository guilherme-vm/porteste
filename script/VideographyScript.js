console.log("Hello World");



$(document).ready(function(){
//    $(".title").css("opacity", "1");
//     $(".title").css("transform", "translateY(-20px)");
      $(".title").addClass("titleAnim");
      $(".menuIcon").addClass("titleAnim");
});



// open Menu for Mobile
$("#slideMenuOpen").on("click", function(){
    $(".mobileMenu")
        .addClass("mobileMenuSlideAnimationIn")
        .removeClass("mobileMenuSlideAnimationOut");
})


// close Menu for Mobile
$("#slideMenuClose").on("click", function(){
    $(".mobileMenu")
        .addClass("mobileMenuSlideAnimationOut")
        .removeClass("mobileMenuSlideAnimationIn");;
})





 if ($(window).width() > 800){ 
     
$(window).scroll(function(){
   if ($(window).scrollTop() >= 309 && $(window).width() >= 500){ 
        $(".tempusFugit").addClass("projectAnimationSlideInL");       
   }
});

$(window).scroll(function(){
   if ($(window).scrollTop() >= 709 && $(window).width() >= 500){ 
        $(".ice").addClass("projectAnimationSlideInL");       
   }
});

$(window).scroll(function(){
   if ($(window).scrollTop() >= 1109){ 
        $(".sundayStory").addClass("projectAnimationSlideInL");       
   }
});

$(window).scroll(function(){
   if ($(window).scrollTop() >= 1609){ 
        $(".rise").addClass("projectAnimationSlideInL");       
   }
});

$(window).scroll(function(){
   if ($(window).scrollTop() >= 2009){ 
        $(".AVS").addClass("projectAnimationSlideInL");       
   }
});

$(window).scroll(function(){
   if ($(window).scrollTop() >= 2509){ 
        $(".ycstb").addClass("projectAnimationSlideInL");       
   }
});

$(window).scroll(function(){
   if ($(window).scrollTop() >= 3009){ 
        $(".revolution").addClass("projectAnimationSlideInL");       
   }
});

$(window).scroll(function(){
   if ($(window).scrollTop() >= 3409){ 
        $(".riseQ").addClass("projectAnimationSlideInL");       
   }
});
 }


  if ($(window).width() <= 800){ 
        $(".tempusFugit").addClass("projectAnimationSlideInL");
        $(".ice").delay(300).queue(function(){
            $(this).addClass("projectAnimationSlideInL");
        }) 
        $(".backArrow").addClass("titleAnim");
//      $(".footer").css("top", "420vh");
        $(".tags").css("width", "290px");
        $(".rise h2").html("Coro Mozart Rise");
   }


//iPhone 8+
  if ($(window).width() <= 450 && $(window).width() >= 400){ 
        

        $(window).scroll(function(){
            if ($(window).scrollTop() >= 180){ 
        $(".sundayStory").addClass("projectAnimationSlideInL");       
   }
});

        $(window).scroll(function(){
            if ($(window).scrollTop() >= 600){ 
        $(".rise").addClass("projectAnimationSlideInL");       
   }
});

        $(window).scroll(function(){
            if ($(window).scrollTop() >= 1000){ 
        $(".AVS").addClass("projectAnimationSlideInL");       
   }
});

        $(window).scroll(function(){
            if ($(window).scrollTop() >= 1400){ 
        $(".ycstb").addClass("projectAnimationSlideInL");       
   }
});

        $(window).scroll(function(){
            if ($(window).scrollTop() >= 1850){ 
        $(".revolution").addClass("projectAnimationSlideInL");       
   }
});
  
  
        $(window).scroll(function(){
            if ($(window).scrollTop() >= 2150){ 
        $(".riseQ").addClass("projectAnimationSlideInL");       
   }
})};






if ($(window).width() > 500 && $(window).width() < 800){ 
    
   
        $(window).scroll(function(){
            if ($(window).scrollTop() >= 300){ 
        $(".sundayStory").addClass("projectAnimationSlideInL");       
   }
});

        $(window).scroll(function(){
            if ($(window).scrollTop() >= 700){ 
        $(".rise").addClass("projectAnimationSlideInL");       
   }
});

        $(window).scroll(function(){
            if ($(window).scrollTop() >= 1000){ 
        $(".AVS").addClass("projectAnimationSlideInL");       
   }
});

        $(window).scroll(function(){
            if ($(window).scrollTop() >= 1350){ 
        $(".ycstb").addClass("projectAnimationSlideInL");       
   }
});
    
        $(window).scroll(function(){
            if ($(window).scrollTop() >= 1700){ 
        $(".revolution").addClass("projectAnimationSlideInL");       
   }
});
    
        $(window).scroll(function(){
            if ($(window).scrollTop() >= 2000){ 
        $(".riseQ").addClass("projectAnimationSlideInL");       
   }
})};