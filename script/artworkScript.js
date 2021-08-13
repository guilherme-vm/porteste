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
        .removeClass("mobileMenuSlideAnimationOut")
        .css("opacity", "1");
})


// close Menu for Mobile
$("#slideMenuClose").on("click", function(){
    $(".mobileMenu")
        .addClass("mobileMenuSlideAnimationOut")
        .removeClass("mobileMenuSlideAnimationIn")
        .css("opacity", "0");
})





  if ($(window).width() <= 800){ 
 
        $(".backArrow").addClass("titleAnim");
  };







