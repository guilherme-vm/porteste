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
   if ($(window).scrollTop() >= 309){ 
        $(".e-goi").addClass("projectAnimationSlideInL");       
   }
});

$(window).scroll(function(){
   if ($(window).scrollTop() >= 709){ 
        $(".ggwp").addClass("projectAnimationSlideInL");       
   }
});

$(window).scroll(function(){
   if ($(window).scrollTop() >= 1109){ 
        $(".medove").addClass("projectAnimationSlideInL");       
   }
});
     
$(window).scroll(function(){
   if ($(window).scrollTop() >= 1509){ 
        $(".mudd").addClass("projectAnimationSlideInL");       
   }
});

$(window).scroll(function(){
   if ($(window).scrollTop() >= 2009){ 
        $(".labVideo").addClass("projectAnimationSlideInL");       
   }
});

$(window).scroll(function(){
   if ($(window).scrollTop() >= 2509){ 
        $(".port").addClass("projectAnimationSlideInL");       
   }
});

 }


// —————————————— IPHONE X SCREEN SIZE for thumbnail——————————————

 if ($(window).width() <= 400){ 
        $(".e-goi").css("background-image", "url('img/UiDesign/egoiBackgroundMobileX.jpg')");
        $(".e-goi").css("background-size", "101%");  
     
        $(".ggwp").css("background-image", "url('img/UiDesign/ggwpBackgroundMobileX.jpg')");
        $(".ggwp").css("background-size", "101%");
     
        $(".medove").css("background-image", "url('img/UiDesign/medoveBackgroundMobileX.jpg')");
        $(".medove").css("background-size", "101%");
     
        $(".mudd").css("background-image", "url('img/UiDesign/muddBackgroundX.jpg')");
        $(".mudd").css("background-size", "101%");
     
        $(".labVideo").css("background-image", "url('img/UiDesign/LabBackgroundMobileX.jpg')");
        $(".labVideo").css("background-size", "101%");
     
        $(".port").css("background-image", "url('img/UiDesign/portBackgroundMobileX.jpg')");
        $(".port").css("background-size", "101%");
      
 }



// —————————————— IPHONE 8 SCREEN SIZE for thumbnail——————————————

 if ($(window).width() >= 401 && $(window).width() <= 500){ 
        $(".e-goi").css("background-image", "url('img/UiDesign/egoiBackgroundMobile8.jpg')");
        $(".e-goi").css("background-size", "101%"); 
     
        $(".ggwp").css("background-image", "url('img/UiDesign/ggwpBackgroundMobile8.jpg')");
        $(".ggwp").css("background-size", "101%");
     
        $(".medove").css("background-image", "url('img/UiDesign/medoveBackgroundMobile8.jpg')");
        $(".medove").css("background-size", "101%");
     
        $(".mudd").css("background-image", "url('img/UiDesign/muddBackground8.jpg')");
        $(".mudd").css("background-size", "101%");
     
        $(".labVideo").css("background-image", "url('img/UiDesign/LabBackgroundMobile8.jpg')");
        $(".labVideo").css("background-size", "101%");
      
        $(".port").css("background-image", "url('img/UiDesign/portBackgroundMobile8.jpg')");
        $(".port").css("background-size", "101%");
 }




  if ($(window).width() <= 500){ 
        $(".e-goi").addClass("projectAnimationSlideInL");
        $(".ggwp").delay(300).queue(function(){
            $(this).addClass("projectAnimationSlideInL");
        }) 
        $(".backArrow").addClass("titleAnim");
  
        $(window).scroll(function(){
            if ($(window).scrollTop() >= 180){ 
            $(".medove").addClass("projectAnimationSlideInL");        
            }});
      
        $(window).scroll(function(){
            if ($(window).scrollTop() >= 600){ 
            $(".mudd").addClass("projectAnimationSlideInL");        
            }});

        $(window).scroll(function(){
            if ($(window).scrollTop() >= 1000){ 
                $(".labVideo").addClass("projectAnimationSlideInL");       
                }
        });

        $(window).scroll(function(){
            if ($(window).scrollTop() >= 1450){ 
                $(".port").addClass("projectAnimationSlideInL");       
                }
        });
}


if ($(window).width() > 500 && $(window).width() < 800){ 
        $(".e-goi").addClass("projectAnimationSlideInL");
        $(".ggwp").delay(300).queue(function(){
            $(this).addClass("projectAnimationSlideInL");
        }) 
        $(".backArrow").addClass("titleAnim");
  
        $(window).scroll(function(){
            if ($(window).scrollTop() >= 300){ 
            $(".medove").addClass("projectAnimationSlideInL");   
                
            }});
    
    
        $(window).scroll(function(){
            if ($(window).scrollTop() >= 700){ 
            $(".mudd").addClass("projectAnimationSlideInL");   
                
            }});
    

        $(window).scroll(function(){
            if ($(window).scrollTop() >= 1000){ 
                $(".labVideo").addClass("projectAnimationSlideInL");       
                }
        });

        $(window).scroll(function(){
            if ($(window).scrollTop() >= 1350){ 
                $(".port").addClass("projectAnimationSlideInL");       
                }
        });
}








// —————————————— IMAC SCREEN SIZE ——————————————

 if ($(window).width() >= 2000){ 
    
        $(".e-goi").css("background-size", "101%");  
        $(".ggwp").css("background-size", "101%");
        $(".medove").css("background-size", "101%");
        $(".mudd").css("background-size", "101%");
        $(".labVideo").css("background-size", "101%");
        $(".port").css("background-size", "101%");
 }



