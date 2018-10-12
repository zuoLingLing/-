$(function(){
    var mySwiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        paginationElement: 'li',
        paginationType: 'fraction',
        //pagination : '#swiper-pagination1',
    });

    //底部
    $('footer ul').on('click','li',function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    var isClose = true;
    $('.nav').click(function(){
        if(isClose){
            $('.moreCategory').show(3000);
            $('.container').animate({left:'150px'},100);
            isClose = false;
        } else {
            $('.moreCategory').hide(3000);
            $('.container').animate({left:'0px'},100);;
            isClose = true;
        }
    })
})