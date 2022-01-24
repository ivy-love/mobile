$(function () {

    //aos animate
    AOS.init();


    // 마우스 휠 내릴때 header 올리기
    $(window).on('mousewheel', function (e) {
        var wheel = e.originalEvent.wheelDelta;
        if (wheel > 0) {
            $('.header_wrap').removeClass('fix');
        } else {
            $('.header_wrap').addClass('fix');
        }
    });


    //아코디언 메뉴
    $(".m_detail > li > a").on('click', function () {
        $(this).next(".detail").slideToggle(300);
        $(this).children("i").toggleClass('rotate-45');
    });


    //햄버거 버튼
    $(".m_btn").click(function () {
        $('.m_aside_wrap').stop().animate({
            right: '0'
        }, 230)
        $('body').addClass('hidden')
        $('.m_aside_bg').addClass('on')
    })
    $(".close").click(function () {
        $('.m_aside_wrap').stop().animate({
            right: '-100%'
        })
        $('body').removeClass('hidden')
        $('.m_aside_bg').removeClass('on')
        $('.m_aside_wrap').scrollTop(0);
    })


    //aside 스크롤 이동 시 하단 그림자 추가 
    $('.m_aside_wrap').scroll(function () {
        curr = $(this).scrollTop();

        if (curr > 0) {
            $('.m_aside_top').addClass('m_top');
        } else {
            $('.m_aside_top').removeClass('m_top');
        }
    })


    //m_aside 메뉴 슬라이드
    var swiper = new Swiper('.m_aside_menu', {
        slidesPerView: 'auto',
        freeMode: true,
    });


    //pro_swiper 슬라이드
    var swiper = new Swiper('.pro_swiper', {
        slidesPerView: 1.4,
        spaceBetween: 20,
    });


    //event 슬라이드
    var swiper = new Swiper('.event_swiper', {
        slidesPerView: 1.5,
        centeredSlides: true,
    });


    //premium 배경 펼쳐지기
    $(window).scroll(function () {

        sc = $(window).scrollTop()

        if (sc > 1500) {
            $('.pre_left').delay(0).animate({
                'width': '960px',
                'margin-left': '-960px'
            }, 700)
            $('.pre_right').delay(0).animate({
                'width': '960px',
                'margin-left': '0px'
            }, 700)
            $('.pre_txt').delay(300).animate({
                'opacity': '1'
            }, 700)
            $('.premium_slide_wrap').delay(600).animate({
                'opacity': '1'
            }, 700)
        }
    });


    //premium 슬라이드
    var swiper = new Swiper('.premium_slide', {
        delay: 800,
        spaceBetween: 10,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });


    //value_life 슬라이드
    var swiper = new Swiper('.value_slide', {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });
})