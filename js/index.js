$(document).ready(function () {

    //햄버거 버튼
    $(".menu").click(function () {
        $('.aside_wrap').stop().animate({
            right: '0'
        }, 450, 'easeOutQuart')
    })

    $(".a_mypage .right").click(function () {
        $('.aside_wrap').stop().animate({
            right: '-100%'
        }, 450, 'easeOutQuart')
    })


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
        y: '100%', //변경될 거
    });

    var scene = new ScrollMagic.Scene({
        triggerElement: ".main_wrap",
        duration: "100%"
    })
        .setTween(tween2)
        .addTo(controller)


    //gnb
    var swiper = new Swiper('.gnb', {
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
        slidesPerView: "auto", //텍스트는 따옴표 쓰기
        spaceBetween: 0,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });

    //제품슬라이드
    var swiper = new Swiper('.prd_slide', {
        thumbs: {
            swiper: galleryThumbs //galleryThumbs 슬라이드와 연결시켜준다
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
    var controller = new ScrollMagic.Controller(); //컨트롤러는 모션 실행하기 위해서 한번만 쓰면 됨

    var tween1 = TweenMax.to('.intro h2', 0.5, {
        left: -800, //완료될 모션, h2를 left-800으로 움직인다, 0.5초 간격으로
    });

    var scene = new ScrollMagic.Scene({
        triggerElement: ".intro", //인트로에 왔을때
        duration: "100%" //100%만큼 움직인다
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

})