$(document).ready(function () {

    //햄버거 버튼
    $(".menu").click(function () {
        $('.aside_wrap').stop().animate({
            right: '0'
        }, 450, 'easeOutQuart');
    });

    $(".a_mypage .right").click(function () {
        $('.aside_wrap').stop().animate({
            right: '-100%'
        }, 450, 'easeOutQuart');
    });


    //메인슬라이드
    var swiper = new Swiper('.main_slide', {
        speed: 1500,
        pagination: {
            el: '.main_slide .swiper-pagination',
        },
        parallax: true,
    });


    //메인슬라이드 TweenMax
    var tween2 = TweenMax.to('.main_visual img', 0.5, {
        y: '100%',
    });

    var scene = new ScrollMagic.Scene({
        triggerElement: ".main_wrap",
        duration: "100%"
    })
        .setTween(tween2)
        .addTo(controller)


    //gnb
    var swiper = new Swiper('.pro_slide', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        mousewheel: true,
    });


    //제품 메뉴
    var galleryThumbs = new Swiper('.pro_slide', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });

    //제품슬라이드
    var swiper = new Swiper('.prd_slide', {
        thumbs: {
            swiper: galleryThumbs 
        }
    });

    // fav 클릭이벤트
    $('.fav_icon').click(function(){
        $(this).toggleClass("click");

        const count = document.querySelector('.count');
        let number = Number(count.innerText);
        
        //클릭 시 카트 카운트 증가
        if($(this).hasClass('click')) {
            $(this).addClass("count");
            number = number + 1;
            count.innerText = number;
            
        } else if(!$(this).hasClass('click')) {
            number = number - 1;
            count.innerText = number;
        }
    });



    //나이키컬렉션
    var swiper = new Swiper('.collection_slide', {
        pagination: {
            el: '.collection_slide .swiper-pagination',
            type: 'fraction',
        },
        slidesPerView: 1.3,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
    });


    //매직스크롤
    var controller = new ScrollMagic.Controller();

    var tween1 = TweenMax.to('.intro h2', 0.5, {
        left: -800,
    });

    var scene = new ScrollMagic.Scene({
        triggerElement: ".intro",
        duration: "100%"
    })
        .setTween(tween1)
        .addTo(controller)


    //aside 아코디언 메뉴
    $(".pro li").click(function () {
        h = $(this).find(".con_wrap").height();

        if ($(this).find('.pro_con').height() > 0) {
            $(".pro_con").stop().animate({
                height: 0
            }, 300)
        } else {
            $(".pro_con").stop().animate({
                height: 0
            }, 300)
            $(this).find(".pro_con").stop().animate({
                height: h
            }, 300)
        }
    })


    //recommand_pro
    var swiper = new Swiper('.rec_slide', {
        slidesPerView: 2.5,
        spaceBetween: 10,
        freeMode: true,
    });

});