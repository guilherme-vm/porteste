console.log("hellow world");


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



/////////   PLATYPUS  ------  SCRIPT /////////

 if ($(window).width() <= 500){ 
     
     $("#fbaupMedia").html("Faculty of Fine Arts<br>University of Porto");
        $("#fbaupMedia").css("font-weight", "600");
     $("#fbaupMedia").css("font-size", "25px")
     $(".abc").css("display", "none");
 }





            //HOVER ----MAIN---- TONES - WHITE
$("#white").mouseenter(function(){
    $("#mainTonesContainer").css('background', '#FFFFFF');
    $("#mainTones").css('opacity', '0');
    $("#mainTonesColorHex")
        .css('opacity', '1')
        .css('color', 'black')
        .html("#FFFFFF");
    $("#pink").css('opacity', '0');
    $("#dark").css('opacity', '0');
    
})
$("#white").mouseleave(function(){
    $("#mainTonesContainer").css('background', 'white');
    $("#mainTones").css('opacity', '1');
    $("#mainTonesColorHex")
        .css('opacity', '0')
        .css('color', 'white')
     $("#pink").css('opacity', '1');
    $("#dark").css('opacity', '1');
})

            //HOVER ----MAIN---- TONES - PINK
$("#pink").mouseenter(function(){
    $("#mainTonesContainer").css('background', '#FF3B65');
    $("#mainTones").css('opacity', '0');
    $("#mainTonesColorHex")
        .css('opacity', '1')
        .html("#FF3B65");
    $("#white").css('opacity', '0');
    $("#dark").css('opacity', '0');
})
$("#pink").mouseleave(function(){
    $("#mainTonesContainer").css('background', 'white');
    $("#mainTones").css('opacity', '1');
    $("#mainTonesColorHex")
        .css('opacity', '0');
     $("#white").css('opacity', '1');
    $("#dark").css('opacity', '1');
})

            //HOVER ----MAIN---- TONES - DARK
$("#dark").mouseenter(function(){
    $("#mainTonesContainer").css('background', '#14263E');
    $("#mainTones").css('opacity', '0');
    $("#mainTonesColorHex")
        .css('opacity', '1')
        .html("#14263E");
     $("#white").css('opacity', '0');
    $("#pink").css('opacity', '0');
})
$("#dark").mouseleave(function(){
    $("#mainTonesContainer").css('background', 'white');
    $("#mainTones").css('opacity', '1');
    $("#mainTonesColorHex")
        .css('opacity', '0')
    $("#white").css('opacity', '1');
    $("#pink").css('opacity', '1');
})

            //HOVER ----WARM1--- TONES 
$("#warm1").mouseenter(function(){
    $("#colorTonesContainer").css('background', '#FFC6D3');
    $("#warmTones").css('opacity', '0');
    $("#warmTonesColorHex")
        .css('opacity', '1')
        .html("#FFC6D3");
    $(".swatch").css('opacity', '0');
    $(this).css('opacity', '1')
})
//HOVER ----WARM2--- TONES 
$("#warm2").mouseenter(function(){
    $("#colorTonesContainer").css('background', '#FF86A0');
    $("#warmTones").css('opacity', '0');
    $("#warmTonesColorHex")
        .css('opacity', '1')
        .html("#FF86A0");
    $(".swatch").css('opacity', '0');
    $(this).css('opacity', '1')
})
   //HOVER ----WARM3--- TONES 
$("#warm3").mouseenter(function(){
    $("#colorTonesContainer").css('background', '#FF3B65');
    $("#warmTones").css('opacity', '0');
    $("#warmTonesColorHex")
        .css('opacity', '1')
        .html("#FF3B65");
    $(".swatch").css('opacity', '0');
    $(this).css('opacity', '1')
})
     //HOVER ----WARM4--- TONES 
$("#warm4").mouseenter(function(){
    $("#colorTonesContainer").css('background', '#FF3BC5');
    $("#warmTones").css('opacity', '0');
    $("#warmTonesColorHex")
        .css('opacity', '1')
        .html("#FF3BC5");
    $(".swatch").css('opacity', '0');
    $(this).css('opacity', '1')
})
     //HOVER ----WARM5--- TONES 
