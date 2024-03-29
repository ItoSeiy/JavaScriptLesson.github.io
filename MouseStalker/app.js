/* マウスストーカー javascript */
let
cursor = $(".cursor"),
follower = $(".follower"),
cWidth = 8, //カーソルの大きさ
fWidth = 40, //フォロワーの大きさ
delay = 10, //数字を大きくするとフォロワーがより遅れて来る
mouseX = 0, //マウスのX座標
mouseY = 0, //マウスのY座標
posX = 0, //フォロワーのX座標
posY = 0; //フォロワーのX座標

const imagesUrl = ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
                "https://docs.microsoft.com/ja-jp/windows/images/csharp-logo.png",
                "https://wp-doctor.jp/blog/wp-content/uploads/2017/09/javascript.png",
                "https://seeklogo.com/images/E/elixir-logo-CF24E6FA55-seeklogo.com.png"
                ]

//マウス座標を取得
$(document).on("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

//カーソルの遅延アニメーション
//遅延させる
TweenMax.to({}, .001, {
    repeat: -1,
    onRepeat: function() {
    posX += (mouseX - posX) / delay;
    posY += (mouseY - posY) / delay;

    TweenMax.set(follower, {
        css: {
            left: posX - (fWidth / 2),
            top: posY - (fWidth / 2)
        }
    });

    TweenMax.set(cursor, {
        css: {
                left: mouseX - (cWidth / 2),
                top: mouseY - (cWidth / 2)
            }
        });
    }
});

$("a").on({
    "mouseenter": function() {
        cursor.addClass("is-active");
        follower.addClass("is-active");
    },
    "mouseleave": function() {
        cursor.removeClass("is-active");
        follower.removeClass("is-active");
    }
});

$("button").on({
    "mouseenter": function() {
        cursor.addClass("is-active");
        follower.addClass("is-active");
    },
    "mouseleave": function() {
        cursor.removeClass("is-active");
        follower.removeClass("is-active");
    }
});

$("body").on("click", function() {
    follower.attr("src", imagesUrl[Math.floor(Math.random() * imagesUrl.length)]);
});

document.getElementById("btn-a-tag").addEventListener("click",e => {
    if(e.cancelable) {
        // デフォルトのページ読み込みの挙動をキャンセル
        e.preventDefault();
    }
});