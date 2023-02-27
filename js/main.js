//--- 単純なヘッダー固定はCSS記述のみ(sticky) ---

//--- 一定の位置までスクロールしたらヘッダー追従する ---
$(function () {
    var headNav = $("#js_header");
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500 && headNav.hasClass('is-fixed') == false) {
            headNav.css({ "top": '-200px' });
            headNav.addClass("is-fixed");
            headNav.css("display", "block");
            headNav.animate({ "top": 0 }, 800);
        }
        else if ($(this).scrollTop() < 300 && headNav.hasClass('is-fixed') == true) {
            headNav.removeClass('is-fixed');
        }
    });
});

//--- スマホナビの表示・非表示の切り替え（ドロワーメニュー） ---
$(function () {
    const hum = $('#hamburger')
    const nav = $('.sp-nav')
    hum.on('click',function(){
        $(hum).on('click',function(){
            console.log('ハンバーガークリックすると');
            /*toggleClassを利用してsp-navの表示切り替えをする*/
        });
    });
});