$("#warm5").mouseenter(function(){
    $("#colorTonesContainer").css('background', '#FF733B');
    $("#warmTones").css('opacity', '0');
    $("#warmTonesColorHex")
        .css('opacity', '1')
        .html("#FF733B");
    $(".swatch").css('opacity', '0');
    $(this).css('opacity', '1')
})
      //HOVER ----WARM6--- TONES 
$("#warm6").mouseenter(function(){
    $("#colorTonesContainer").css('background', '#571526');
    $("#warmTones").css('opacity', '0');
    $("#warmTonesColorHex")
        .css('opacity', '1')
        .html("#571526");
    $(".swatch").css('opacity', '0');
    $(this).css('opacity', '1')
  
})

$(".swatch").mouseleave(function(){
    $("#colorTonesContainer").css('background', 'white');
    $("#warmTones").css('opacity', '1');
    $("#warmTonesColorHex")
        .css('opacity', '0');
    $(".swatch").css('opacity', '1');
})


            //HOVER ----COOL1--- TONES 
$("#cool1").mouseenter(function(){
    $("#coolTonesContainer").css('background', '#9e20ee');
    $("#coolTones").css('opacity', '0');
    $("#coolTonesColorHex")
        .css('opacity', '1')
        .html("#9E20EE");
    $(".swatchD").css('opacity', '0');
    $(this).css('opacity', '1')
})


            //HOVER ----COOL2--- TONES 
$("#cool2").mouseenter(function(){
    $("#coolTonesContainer").css('background', '#733bff');
    $("#coolTones").css('opacity', '0');
    $("#coolTonesColorHex")
        .css('opacity', '1')
        .html("#733BFF");
    $(".swatchD").css('opacity', '0');
    $(this).css('opacity', '1')
})

            //HOVER ----COOL3--- TONES 
$("#cool3").mouseenter(function(){
    $("#coolTonesContainer").css('background', '#4169df');
    $("#coolTones").css('opacity', '0');
    $("#coolTonesColorHex")
        .css('opacity', '1')
        .html("#4169DF");
    $(".swatchD").css('opacity', '0');
    $(this).css('opacity', '1')
})

            //HOVER ----COOL4--- TONES 
$("#cool4").mouseenter(function(){
    $("#coolTonesContainer").css('background', '#0c20dc');
    $("#coolTones").css('opacity', '0');
    $("#coolTonesColorHex")
        .css('opacity', '1')
        .html("#0C20DC");
    $(".swatchD").css('opacity', '0');
    $(this).css('opacity', '1')
})

            //HOVER ----COOL5--- TONES 
$("#cool5").mouseenter(function(){
    $("#coolTonesContainer").css('background', '#191970');
    $("#coolTones").css('opacity', '0');
    $("#coolTonesColorHex")
        .css('opacity', '1')
        .html("#191970");
    $(".swatchD").css('opacity', '0');
    $(this).css('opacity', '1')
})

            //HOVER ----COOL6--- TONES 
$("#cool6").mouseenter(function(){
    $("#coolTonesContainer").css('background', '#0e2740');
    $("#coolTones").css('opacity', '0');
    $("#coolTonesColorHex")
        .css('opacity', '1')
        .html("#0E2740");
    $(".swatchD").css('opacity', '0');
    $(this).css('opacity', '1')
})

            //HOVER leave ----COOL6--- TONES 
$(".swatchD").mouseleave(function(){
    $("#coolTonesContainer").css('background', 'white');
    $("#coolTones").css('opacity', '1');
    $("#coolTonesColorHex")
        .css('opacity', '0');
    $(".swatchD").css('opacity', '1');
})



////////////////
let count = 0;
let index = 0;
let currentText = ' GT Walsheim Pro';
let letter = '';


