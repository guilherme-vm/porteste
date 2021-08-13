console.log("hellooo world");

// open Menu for Mobile
$("#slideMenuOpen").on("click", function(){
    console.log("open");
    $(".mobileMenu")
        .addClass("mobileMenuSlideAnimationIn")
        .removeClass("mobileMenuSlideAnimationOut");
})


// close Menu for Mobile
$("#slideMenuClose").on("click", function(){
    $(".mobileMenu")
        .css("display", "block")
        .addClass("mobileMenuSlideAnimationOut")
        .removeClass("mobileMenuSlideAnimationIn");
        
})





//          ANIMAÇOES PARA IPAD

 if ($(window).width() >= 1000 
     && $(window).width() <= 1100
     && $(window).height() >= 1300
     && $(window).height() <= 1400){ 
     console.log("works");
// ACADEMICS homepage
$(window).scroll(function(){
   if ($(window).scrollTop() <= 399 && $("#academics").hasClass('academicsAnimIn')) {  
      $("#academics")
          .removeClass('academicsAnimIn')
          .addClass('academicsAnimOut');
              $("#academicsOption")
          .removeClass('optionSelected')
          .addClass('optionUnselected');
       $(".clickMenu").css('opacity', '0');
   }
});

//entra animaçao ACADEMICS
$(window).scroll(function(){
   if ($(window).scrollTop() >= 400 && $(window).scrollTop() <= 2299) {  
      $("#academics")
          .removeClass('academicsAnimOut')
          .addClass('academicsAnimIn');
       $("#academicsOption")
          .removeClass('optionUnselected')
          .addClass('optionSelected');
       $(".clickMenu").css('opacity', '1');
   }
});

//sai animaçao ACADEMICS
$(window).scroll(function(){
   if ($(window).scrollTop() >= 2299) {  
      $("#academics")
          .removeClass('academicsAnimIn')
          .addClass('academicsAnimOut');
       $("#academicsOption")
          .removeClass('optionSelected')
          .addClass('optionUnselected');
   }
});

//INDEPENDENT homepage
$(window).scroll(function(){
   if ($(window).scrollTop() <= 2299 && $("#independentCourse").hasClass('independentAnimIn')) {  
      $("#independentCourse")
          .removeClass('independentAnimIn')
          .addClass('independentAnimOut');
       $("#independantOption")
          .removeClass('optionSelected')
          .addClass('optionUnselected');
   }
});

//entra animaçao INDEPENDENT
$(window).scroll(function(){
   if ($(window).scrollTop() >= 2300 && $(window).scrollTop() <= 3399) {  
      $("#independentCourse")
          .addClass('independentAnimIn')
          .removeClass('independentAnimOut'); 
       $("#independantOption")
          .removeClass('optionUnselected')
          .addClass('optionSelected');
   }
});

//SAI animaçao INDEPENDENT
$(window).scroll(function(){
   if ($(window).scrollTop() >= 3400) {  
      $("#independentCourse")
          .removeClass('independentAnimIn')
          .addClass('independentAnimOut');     
       $("#independantOption")
          .removeClass('optionSelected')
          .addClass('optionUnselected');
   }
});

//LANGUAGE homepage
$(window).scroll(function(){
   if ($(window).scrollTop() <= 3400 && $("#languageCourse").hasClass('languageAnimIn')) {  
      $("#languageCourse")
          .removeClass('languageAnimIn')
          .addClass('languageAnimOut');
       $("#languageSkillsOption")
          .removeClass('optionSelected')
          .addClass('optionUnselected');
   }
});

//entra animaçao LANGUAGE
$(window).scroll(function(){
   if ($(window).scrollTop() >= 3401 && $(window).scrollTop() <= 4600) {  
      $("#languageCourse")
          .addClass('languageAnimIn')
          .removeClass('languageAnimOut'); 
       $("#languageSkillsOption")
          .removeClass('optionUnselected')
          .addClass('optionSelected');
   }
});

//SAI animaçao LANGUAGE
$(window).scroll(function(){
   if ($(window).scrollTop() >= 4601) {  
      $("#languageCourse")
          .removeClass('languageAnimIn')
          .addClass('languageAnimOut'); 
       $("#languageSkillsOption")
          .removeClass('optionSelected')
          .addClass('optionUnselected');
   }
});




//LANGUAGE homepage
$(window).scroll(function(){
   if ($(window).scrollTop() <= 4601 && $("#programs").hasClass('programsAnimIn')) {  
      $("#programs")
          .removeClass('programsAnimIn')
          .addClass('programsAnimOut');
       $("#programSkillsOption")
          .removeClass('optionSelected')
          .addClass('optionUnselected');
   }
});

//entra animaçao LANGUAGE
$(window).scroll(function(){
   if ($(window).scrollTop() >= 4602) {  
      $("#programs")
          .addClass('programsAnimIn')
          .removeClass('programsAnimOut'); 
       $("#programSkillsOption")
          .removeClass('optionUnselected')
          .addClass('optionSelected');
   }
});
 
 }


 if ($(window).width() >= 1000 && $(window).width() <= 2000){

    //          ANIMAÇOES PARA MAC NORMAL SCREEN

    
// ACADEMICS homepage
$(window).scroll(function(){
   if ($(window).scrollTop() <= 399 && $("#academics").hasClass('academicsAnimIn')) {  
      $("#academics")
          .removeClass('academicsAnimIn')
          .addClass('academicsAnimOut');
              $("#academicsOption")
          .removeClass('optionSelected')
          .addClass('optionUnselected');
       $(".clickMenu").css('opacity', '0');
   }
});

//entra animaçao ACADEMICS
$(window).scroll(function(){
   if ($(window).scrollTop() >= 400 && $(window).scrollTop() <= 1400) {  
      $("#academics")
          .removeClass('academicsAnimOut')
          .addClass('academicsAnimIn');
       $("#academicsOption")
          .removeClass('optionUnselected')
          .addClass('optionSelected');
       $(".clickMenu").css('opacity', '1');
   }
});

//sai animaçao ACADEMICS
$(window).scroll(function(){
   if ($(window).scrollTop() >= 1401) {  
      $("#academics")
          .removeClass('academicsAnimIn')
          .addClass('academicsAnimOut');
       $("#academicsOption")
          .removeClass('optionSelected')
          .addClass('optionUnselected');
   }
});

//INDEPENDENT homepage
$(window).scroll(function(){
   if ($(window).scrollTop() <= 1401 && $("#independentCourse").hasClass('independentAnimIn')) {  
      $("#independentCourse")
          .removeClass('independentAnimIn')
          .addClass('independentAnimOut');
       $("#independantOption")
          .removeClass('optionSelected')
          .addClass('optionUnselected');
   }
});

//entra animaçao INDEPENDENT
$(window).scroll(function(){
   if ($(window).scrollTop() >= 1402 && $(window).scrollTop() <= 2600) {  
      $("#independentCourse")
          .addClass('independentAnimIn')
          .removeClass('independentAnimOut'); 
       $("#independantOption")
          .removeClass('optionUnselected')
          .addClass('optionSelected');
   }
});

//SAI animaçao INDEPENDENT
$(window).scroll(function(){
   if ($(window).scrollTop() >= 2601) {  
      $("#independentCourse")
          .removeClass('independentAnimIn')
          .addClass('independentAnimOut');     
       $("#independantOption")
          .removeClass('optionSelected')
          .addClass('optionUnselected');
   }
});

//LANGUAGE homepage
$(window).scroll(function(){
   if ($(window).scrollTop() <= 2601 && $("#languageCourse").hasClass('languageAnimIn')) {  
      $("#languageCourse")
          .removeClass('languageAnimIn')
          .addClass('languageAnimOut');
       $("#languageSkillsOption")
          .removeClass('optionSelected')
          .addClass('optionUnselected');
   }
});

//entra animaçao LANGUAGE
$(window).scroll(function(){
   if ($(window).scrollTop() >= 2602 && $(window).scrollTop() <= 3700) {  
      $("#languageCourse")
          .addClass('languageAnimIn')
          .removeClass('languageAnimOut'); 
       $("#languageSkillsOption")
          .removeClass('optionUnselected')
          .addClass('optionSelected');
   }
});

//SAI animaçao LANGUAGE
$(window).scroll(function(){
   if ($(window).scrollTop() >= 3701) {  
      $("#languageCourse")
          .removeClass('languageAnimIn')
          .addClass('languageAnimOut'); 
       $("#languageSkillsOption")
          .removeClass('optionSelected')
          .addClass('optionUnselected');
   }
});




//LANGUAGE homepage
$(window).scroll(function(){
   if ($(window).scrollTop() <= 3701 && $("#programs").hasClass('programsAnimIn')) {  
      $("#programs")
          .removeClass('programsAnimIn')
          .addClass('programsAnimOut');
       $("#programSkillsOption")
          .removeClass('optionSelected')
          .addClass('optionUnselected');
   }
});

//entra animaçao LANGUAGE
$(window).scroll(function(){
   if ($(window).scrollTop() >= 3702) {  
      $("#programs")
          .addClass('programsAnimIn')
          .removeClass('programsAnimOut'); 
       $("#programSkillsOption")
          .removeClass('optionUnselected')
          .addClass('optionSelected');
   }
});
    
    }

 if ($(window).width() >= 2001){

    //          ANIMAÇOES PARA BIG SCREENS

    
// ACADEMICS homepage
$(window).scroll(function(){
   if ($(window).scrollTop() <= 399 && $("#academics").hasClass('academicsAnimIn')) {  
      $("#academics")
          .removeClass('academicsAnimIn')
          .addClass('academicsAnimOut');
              $("#academicsOption")
          .removeClass('optionSelected')
          .addClass('optionUnselected');
       $(".clickMenu").css('opacity', '0');
   }
});

//entra animaçao ACADEMICS
$(window).scroll(function(){
   if ($(window).scrollTop() >= 400 && $(window).scrollTop() <= 3000) {  
      $("#academics")
          .removeClass('academicsAnimOut')
          .addClass('academicsAnimIn');
       $("#academicsOption")
          .removeClass('optionUnselected')
          .addClass('optionSelected');
       $(".clickMenu").css('opacity', '1');
   }
});

//sai animaçao ACADEMICS
$(window).scroll(function(){
   if ($(window).scrollTop() >= 3001) {  
      $("#academics")
          .removeClass('academicsAnimIn')
          .addClass('academicsAnimOut');
       $("#academicsOption")
          .removeClass('optionSelected')
          .addClass('optionUnselected');
   }
});

//INDEPENDENT homepage
$(window).scroll(function(){
   if ($(window).scrollTop() <= 3001 && $("#independentCourse").hasClass('independentAnimIn')) {  
      $("#independentCourse")
          .removeClass('independentAnimIn')
          .addClass('independentAnimOut');
       $("#independantOption")
          .removeClass('optionSelected')
          .addClass('optionUnselected');
   }
});

//entra animaçao INDEPENDENT
$(window).scroll(function(){
   if ($(window).scrollTop() >= 3002 && $(window).scrollTop() <= 4600) {  
      $("#independentCourse")
          .addClass('independentAnimIn')
          .removeClass('independentAnimOut'); 
       $("#independantOption")
          .removeClass('optionUnselected')
          .addClass('optionSelected');
   }
});

//SAI animaçao INDEPENDENT
$(window).scroll(function(){
   if ($(window).scrollTop() >= 4601) {  
      $("#independentCourse")
          .removeClass('independentAnimIn')
          .addClass('independentAnimOut');     
       $("#independantOption")
          .removeClass('optionSelected')
          .addClass('optionUnselected');
   }
});

//LANGUAGE homepage
$(window).scroll(function(){
   if ($(window).scrollTop() <= 4601 && $("#languageCourse").hasClass('languageAnimIn')) {  
      $("#languageCourse")
          .removeClass('languageAnimIn')
          .addClass('languageAnimOut');
       $("#languageSkillsOption")
          .removeClass('optionSelected')
          .addClass('optionUnselected');
   }
});

//entra animaçao LANGUAGE
$(window).scroll(function(){
   if ($(window).scrollTop() >= 4602 && $(window).scrollTop() <= 6200) {  
      $("#languageCourse")
          .addClass('languageAnimIn')
          .removeClass('languageAnimOut'); 
       $("#languageSkillsOption")
          .removeClass('optionUnselected')
          .addClass('optionSelected');
   }
});

//SAI animaçao LANGUAGE
$(window).scroll(function(){
   if ($(window).scrollTop() >= 6201) {  
      $("#languageCourse")
          .removeClass('languageAnimIn')
          .addClass('languageAnimOut'); 
       $("#languageSkillsOption")
          .removeClass('optionSelected')
          .addClass('optionUnselected');
   }
});




//LANGUAGE homepage
$(window).scroll(function(){
   if ($(window).scrollTop() <= 6201 && $("#programs").hasClass('programsAnimIn')) {  
      $("#programs")
          .removeClass('programsAnimIn')
          .addClass('programsAnimOut');
       $("#programSkillsOption")
          .removeClass('optionSelected')
          .addClass('optionUnselected');
   }
});

//entra animaçao LANGUAGE
$(window).scroll(function(){
   if ($(window).scrollTop() >= 6202) {  
      $("#programs")
          .addClass('programsAnimIn')
          .removeClass('programsAnimOut'); 
       $("#programSkillsOption")
          .removeClass('optionUnselected')
          .addClass('optionSelected');
   }
});
    
    }


