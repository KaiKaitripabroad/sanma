$(function () {
  $(".hamburger").click(function () {
    // メニューの開閉状態を切り替える
    $(".menu").toggleClass("open");

    // ハンバーガーボタンのアクティブクラスを切り替えて三本線をバツにする
    $(this).toggleClass("active");
  });

  $(".hero-overlay").on("mouseenter", function () {
    $(this)
      .stop()
      .animate(
        { opacity: 0.8 }, // ※ opacity だけなら animate 可能
        200,
        function () {
          $(this).css(
            "background-image",
            "linear-gradient(to top right,rgb(8, 60, 95), rgba(13, 94, 88, 0.9))"
          );
        }
      );
  });

  $(".hero-overlay").on("mouseleave", function () {
    $(this)
      .stop()
      .animate({ opacity: 1 }, 200, function () {
        $(this).css(
          "background-image",
          "linear-gradient(to top right, rgba(10, 59, 56, 0.8), #0d5e94)"
        );
      });
  });

  $(".card").mouseover(function () {
    $(this)
      .css("transform", "translateY(-10px)")
      .css("box-shadow", "0 4px 8px rgba(0, 0, 0, 0.2)");
  });

  $(".card").mouseout(function () {
    $(this)
      .css("transform", "translateY(0)")
      .css("box-shadow", "0 2px 4px rgba(0, 0, 0, 0.1)");
  });
  $(".hero-button").mouseover(function () {
    $(this).css("background-color", "#0d5e94").css("color", "#fff");
  });
  $(".hero-button").mouseout(function () {
    $(this).css("background-color", "#fff").css("color", "#0d5e94");
  });
});
