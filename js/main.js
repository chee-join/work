//--- 単純なヘッダー固定はCSS記述のみ(sticky) ---

//--- 一定の位置までスクロールしたらヘッダー追従する ---
$(function () {
    var headNav = $("#js_header");
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500 && headNav.hasClass('is-fixed') == false) {
            headNav.css("display","none");
            headNav.addClass("is-fixed");
            headNav.fadeIn(1000);
        }
        else if ($(this).scrollTop() < 300 && headNav.hasClass('is-fixed') == true) {
            headNav.removeClass('is-fixed');
        }
    });
});

//--- スマホナビの表示・非表示の切り替え（ドロワーメニュー） ---
$(function () {
    const hum = $('#hamburger,.close');
    const nav = $('.sp_nav');
    // console.log(nav);

    hum.on('click', function () {
        // console.log('ハンバーガークリックすると');
        nav.toggleClass('toggle');
    });
});


//--- js_01 ページを開くアコーディオン ---
$(function () {
    $('.js_text').on('click', function (e) {
        $(e.currentTarget).toggleClass('open');
        $(e.currentTarget).next().slideToggle();
    });
});

$('js_text').removeClass('open');
$('js_text').next().hide();