(function type(){
    if(index === 0){
        setTimeout(type,5600);
        index = 0.1;
    } else {
        letter = currentText.slice(0, ++index);
        document.querySelector(".typing").textContent = letter;
        setTimeout(type,200);    
        if(letter.length === currentText.length){
            index = 0;
            opacity:0;
        }
    }
}());



let countDOIS = 0;
let indexDOIS = 0;
let currentTextDOIS = ' Social Media and Text Bodies';
let letterDOIS = '';

(function typeDOIS(){
    if(indexDOIS === 0){
        setTimeout(typeDOIS,5600);
        indexDOIS = 0.1;
    } else {
        letterDOIS = currentTextDOIS.slice(0, ++indexDOIS);
        document.querySelector(".typingDIN").textContent = letterDOIS;
        setTimeout(typeDOIS,200);    
        if(letterDOIS.length === currentTextDOIS.length){
            indexDOIS = 0;
            opacity:0;
        }
    }
}());



//const now = new Date();
//now.setSeconds(now.getSeconds() + 1)
//
//
//setTimeout(function () {
//  console.log('Hello world')
//}, 5000)
//
//setTimeout(() => {
//  console.log('Foo bar')
//}, 1000)


/////////   ERASMUS  ------  SCRIPT /////////

      //HOVER ----MAIN---- TONES - WHITE
$("#white").mouseenter(function(){
    $("#mainTonesContainer").css('background', '#FFFFFF');
    $("#mainTones").css('opacity', '0');
    $("#mainTonesColorHex")
        .css('opacity', '1')
        .css('color', 'black')
        .html("#FFFFFF");
    $("#yellow").css('opacity', '0');
    $("#blue").css('opacity', '0');
    
})
$("#white").mouseleave(function(){
    $("#mainTonesContainer").css('background', 'white');
    $("#mainTones").css('opacity', '1');
    $("#mainTonesColorHex")
        .css('opacity', '0')
        .css('color', 'white')
     $("#yellow").css('opacity', '1');
    $("#blue").css('opacity', '1');
})

            //HOVER ----MAIN---- TONES - PINK
$("#yellow").mouseenter(function(){
    $("#mainTonesContainer").css('background', '#ffcd03');
    $("#mainTones").css('opacity', '0');
    $("#mainTonesColorHex")
        .css('opacity', '1')
        .html("#FFCD03");
    $("#white").css('opacity', '0');
    $("#blue").css('opacity', '0');
})
$("#yellow").mouseleave(function(){
    $("#mainTonesContainer").css('background', 'white');
    $("#mainTones").css('opacity', '1');
    $("#mainTonesColorHex")
        .css('opacity', '0');
     $("#white").css('opacity', '1');
    $("#blue").css('opacity', '1');
})

            //HOVER ----MAIN---- TONES - DARK
$("#blue").mouseenter(function(){
    $("#mainTonesContainer").css('background', '#1B2E49');
    $("#mainTones").css('opacity', '0');
    $("#mainTonesColorHex")
        .css('opacity', '1')
        .html("#1B2E49");
     $("#white").css('opacity', '0');
    $("#yellow").css('opacity', '0');
})
$("#blue").mouseleave(function(){
    $("#mainTonesContainer").css('background', 'white');
    $("#mainTones").css('opacity', '1');
    $("#mainTonesColorHex")
        .css('opacity', '0')
    $("#white").css('opacity', '1');
    $("#yellow").css('opacity', '1');
})



let countLOVELO = 0;
let indexLOVELO = 0;
let currentTextLOVELO = ' LOVELO';
let letterLOVELO = '';


(function typeLOVELO(){
    if(indexLOVELO === 0){
        setTimeout(typeLOVELO,5600);
        indexLOVELO = 0.1;
    } else {
        letterLOVELO = currentTextLOVELO.slice(0, ++indexLOVELO);
        document.querySelector(".typingLOVELO").textContent = letterLOVELO;
        setTimeout(typeLOVELO,200);    
        if(letterLOVELO.length === currentTextLOVELO.length){
            indexLOVELO = 0;
            opacity:0;
        }
    }
}());
