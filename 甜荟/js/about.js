$(function(){
    //回到顶部
    $(window).scroll(function(){

        if($(window).scrollTop()>200){

            $('.return').fadeIn(400);
        } else {

            $('.return').stop().fadeOut(400);
        }
    });
    $('.return').click(function(){
        $("html,body").animate({scrollTop:"0px"},200);
    });
})