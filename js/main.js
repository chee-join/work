//--- ローディング ---
// クラス変更
window.onload = function () {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
}

//safari対策
window.onpageshow = function (event) {
    if (event.persisted) {
        window.location.reload();
    }
};


//--- Cookie同意JavaScript ---


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

        if ($(this).scrollTop() > 100) {//100pxスクロールしたら

            if (appear == false) {
                appear = true;
                pagetop.stop().animate({
                    'bottom': '50px'//下から50pxの位置に
                }, 300);//0.3秒かけて現れる
            }
        } else {
            if (appear) {
                appear = false;
                pagetop.stop().animate({
                    'bottom': '-50px' //下から-50pxの位置に
                }, 300);//0.3秒かけて隠れる
            }
        }
    });
    pagetop.click(function () {
        $('body,html').animate({ scrollTop: 0 }, 500);//0.5秒かけてトップに戻る
        return false
    });
});


//--- js_06 swiperでスライダー ---
const swiper = new Swiper (".swiper", {
    autoplay: true,
    slidesPerView: 1.5,
    spaceBetween: 10,
    loop:true,
    speed:1200,
    centeredSlides: true,
});

$('.js-button-back').click(function () {
    console.log('back');
    swiper.slidePrev();
});

$('.js-button-next').click(function () {
    console.log('next');
    swiper.slideNext();
});

//--- js_07 スクロールアニメーション ---
$(function() {
    $(window).scroll(function(){

        /*.js_07-fadeinクラスがついた要素を１つずつ順番に行う*/
        $('.js_07-fadein').each(function(){

            /*画面左上からHTML要素までの距離*/
            var position = $(this).offset().top;

            /*画面をスクロールした時のスクロール量*/
            var scroll = $(window).scrollTop();

            /*ウィンドウの高さを指定*/
            var windowHeight = $(window).height();


            /*ページの最上部から要素までの距離からウィンドウの高さを超えたとき*/
            if (scroll > position - windowHeight + 200) {
                $(this).addClass('active');
            }
        });
    });
});


//--- スムーススクロール ページ内リンク ---
//ページ内リンクをクリックしたらスクロールさせて移動する
$(function () {
    $('a[href^="#"]').click(function () {
        var adjust = -80; /* ヘッダーの高さ分だけ移動位置を調整するための調整値 */
        var speed = 400;  /* 移動にかける時間（ミリ秒） */
        var href = $(this).attr('href');/* クリックしたリンクのhref属性を取得 */

        console.log(href);

        // リンク先の指定が無い場合はページ最上部への移動とする
        var target = $(href);
        if (href === "#" || href === "") {
            target = $('html');
        }

        // 移動する位置の算出
        var position = target.offset().top + adjust;

        // animateメソッドを利用してスクロールさせながらpositionの位置まで移動する
        $('body,html').animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});
