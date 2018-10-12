$(function(){
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        slidesPerView: 4,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

    //新品展示
    $('.content-in').on('mouseover','a',function(){
        $(this).find('.alpha').css('display','block');
    }).on('mouseout','a',function(){
        $(this).find('.alpha').css('display','none');
    });

    //产品中心
    var nameBox = $('.productName');
    var liName = nameBox.find('li');
    var classify = $('.classify');
    var uls = classify.find('ul');
    for(var i = 0; i< liName.length;i++){
        $(liName[i]).attr('index',i);
        nameBox.on('mouseover','li',function(){
            $(this).css('backgroundColor','#976799');
            $(this).siblings().css('backgroundColor','#fff');
            for(var j = 0; j < uls.length;j++){
                $(uls[j]).css('display','none');
            }
            var flag = $(this).attr('index');
            // console.log(flag)
            $(uls[flag]).css('display','block');
            // var introduces = $(uls[flag]).find('li .introduce');
            var lis2 = $(uls[flag]).find('li');
            for(var i = 0; i < lis2.length; i++){
                classify.on('mouseover','li',function(){
                    $(this).siblings().find('.introduce').css('display','none');
                    $(this).find('.introduce').css({'display':'block','color':'#fff'});
                    $(this).find('.picture p').hide();
                    $(this).css('backgroundColor','#fff');
                }).on('mouseout','li',function(){
                    $(this).css('backgroundColor','#e5e5e5');
                    $(this).find('.picture p').show();
                })
            }
        }).on('mouseout','li',function(){
            $(this).css('backgroundColor','#fff');
        })
    }

    //底部
    var links = $('.f2').find('a');
    links.each(function(index,ele){
        $(ele).on('mouseover',function(){
            $(this).find('img').attr('src',$(this).find('img').attr('imgs'));  
        }).on('mouseout',function(){
            $(this).find('img').attr('src',$(this).find('img').attr('srcs'));
        })
    });
    
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

    //留言板
    var isClick = true;
    $('.header-right').click(function(){
        if(isClick){
            $('#myForm').hide();
            $('.header-right').css('background-image','url(http://sgoutong.baidu.com/embed/1537434527/asset/embed/css/pc/message/img/nodeMax.png)');
            isClick = false;
        } else {
            $('#myForm').show();
            $('.header-right').css('background-image','url(http://sgoutong.baidu.com/embed/1537434527/asset/embed/css/pc/message/img/nodeMin.png)');
            isClick = true;
        }
    })
})