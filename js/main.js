//--- 単純なヘッダー固定はCSS記述のみ(sticky) ---

//--- 一定の位置までスクロールしたらヘッダー追従する ---
$(function () {
    var headNav = $("#js_header");
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500 && headNav.hasClass('is-fixed') == false) {
            headNav.css("display", "none");
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


//--- js_02 基本のアコーディオンメニュー ---
// https://gorigoricode.com/jquery-accordion/#i-3
$(function () {
    $('.js-accordion-title').on('click', function () {
        $(this).next().slideToggle();
        $(this).toggleClass('open');
    });
});


//--- js_03 タブ ---
$(function () {
    $('.js-tab-menu').on('click', function () {
        $('.js-tab-menu').removeClass('active');
        $('.js-tab-content').removeClass('active');
        $(this).addClass('active');

        var index = $('.js-tab-menu').index(this);
        $('.js-tab-content').eq(index).addClass('active');
    });
});

//--- js_04 モーダルウィンドウ ---
$(function () {
    $('#openModal').on('click', function () {
        $('#modalArea').toggleClass('is-show');
    });
    $('#closeModal').on('click', function () {
        $('#modalArea').toggleClass('is-show');
    });
    $('#modalBg').on('click', function () {
        $('#modalArea').toggleClass('is-show');
    });
});

//--- js_05 トップに戻るボタン ---
// 最初は見えない
// ある程度スクロールすると出てくる

$(function () {
    var appear = false;
    var pagetop = $('#js-page_top');

    $(window).scroll(function () {
        console.log(scroll);
        if ($(this).scrollTop() > 100) {//100pxスクロールしたら

        }




    });
});

