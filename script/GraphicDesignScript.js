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
        $(".pcs").addClass("projectAnimationSlideInL");       
   }
});

$(window).scroll(function(){
   if ($(window).scrollTop() >= 709){ 
        $(".erasmus").addClass("projectAnimationSlideInL");       
   }
});

$(window).scroll(function(){
   if ($(window).scrollTop() >= 1109){ 
        $(".indecisao").addClass("projectAnimationSlideInL");       
   }
});

$(window).scroll(function(){
   if ($(window).scrollTop() >= 1509){ 
        $(".coroMozart").addClass("projectAnimationSlideInL");       
   }
});
 }


// —————————————— IPHONE 8+ SCREEN SIZE ——————————————

 if ($(window).width() >= 400 && $(window).width() <= 500){ 
      
     
 }




// —————————————— IPHONE X SCREEN SIZE ——————————————

 if ($(window).width() <= 400){ 
     $(".pcs").css("background-image", "url('GraphicDesign/img/Platypus/pcsThumbnailMobileX.jpg')");
      $(".pcs").css("background-size", "101%");
     
     
 }



// —————————————— IPHONE X SCREEN SIZE ——————————————

 if ($(window).width() >= 401 && $(window).width() <= 500){ 
     $(".pcs").css("background-image", "url('GraphicDesign/img/Platypus/pcsThumbnailMobile8.jpg')");
      $(".pcs").css("background-size", "101%");
     
 }




  if ($(window).width() <= 500){ 
        $(".pcs").addClass("projectAnimationSlideInL");
        $(".erasmus").delay(300).queue(function(){
            $(this).addClass("projectAnimationSlideInL");
        }) 
      $(".backArrow").addClass("titleAnim");
      
    $(".erasmus").css("background-image", "url('GraphicDesign/img/Erasmus/erasmusThumbnailMobile.jpg')");
      $(".erasmus").css("background-size", "150%");
   

$(window).scroll(function(){
   if ($(window).scrollTop() >= 180 && $(window).width() <= 500){ 
        $(".indecisao").addClass("projectAnimationSlideInL");       
   }
});

$(window).scroll(function(){
   if ($(window).scrollTop() >= 600 && $(window).width() <= 500){ 
        $(".coroMozart").addClass("projectAnimationSlideInL");       
   }
})};





if ($(window).width() > 500 && $(window).width() < 800){ 
    console.log("iphone grand ipad mc");
    $(".pcs").addClass("projectAnimationSlideInL");
        $(".erasmus").delay(300).queue(function(){
            $(this).addClass("projectAnimationSlideInL");
        }) 
      $(".backArrow").addClass("titleAnim");
      
    $(".erasmus").css("background-image", "url('GraphicDesign/img/Erasmus/erasmusThumbnailMobile.jpg')");
      $(".erasmus").css("background-size", "150%");
   

$(window).scroll(function(){
   if ($(window).scrollTop() >= 300){ 
        $(".indecisao").addClass("projectAnimationSlideInL");       
   }
});

$(window).scroll(function(){
   if ($(window).scrollTop() >= 700){ 
        $(".coroMozart").addClass("projectAnimationSlideInL");       
   }
})
    
}


