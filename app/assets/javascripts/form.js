$(function() {   //html読みこんでから下の記述実行 必ず記述する

  // ポップアップ投稿機能
  $(".user-box__action__post").on("click", function(){
    $(".popup-overlay, .popup-content").addClass("active");
  });


  $(".close .popup-overlay").on("click", function(){
    $(".popup-overlay, .popup-content").removeClass("active");
  });

});