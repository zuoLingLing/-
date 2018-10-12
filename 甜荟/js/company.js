$(function(){

    $('.newsBox').on('mouseover','li',function(){
        $(this).find('.news-content p a').css({'color':'#fff','text-decoration':'none'});
        $(this).addClass('actived').siblings().removeClass('actived');
    }).on('mouseout','li',function(){
        $(this).find('.news-content a').css('color','#000');
        $(this).removeClass('actived');
    })
})