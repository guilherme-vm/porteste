// SCRIPT FOR GGWP



console.log("Hello World");
var topofDiv = $(".seeGame").offset().top; //gets offset of header
//var height = $(".seeGame").outerHeight(); //gets height of header
var height = 400; //gets height of header

var topofDiv2 = $(".imageGrid").offset().top; //gets offset of header





$(document).ready(function(){
    $(".title").css("opacity", "1");
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




// —————————————— IMAC SCREEN SIZE ——————————————

 if ($(window).width() >= 2000){ 
     
     $(window).scroll(function(){
   if ($(window).scrollTop() <= (4199) && $("#settingsDisplay").hasClass('settingsAnimacaoSair')) { 
       $(".backChange").css("background-color", "white");
    $("#settingsDisplay").attr("src", "../UiDesign/img/ggWP/screenDisplaySettingsLight.png");
    $("#addGameDisplay").attr("src", "../UiDesign/img/ggWP/screenDisplayAddGameLight.png");
      $("#settingsDisplay")
          .removeClass('settingsAnimacaoSair')
          .addClass('settingsAnimacaoEntrar');
        $("#addGameDisplay")
          .removeClass('settingsAnimacaoSair2')
          .addClass('settingsAnimacaoEntrar2');
   }
});


$(window).scroll(function(){
   if ($(window).scrollTop() >= (4200) && $(window).scrollTop() <= (4600)) {  
        $(".backChange").css("background-color", "#121E20");
        $("#settingsDisplay").attr("src", "../UiDesign/img/ggWP/screenDisplaySettingsDark.png");
        $("#addGameDisplay").attr("src", "../UiDesign/img/ggWP/screenDisplayAddGameDark.png");
        $("#settingsDisplay")
            .removeClass("settingsAnimacaoEntrar")
            .addClass("settingsAnimacaoSair");
        $("#addGameDisplay")
            .removeClass("settingsAnimacaoEntrar2")
            .addClass("settingsAnimacaoSair2");
   }
});


$(window).scroll(function(){
   if ($(window).scrollTop() >= (4601)) {  
    $(".backChange").css("background-color", "white");
    $("#settingsDisplay").attr("src", "../UiDesign/img/ggWP/screenDisplaySettingsLight.png")
    $("#addGameDisplay").attr("src", "../UiDesign/img/ggWP/screenDisplayAddGameLight.png");
        $("#settingsDisplay")
            .removeClass("settingsAnimacaoSair")
            .addClass("settingsAnimacaoEntrar")
        $("#addGameDisplay")
            .removeClass("settingsAnimacaoSair2")
            .addClass("settingsAnimacaoEntrar2")
   }
});
     
     
 }
     
     
     
     



//  ——————————— MAC SCREEN SIZE ————————————-
 if ($(window).width() >= 501 && $(window).width() < 2000){ 
     
$(window).scroll(function(){
   if ($(window).scrollTop() <= (topofDiv + height) && $("#settingsDisplay").hasClass('settingsAnimacaoSair')) { 
       $(".backChange").css("background-color", "white");
    $("#settingsDisplay").attr("src", "../UiDesign/img/ggWP/screenDisplaySettingsLight.png");
    $("#addGameDisplay").attr("src", "../UiDesign/img/ggWP/screenDisplayAddGameLight.png");
      $("#settingsDisplay")
          .removeClass('settingsAnimacaoSair')
          .addClass('settingsAnimacaoEntrar');
        $("#addGameDisplay")
          .removeClass('settingsAnimacaoSair2')
          .addClass('settingsAnimacaoEntrar2');
   }
});


$(window).scroll(function(){
   if ($(window).scrollTop() >= (topofDiv + height) && $(window).scrollTop() <= (topofDiv2)) {  
        $(".backChange").css("background-color", "#121E20");
        $("#settingsDisplay").attr("src", "../UiDesign/img/ggWP/screenDisplaySettingsDark.png");
        $("#addGameDisplay").attr("src", "../UiDesign/img/ggWP/screenDisplayAddGameDark.png");
        $("#settingsDisplay")
            .removeClass("settingsAnimacaoEntrar")
            .addClass("settingsAnimacaoSair");
        $("#addGameDisplay")
            .removeClass("settingsAnimacaoEntrar2")
            .addClass("settingsAnimacaoSair2");
   }
});


$(window).scroll(function(){
   if ($(window).scrollTop() >= (topofDiv2)) {  
    $(".backChange").css("background-color", "white");
    $("#settingsDisplay").attr("src", "../UiDesign/img/ggWP/screenDisplaySettingsLight.png")
    $("#addGameDisplay").attr("src", "../UiDesign/img/ggWP/screenDisplayAddGameLight.png");
        $("#settingsDisplay")
            .removeClass("settingsAnimacaoSair")
            .addClass("settingsAnimacaoEntrar")
        $("#addGameDisplay")
            .removeClass("settingsAnimacaoSair2")
            .addClass("settingsAnimacaoEntrar2")
   }
});

 }








// —————————————— IPHONE X SCREEN SIZE ——————————————

 if ($(window).width() <= 400){ 
     
     $("#fbaupMedia").html("Faculty of Fine Arts<br>University of Porto");
        $("#fbaupMedia").css("font-weight", "600");
     $("#fbaupMedia").css("font-size", "25px")
     
     
     
     
     
     $(window).scroll(function(){
   if ($(window).scrollTop() <= (3900) && $("#settingsDisplay").hasClass('settingsAnimacaoSair')) { 
       $(".backChange").css("background-color", "white");
    $("#settingsDisplay").attr("src", "../UiDesign/img/ggWP/screenDisplaySettingsLight.png");
    $("#addGameDisplay").attr("src", "../UiDesign/img/ggWP/screenDisplayAddGameLight.png");
      $("#settingsDisplay")
          .removeClass('settingsAnimacaoSair')
          .addClass('settingsAnimacaoEntrar');
        $("#addGameDisplay")
          .removeClass('settingsAnimacaoSair2')
          .addClass('settingsAnimacaoEntrar2');
   }
});


$(window).scroll(function(){
   if ($(window).scrollTop() >= (3901) && $(window).scrollTop() <= (4100)) {  
        $(".backChange").css("background-color", "#121E20");
        $("#settingsDisplay").attr("src", "../UiDesign/img/ggWP/screenDisplaySettingsDark.png");
        $("#addGameDisplay").attr("src", "../UiDesign/img/ggWP/screenDisplayAddGameDark.png");
        $("#settingsDisplay")
            .removeClass("settingsAnimacaoEntrar")
            .addClass("settingsAnimacaoSair");
        $("#addGameDisplay")
            .removeClass("settingsAnimacaoEntrar2")
            .addClass("settingsAnimacaoSair2");
   }
});


$(window).scroll(function(){
   if ($(window).scrollTop() >= (4101)) {  
    $(".backChange").css("background-color", "white");
    $("#settingsDisplay").attr("src", "../UiDesign/img/ggWP/screenDisplaySettingsLight.png")
    $("#addGameDisplay").attr("src", "../UiDesign/img/ggWP/screenDisplayAddGameLight.png");
        $("#settingsDisplay")
            .removeClass("settingsAnimacaoSair")
            .addClass("settingsAnimacaoEntrar")
        $("#addGameDisplay")
            .removeClass("settingsAnimacaoSair2")
            .addClass("settingsAnimacaoEntrar2")
   }
});
     
 
 }






// —————————————— IPHONE 8+ SCREEN SIZE ——————————————

 if ($(window).width() >= 400 && $(window).width() <= 500){ 
     
     $("#fbaupMedia").html("Faculty of Fine Arts<br>University of Porto");
        $("#fbaupMedia").css("font-weight", "600");
     $("#fbaupMedia").css("font-size", "25px")
     
     
     
     
     
     $(window).scroll(function(){
   if ($(window).scrollTop() <= (3900) && $("#settingsDisplay").hasClass('settingsAnimacaoSair')) { 
       $(".backChange").css("background-color", "white");
    $("#settingsDisplay").attr("src", "../UiDesign/img/ggWP/screenDisplaySettingsLight.png");
    $("#addGameDisplay").attr("src", "../UiDesign/img/ggWP/screenDisplayAddGameLight.png");
      $("#settingsDisplay")
          .removeClass('settingsAnimacaoSair')
          .addClass('settingsAnimacaoEntrar');
        $("#addGameDisplay")
          .removeClass('settingsAnimacaoSair2')
          .addClass('settingsAnimacaoEntrar2');
   }
});


$(window).scroll(function(){
   if ($(window).scrollTop() >= (3901) && $(window).scrollTop() <= (4100)) {  
        $(".backChange").css("background-color", "#121E20");
        $("#settingsDisplay").attr("src", "../UiDesign/img/ggWP/screenDisplaySettingsDark.png");
        $("#addGameDisplay").attr("src", "../UiDesign/img/ggWP/screenDisplayAddGameDark.png");
        $("#settingsDisplay")
            .removeClass("settingsAnimacaoEntrar")
            .addClass("settingsAnimacaoSair");
        $("#addGameDisplay")
            .removeClass("settingsAnimacaoEntrar2")
            .addClass("settingsAnimacaoSair2");
   }
});


$(window).scroll(function(){
   if ($(window).scrollTop() >= (4101)) {  
    $(".backChange").css("background-color", "white");
    $("#settingsDisplay").attr("src", "../UiDesign/img/ggWP/screenDisplaySettingsLight.png")
    $("#addGameDisplay").attr("src", "../UiDesign/img/ggWP/screenDisplayAddGameLight.png");
        $("#settingsDisplay")
            .removeClass("settingsAnimacaoSair")
            .addClass("settingsAnimacaoEntrar")
        $("#addGameDisplay")
            .removeClass("settingsAnimacaoSair2")
            .addClass("settingsAnimacaoEntrar2")
   }
});
     
 
 }










