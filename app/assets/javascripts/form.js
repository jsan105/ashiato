$(function() {   //html読みこんでから下の記述実行 必ず記述する

  
  // 投稿機能ポップアップ表示（完了）
  $(".user-box__action__post").on("click", function(){

    $(".popup-overlay, .popup-content").addClass("active");
  });

  $(".close").on("click", function(){
    $(".popup-overlay, .popup-content").removeClass("active");
});

});