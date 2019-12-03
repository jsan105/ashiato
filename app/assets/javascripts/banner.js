$(function() {   //html読みこんでから下の記述実行 必ず記述する
  //うざい広告

  // ポップアップ表示（会員登録表示）
  $(".footer").on("click", function(){
    $(".popup-overlay-banner, .popup-content-banner").addClass("active");

      // ポップアップ表示（会員登録表示）
      $(".footer").on("click", function(){
        $(".popup-overlay-banner__touroku, .popup-content-banner__touroku").addClass("active");
      })
  });


  // ポップアップ閉じる
  $(".close, .popup-overlay-banner").on("click", function(){
    $(".popup-overlay-banner, .popup-content-banner").removeClass("active");
  });
  

  $(window).on('load', function() {
    var posY = 0;
    setInterval(function(){
      if (posY <= -900) {
          posX = 0;
      }
      // 1回の移動距離
      posY -= 1;
      $('.footer').css({position: posY + 'px'});
    }, 100);
  });

  // //カウントダウン
  // var endDate = new Date("00:00:10");
  // var interval = 1000;

  // function conutdownTimer(){
  //   var nowDate = new Date
  //   var period = emdDate - newDate
  //   var aadzero = function(n){return("0" + n).slice(-2);}
  //   var 

});