$(".main_slide_inner").slick({
    autoplaySpeed: 4000,
    speed: 300,
    autoplay: true,
    dots: false,
    arrows: false,
    prevArrow:
        '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow:
        '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa-solid fa-chevron-right"></i></button>'
});
var reviewElements = document.querySelectorAll('.interior_user_review');
var maxChars = 150; // 최대 글자 수

reviewElements.forEach(function (element) {
    if (element.textContent.length > maxChars) {
        var truncatedText = element.textContent.slice(0, maxChars) + '...';
        element.textContent = truncatedText;
    }
});
$(document).ready(function () {
    $('.popular_slide_inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        vertical: true,
        dots: false,
        arrows: false,
    });
});

$(".basic_cate ul li")
    .on("click", function () {
        $(this).addClass("on").siblings().removeClass("on")
        let num = $(this).index();
        $(this)
            .parent()
            .find("li")
            .eq(num)
            .addClass("on")
            .siblings()
            .removeClass("on");
    })

$("ul.community li")
    .on("click", function () {
        $(this).addClass("on").siblings().removeClass("on")
        let num = $(this).index();
        $(this)
            .parent()
            .find("li")
            .eq(num)
            .addClass("on")
            .siblings()
            .removeClass("on");
    })

$(".best_cate ul li")
    .on("click", function () {
        $(this).addClass("on").siblings().removeClass("on")
        let num = $(this).index();
        $(this)
            .parent()
            .find("li")
            .eq(num)
            .addClass("on")
            .siblings()
            .removeClass("on");
})
// 바 슬라이딩 이벤트
$(document).ready(function(){
$('.any').on("click", function(){
$('.depth2').not($(this).next('.depth2')).stop().slideUp(300);
$(this).next('.depth2').stop().slideToggle(300);
$('.any').not(this).removeClass('on');
$(this).toggleClass('on');
});
});
$('ul.depth2 > li')
.on("click", function(){
$(this).addClass("on").siblings().removeClass("on")
})
// 네비게이션 이벤트
$('ul.community li.pet').on("click", function () {
    $('ul.minicate').fadeToggle(150)
})

$('span.chevron_down_2').hover(function () {
    $('ul.rank_full').fadeToggle(300)
})

$(".writing").on("click", function () {
    $('.writing ul').fadeToggle(150)
})
// 바클릭 이벤트
$('.row1 .bar').on("click", function () {
    $('.bar_click').fadeIn(150)
    $('.bar_click').addClass("on")
    $('.darkbg').addClass("on")
    $('.depth1 li').eq(0).find(".depth2").show()
})
$('.return_btn').on("click", function () {
    $('.bar_click').fadeOut(150)
    $('.darkbg').removeClass("on")
    $('.depth2').slideUp()
})


// 휠이벤트
$(document).on('wheel', function (event) {
    if (event.originalEvent.deltaY > 0) {
        $("#nav").removeClass('on');
    } else { 
        $("#nav").addClass('on');
    }
});
$(document).on('wheel', function (event) {
    let scrollHeight = $(document).scrollTop();
    if (scrollHeight === 0) {
        $("#nav").removeClass('on');
    } else {
        event.preventDefault();
    }
});
