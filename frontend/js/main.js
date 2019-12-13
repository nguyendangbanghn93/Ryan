$(function() {
    $(".switch-menu").click(function() {
        if ($('.menu').css('display') == 'none') {
            $('.menu').addClass("show-menu");
        } else {
            $('.menu').removeClass("show-menu");
        }
    });
    // scroll
    var scroll = $(window).scrollTop();

    $(window).scroll(function() {
        scroll = $(window).scrollTop();
        if (scroll > 29) {
            $(".navbar").addClass("bg-menu");
        } else {
            $(".navbar").removeClass("bg-menu");
        }

    });
    $('.imgzoom').click(function() {
        var image = $(this).html();
        $('#popup').append('<div class="container-fluid  t0 b0 l0 r0 pf bg-c4 z99 df fdc jcsc div-popup  hmxv"><div class="pf c-c2 t0 r0 pt25 pr25 fs12 fwb c-p">Close</div><div class="container tac pa25 df fdc jcsc divpopup hmxv">' + image + '</div></div>');
        // $(".divpopup").children().removeClass('w1').addClass(hmxv);
    })
    $(document).mouseup(function(e) {
        var container = $(".divpopup");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('#popup').empty();
            console.log(456)
        } else {
            console.log(123)
        }
    });

});

// search bar
$(document).on("click", ".search-button", function() {
        var dsb = $('.search-bar').css('display');
        if (dsb == 'none') {
            $('.search-bar').css('display', 'block')
        } else {
            $('.search-bar').css('display', 'none')
        }
    })
    // slide
    // $(".chưaSL").find(".con:eq(0)").addClass("đang");
    // var interv = setInterval(function() {
    //     $(".next").click();
    // }, 6333)
    // $(document).on("click", ".nút", function() {
    //         var x = $(this),
    //             n = x.hasClass("next"),
    //             bố = $(".chưaSL"),
    //             tiếp = n ? $(".đang").next() : $(".đang").prev(),
    //             width = bố.width();
    //         if (!tiếp.length) {
    //             (n ? bố.find(".con").first() : bố.find(".con").last())[n ? "appendTo" : "prependTo"](bố)
    //             bố.scrollLeft((n ? $(".đang").index * 1 - 2 : 1) * width)
    //         }
    //         if (n) {
    //             bố.animate({
    //                 scrollLeft: "+=" + width
    //             })
    //         } else {
    //             bố.animate({
    //                 scrollLeft: "-=" + width
    //             })
    //         }
    //         tiếp.addClass("đang").siblings().removeClass("đang");
    //     })
    // endslide

// slick
$('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});