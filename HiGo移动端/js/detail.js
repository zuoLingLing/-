$(function(){
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
    });

    var lis = $('.list').children('li');
    var divs = $('.detailPro').children('div');
    for(var i = 0; i < lis.length;i++){
        $(lis[i]).attr('index',i);
        //记录对应页面关闭时
        var isTrue = true;
        $(lis[i]).on('tap',function(){
            var flag = $(this).attr('index');
            $(divs[flag]).siblings().css('display','none');
            if(isTrue){
                $(divs[flag]).slideDown(200);
                isTrue = false;
                $(divs[flag]).find('ul').on('tap','li',function(){
                    $(this).find('span').addClass('actived');
                    $(this).siblings().find('span').removeClass('actived');
                    $(this).find('i').addClass('active');
                    $(this).siblings().find('i').removeClass('active');
                })
            } else {
                $(divs[flag]).slideUp(200);
                isTrue = true;
            }
        })

    };
    $('.customModuleRow').on('tap','.price',function(){
        $('.shoppingLayer').css('display','block');
        $('.parameter').css('display','block');
        $('.parameter .close').on('tap',function(){
            $('.shoppingLayer').css('display','none');
            $('.parameter').css('display','none');
        })
    });

    var m = 1;
    $('.list-in').on('tap',function(){
        m++;
        if(m%2==0){
            $(this).find('i').css('border-color','#f00 transparent #f00');
            $(this).find('i').siblings().css('border-color','#666 transparent #666');
        } else{
            $(this).find('em').css('border-color','#f00 transparent #f00');
            $(this).find('em').siblings().css('border-color','#666 transparent #666');
        }
    })
})