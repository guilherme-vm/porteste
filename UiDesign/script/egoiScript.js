console.log("hellooo world");

if ($(window).width() <= 500){ 
    $("#fbaupMedia").html("Faculty of Fine Arts<br>University of Porto");
        $("#fbaupMedia").css("font-weight", "600");
     $("#fbaupMedia").css("font-size", "25px")
   }



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