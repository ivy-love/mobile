$(function () {
    
    //aos animate
    AOS.init();
    
    
    //쿠폰 close 버튼 동작
    var close = $('.close');
    var header_top = $('.header_top');
    
    close.click(function () {
        header_top.slideUp(150);
    });


    //쿠폰 close 클릭 후 전체 상단에 붙이기
    close.click(function () {
        if ($('.header_bottom').scrollTop(0)) {

            $('body').animate({
                "padding-top": "119px"
            }, 160);
        }
    })
    
    
    //gnb
    $('.gnb > li').hover(function () {
        $('.bg').stop().animate({
            height: 300
        }, 300)
        $(this).find('.sub').stop().animate({
            height: 300
        }, 300)
    }, function () {
        $('.sub').stop().animate({
            height: 0
        }, 300)
        $('.bg').stop().animate({
            height: 0
        }, 300)
    })


    //main slide swiper
    var swiper = new Swiper('.main_slide', {
        loop: true,
        autoplay: 1000,
        pagination: {
            el: '.main_slide .swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.main_slide .swiper-button-next',
            prevEl: '.main_slide .swiper-button-prev',
        },
    });
    
    
    //키즈레시피 swiper
    var swiper = new Swiper('.recipe_slide', {
        pagination: {
            el: '.page',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.arrow .swiper-button-next',
            prevEl: '.arrow .swiper-button-prev',
        },
    });


    //베스트키워드 swiper
    var swiper = new Swiper('.product_slide', {
        slidesPerView: 4,
        spaceBetween: 20,
        pagination: {
            el: '.product_slide .swiper-pagination',
            clickable: true,
        },
    });


    //패밀리사이트 버튼 동작
    $('.fa_btn').click(function () {
        cnt = $('.family_site li').length; //.family_site li 갯수를 구하라
        if ($('.family_site ul').height() == 0) { //.family_site ul 높이가 0과 같을 때
            $('.family_site ul').stop().animate({
                height: cnt * 49
            }, 300) //열려라
        } else { //그렇지 않을 때
            $('.family_site ul').stop().animate({
                height: 0
            }, 300) //닫아라
        }
    })
    
})