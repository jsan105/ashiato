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
                console.log(html)
    $(".contents").prepend(html);
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
      buildMessage(content)
         //show-contentの親contentsクラス
      $('form')[0].reset(); //入力内容が消える
      $('.content-submit').prop('disabled' , false); //ボタンクラスと同じクラス名を使用
      return false;
    })
    .fail(function(){
      alert('メッセージ送信に失敗しました');
    });
  });
})
  

      //$('.contents').animate({scrolltop: $('.contents')[0].scrollleft}, 'fast');   
