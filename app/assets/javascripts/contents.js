$(function() {   //html読みこんでから下の記述実行 必ず記述する


  // 投稿機能ポップアップ表示（完了）
  $(".user-box__action__post").on("click", function(){

    $(".popup-overlay, .popup-content").addClass("active");
  });

  $(".close").on("click", function(){
     $(".popup-overlay, .popup-content").removeClass("active");
  });



  // 非同期通信
  function buildMessage(content){
    var html = `<div class="show-content">
                  <div class="content__visited">
                    ${content.visited}
                  </div>
                  
                  <div class="content__image" >
                    <img src=${content.image}>  
                  </div>
                  <div class="content__text">
                    ${content.text}
                  </div>
                </div> `
    $(".contents").prepend(html); //show-contentの親contentsクラス
    // .prepend 一番前に非同期追加
    // .append 最後に非同期追加
  }

  $('#new_content').on(`submit`, function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr(`action`);

    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(content){
      buildMessage(content) //関数呼び出し
      $('form')[0].reset(); //入力内容が消える
      $('.content-submit').prop('disabled' , false); //ボタンクラスと同じクラス名を使用
      $('.contents').animate({scrollLeft: 0 }, {duration: 4000}); //横スクロール、４秒かけて左端へスクロール
      return false;
    })
    .fail(function(){
      alert('メッセージ送信に失敗しました');
    });
  });

  //うざい広告
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
  
  


});

