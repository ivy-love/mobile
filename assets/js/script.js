$(document).ready(function () {

    //btn_menu animate
    $(".btn_menu").click(function () {
        $('.aside_container').stop().animate({
            right: '0'
        }, 200, 'easeOutQuart');
    });

    $(".btn_close").click(function () {
        $('.aside_container').stop().animate({
            right: '-100%'
        }, 50, 'easeOutQuart');
    });

    //main_slide swiper
    var swiper = new Swiper('.main_slide', {
        speed: 1500,
        pagination: {
            el: '.main_slide .swiper-pagination',
        },
        parallax: true,
    });

    //prd_list swiper
    var galleryThumbs = new Swiper('.prd_list', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });

    //prd_slide swiper
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

    //collection swiper
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

    // lookbook swiper
    var swiper = new Swiper(".lookbook_wrap", {
        slidesPerView: 1.5,
        spaceBetween: 15,
        slidesOffsetBefore: 15,
        slidesOffsetAfter: 15,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
      });

    //매거진 탭메뉴
    $('.magazine .tab_title').click(function(){
        let idx = $(this).index()+1;

        $('.tab_list').removeClass('active');
        $('#a' + idx).addClass('active');

        $('.tab_title').removeClass('active');
        $(this).addClass('active');
      });

    // qna 메뉴 slideToggle
    const question = $(".question");
    question.click(function(){
        
        const answer = $(this).next(); 
        const title = $(this).children(".title");
        const icon = $(this).children(".icon");
        
        answer.stop().slideToggle(100,function(){
            if(answer.is(':visible')) {
                icon.stop().addClass("active");
                title.stop().addClass("active");
            } else {
                icon.stop().removeClass("active");
                title.stop().removeClass("active");
            };
        });
    });


    //product_item pro slideToggle
    $(".product_list").click(function () {
        // h = $(this).find(".product_content").height();
        h = $(this).find(".product_content")
        autoHeight = h.css({height:'auto',transition:'300'}).height();

        console.log(h)

        if (h.height() === 0) {
            //만약에 높이가 0이면
            h.height(autoHeight).stop().animate({
                height: hh
            }, 300)
        }
    })
    p_title = $(".product_title");
    p_title.click(function(){
        
        const p_cont = $(this).next('.product_content');
    
        p_cont.stop().slideToggle(100);
    });


    //recommand_pro
    var swiper = new Swiper('.recommand_slide', {
        slidesPerView: 2.5,
        spaceBetween: 10,
        freeMode: true,
    });

});