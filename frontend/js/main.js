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
    $('.imgz').click(function() {
        $('body').append('<div id="popup" class="wh1 t0 b0 l0 r0 pf relative" style="background: rgba(0, 0, 0, 0.5); opacity: 0; visibility: hidden;"></div>');
        $('#popup').css({ "opacity": "1", "visibility": "visible" });
        var image = $(this).html();
        $('#popup').append('<div class="container pa wh512 tac pa25" style="top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%); width:70%; height:100%;">' + image + '</div>');
        $('#popup img').css({
            "position": "absolute",
            "top": "50%",
            "left": "50%",
            "transform": "translateX(-50%) translateY(-50%)",
            "max-width": "100%",
            "max-height": "100%",
        }).removeClass('w1')
    })
    $(document).mouseup(function(e) {
        var container = $("img");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            console.log(456);
            $('#popup').remove();
        } else {
            console.log(123);

        }
    });
    $('.dangnhap').click(function(e) {
        $("body").append(`
        <div id="boxdangnhap" class="pf t0 b0 l0 r0 z99 bg-c44">
        <div class="container pa15 df fdc jcsc h1v">
            <div class="bg-c2 mla mra col-md-5 col-sm-6">
                <div id="subdangnhap" class=" pa35 pb50 pt25">
                    <h1 class="fs14 ahc1 c-c1 mb10 tac mb25">Đăng nhập</h1>
                    <form class="">
                        <input class="pa7 w1 mb25 fs1" type="text" placeholder="Tên đăng nhập">
                        <input class="pa7 w1 mb25 fs1" type="text" placeholder="Mật khẩu">
                        <div class="row c-c5 mb25">
                            <div class="col-xs-6 tac">
                                <a href="" class="ahc1">
                                    <p>Đăng ký</p>
                                </a>
                            </div>
                            <div class="col-xs-6 tac">
                                <a href="" class="ahc1">
                                    <p>Quên mật khẩu</p>
                                </a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-6">
                            </div>
                            <div class="col-xs-6">
                                <button class="pa10 bg-c1 bcb1 fr btn fs1"><b>Đăng nhập</b></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `);
    })
    $(document).mouseup(function(e) {
        var container = $("#subdangnhap");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('#boxdangnhap').remove();
        }
    });
    var sea = 1;
    $('.search-button').click(function() {
            if (sea == 1) {
                $('.navbar ').prepend(`
            <div class="search-bar pa t1 l0 w1 bg-c2">
                <form class="df w-center fdrr flc pa15 container" action="">
                    <div class="mla mra df w1">
                        <input class="h40 w1 bra3 fs1" placeholder="Tìm kiếm" type="text" name="" id="">
                        <button class="ptb10 plr15 bra3 bg-c1 btn bn"><i class='fas fa-search fs14'></i></button>
                    </div>
                </form>
            </div>
        `)
                sea = 2;
            } else {
                $('.search-bar').remove();
                sea = 1;
            }

        })
        // $(document).mouseup(function(e) {
        //     var container = $(".search-bar");
        //     if (!container.is(e.target) && container.has(e.target).length === 0) {
        //         $('.search-bar').remove();
        //     }
        // });
});

// search bar
// $(document).on("click", ".search-button", function() {
//         var dsb = $('.search-bar').css('display');
//         if (dsb == 'none') {
//             $('.search-bar').css('display', 'block')
//         } else {
//             $('.search-bar').css('display', 'none')
//         }
//     })
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