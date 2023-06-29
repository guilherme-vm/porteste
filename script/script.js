const audio = new Audio("mp3/sound.mp3");

var clicks = 0;

var start = 0;






$(".bubble").on('click', function () {
//    setTimeout(function (){$(this).addClass("hiddenBubbleAnim")}, 500);
//    $(this).addClass("hiddenBubbleAnim");
    
//    setTimeout(function () {
//        $(this).addClass("hiddenBubbleAnim")
//        }, 500)
    
//     $(this).delay(4200).addClass("hiddenBubbleAnim");
    
//    audio.currentTime = 0;
//    audio.play();
    
    
    var snd = new Audio();
   snd.src = "mp3/sound.mp3";
   snd.play();
    
    var _this =  $(this);
    
        setTimeout(function () {
        _this.addClass("hiddenBubbleAnim");
        }, 1500);
    
    $(this).css('pointer-events', 'none');
    clicks += 1;
    console.log(clicks);

    if (clicks == 21) {
        $(".bubbleMenu").css('pointer-events', 'all');
        $(".container").fadeOut();
        clicks = 0;
        setTimeout(function () {
            $(".endScreen").fadeIn();
            $(".bubbleMenu").removeClass("hiddenBubbleAnim");
        }, 600);
    }
})

$("#restartButton").on('click', function () {
    
    var snd = new Audio();
   snd.src = "mp3/sound.mp3";
   snd.play();
    
    $(".bubble").removeClass("hiddenBubbleAnim").css('pointer-events', 'all');
    console.log("teste");
    
    
       setTimeout(function () {
        $(".endScreen").fadeOut();
        $(".bg").fadeIn();
        setTimeout(function () {
       $(".container").fadeIn();
            $(".bubble").removeClass("hiddenBubbleAnim");
            $(".bubble").css('pointer-events', 'auto');
            
            
        }, 500)
    }, 800)
    
});




$("#exitButton").on('click', function () {
    
    var snd = new Audio();
   snd.src = "mp3/sound.mp3";
   snd.play();
    
    setTimeout(function () {
        $(".endScreen").fadeOut();
        $(".bg").fadeOut();
        setTimeout(function () {
            $(".mainPage").fadeIn();
            start = 0;
        }, 500)
    }, 800)

})





//    setTimeout(function(){
//         console.log("teste");
////        $(this).addClass("hiddenBubble");
//        
//    }, 2000);



$(".bubbleMenu").on('click', function () {
    $(this).addClass("hiddenBubbleAnim");
    $(this).css('pointer-events', 'none');

})


$('.mainPage').on("click", function () {
    console.log("teste");
    if (start == 0) {
        start = 1;
        $(".bg").fadeIn();
        $(".mainPage").fadeOut();
        setTimeout(function () {
            $(".container").fadeIn();
            $(".bubble").removeClass("hiddenBubbleAnim");
            $(".bubble").css('pointer-events', 'auto');
        }, 500)
    } else {

    }


})
