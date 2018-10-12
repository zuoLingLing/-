$(function(){
    //产品中心
    var nameBox = $('.productName');
    var liName = nameBox.find('li');
    var classify = $('.classify');
    var divs = classify.children('div');
    $('.goods0').on('mouseover','li',function(){
        $(this).siblings().find('.introduce').css('display','none');
        $(this).find('.introduce').css({'display':'block','color':'#fff'});
        $(this).find('.picture p').hide();
        $(this).css('backgroundColor','#fff');
    }).on('mouseout','li',function(){
        $(this).find('.picture p').show();
        $(this).css('backgroundColor','#e5e5e5');
    })
    for(var i = 0; i< liName.length;i++){
        $(liName[i]).attr('index',i+1);
        nameBox.on('click','li',function(){
            $(this).css('backgroundColor','#976799');
            $(this).siblings().css('backgroundColor','#fff');
            for(var j = 0; j < divs.length;j++){
                $(divs[j]).css('display','none');
                $('.goods0').css('display','none');
                $('.goods0').siblings().css('display','none');
            }
            var flag = $(this).attr('index');
            // console.log(flag)
            $(divs[flag]).css('display','block');
            $(divs[flag]).siblings('.page').css('display','block');
            // var introduces = $(divs[flag]).find('li .introduce');
            var lis2 = $(divs[flag]).find('li');
            for(var i = 0; i < lis2.length; i++){
                classify.on('mouseover','li',function(){
                    $(this).siblings().find('.introduce').css('display','none');
                    $(this).find('.introduce').css({'display':'block','color':'#fff'});
                    $(this).find('.picture p').hide();
                    $(this).css('backgroundColor','#fff');
                }).on('mouseout','li',function(){
                    $(this).css('backgroundColor','#e5e5e5');
                    $(this).find('.picture p').show();
                    $(this).find('.introduce').css({'display':'none'});
                });
            }
        })
    }

    //分页
})