$(function(){
     //底部
     var links = $('.f2').find('a');
     links.each(function(index,ele){
         $(ele).on('mouseover',function(){
             $(this).find('img').attr('src',$(this).find('img').attr('imgs'));  
         }).on('mouseout',function(){
             $(this).find('img').attr('src',$(this).find('img').attr('srcs'));
         })
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