$("#academicsOption").mouseenter(function(){
 $("#showAcademicText").css('opacity', '1');
})

$("#academicsOption").mouseleave(function(){
 $("#showAcademicText").css('opacity', '0');
})

$("#independantOption").mouseenter(function(){
 $("#showIndependantText").css('opacity', '1');
})

$("#independantOption").mouseleave(function(){
 $("#showIndependantText").css('opacity', '0');
})

$("#languageSkillsOption").mouseenter(function(){
 $("#showLanguageText").css('opacity', '1');
})

$("#languageSkillsOption").mouseleave(function(){
 $("#showLanguageText").css('opacity', '0');
})

$("#programSkillsOption").mouseenter(function(){
 $("#showSoftwareText").css('opacity', '1');
})

$("#programSkillsOption").mouseleave(function(){
 $("#showSoftwareText").css('opacity', '0');
})






$(document).ready(function(){
//    $(".title").css("opacity", "1");
//     $(".title").css("transform", "translateY(-20px)");
    $(".title, .backArrow, .menuIcon").addClass("titleAnim");
});


if ($(window).width() <= 500){ 
//        $("#independent").css("transform", "scale(1)");
        $("#dataHyphen").html("09/2016 07/2017");
        $("#dataErasmus").html("09/2019 01/2020");
        $("#dataInternship").html("02/2021 06/2021");
        $("#esam").html("High School Viseu");
        $("#esam").css("display", "block");
        $("#studentsC").html("Multimedia Dept. Coordinator");
        $("#instituicaoFBAUP").html("Faculty of Fine Arts University of Porto");
        $("#pcsHTML").html("Platypus<br>Creative    Solutions")
        $("#pcsHTML").css("line-height", "20px");
        $(".points").html("Focus on Web Design, Branding<br>and Video")
        $("#cinameMeet").html("Scholar Video Festival");
        $("#açao03HTML").html("AÇÃO03!");
     $("#pintarHTML").html("“Pintar Viseu - Encantos e Recantos”<br>Honorable Mention!");
        $("#soloHTML").html("Solo Exhibition<br>Sementeira, Viseu, Portugal!");
    $("#indecisaoHTML").html("Indecisão<br>Solo Exhibition")
   }








//if ($(".select-items").hasClass("DarkMode") === true) {
//    $(this).attr(
//      "src",
//      "https://cdn.glitch.com/3b78a30b-b6d9-49a8-9ccc-c3cff4a45fa5%2FMuteBranco-03.png?v=1610500674464"
//    );
//  }