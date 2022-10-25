$(document).ready(function(){
    $('#menu>ul>li>a').click(function(){
        if($(this).parents('li').hasClass('active')){
            $('#menu>ul>li').removeClass('active');
            if(!$('.admin-wrapper').hasClass('m') || $(window).width()<992){
                $('#menu>ul>li>ul').slideUp();
            }
        }
        else{
            $('#menu>ul>li').removeClass('active');
            if(!$('.admin-wrapper').hasClass('m') || $(window).width()<992){
                $('#menu>ul>li>ul').slideUp();
            }
            $(this).parents('li').addClass('active');
            if(!$('.admin-wrapper').hasClass('m') || $(window).width()<992){
                $('#menu>ul>li.active>ul').slideDown();
            }
        }
    });
    $('#touch-menu').click(function(){
        if($('.admin-wrapper').hasClass('m')){
            $('.admin-wrapper').removeClass('m');
            $('#menu>ul>li>ul').hide();
            $('#menu>ul>li.active>ul').show();
        }
        else{
            $('.admin-wrapper').addClass('m');
        }
    })
    $('.header .admin-wrapper .right, .admin-wrapper #content').click(function(){
        if($(window).width()>992){
            if($(this).parents('.admin-wrapper').hasClass('m')){
                $('#menu>ul>li').removeClass('active');
            }
        }
    });
    $('.overlayer').click(function(){
        $('.admin-wrapper').removeClass('m');
    });
    $( ".date-inp input" ).datepicker();
    $('.drop-select>span').click(function(){
        $(this).siblings('ul').slideToggle();
    });
    if($(window).width() < 481){
        $('.category-group-list .tit').click(function(){
            $(this).siblings('ul').slideToggle();
        });
    }
});