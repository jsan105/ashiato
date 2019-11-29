$(function() {   //html読みこんでから下の記述実行 必ず記述する

  //日本地図 
  var areas = [
    {code : 1, name: "北海道", color: "#C0C0C0", hoverColor: "#b3b2ee", prefectures: [1]},
    {code : 2, name: "青森", color: "#C0C0C0", hoverColor: "#98b9ff", prefectures: [2]},
    {code : 3, name: "岩手", color: "#C0C0C0", hoverColor: "#98b9ff", prefectures: [3]},
    {code : 4, name: "宮城", color: "#C0C0C0", hoverColor: "#98b9ff", prefectures: [4]},
    {code : 5, name: "秋田", color: "#C0C0C0", hoverColor: "#98b9ff", prefectures: [5]},
    {code : 6, name: "山形", color: "#C0C0C0", hoverColor: "#98b9ff", prefectures: [6]},
    {code : 7, name: "福島",   color: "#C0C0C0", hoverColor: "#98b9ff", prefectures: [7]},
    {code : 8, name: "茨城",   color: "#C0C0C0", hoverColor: "#b7e5f4", prefectures: [8]},
    {code : 9, name: "栃木",   color: "#C0C0C0", hoverColor: "#b7e5f4", prefectures: [9]},
    {code : 10, name: "群馬",   color: "#C0C0C0", hoverColor: "#b7e5f4", prefectures: [10]},
    {code : 11, name: "埼玉",   color: "#C0C0C0", hoverColor: "#b7e5f4", prefectures: [11]},
    {code : 12, name: "千葉",   color: "#C0C0C0", hoverColor: "#b7e5f4", prefectures: [12]},
    {code : 13, name: "東京",   color: "#C0C0C0", hoverColor: "#b7e5f4", prefectures: [13]},
    {code : 14, name: "神奈川",   color: "#C0C0C0", hoverColor: "#b7e5f4", prefectures: [14]},
    {code : 15, name: "新潟",   color: "#C0C0C0", hoverColor: "#aceebb", prefectures: [15]},
    {code : 16, name: "富山",   color: "#C0C0C0", hoverColor: "#aceebb", prefectures: [16]},
    {code : 17, name: "石川",   color: "#C0C0C0", hoverColor: "#aceebb", prefectures: [17]},
    {code : 18, name: "福井",   color: "#C0C0C0", hoverColor: "#aceebb", prefectures: [18]},
    {code : 19, name: "山梨",   color: "#C0C0C0", hoverColor: "#aceebb", prefectures: [19]},
    {code : 20, name: "長野",   color: "#C0C0C0", hoverColor: "#aceebb", prefectures: [20]},
    {code : 21, name: "岐阜",   color: "#C0C0C0", hoverColor: "#aceebb", prefectures: [21]},
    {code : 22, name: "静岡",   color: "#C0C0C0", hoverColor: "#aceebb", prefectures: [22]},
    {code : 23, name: "愛知",   color: "#C0C0C0", hoverColor: "#aceebb", prefectures: [23]},
    {code : 24, name: "三重",   color: "#C0C0C0", hoverColor: "#fff19c", prefectures: [24]},
    {code : 25, name: "滋賀",   color: "#C0C0C0", hoverColor: "#fff19c", prefectures: [25]},
    {code : 26, name: "京都",   color: "#C0C0C0", hoverColor: "#fff19c", prefectures: [26]},
    {code : 27, name: "大阪",   color: "#C0C0C0", hoverColor: "#fff19c", prefectures: [27]},
    {code : 28, name: "兵庫",   color: "#C0C0C0", hoverColor: "#fff19c", prefectures: [28]},
    {code : 29, name: "奈良",   color: "#C0C0C0", hoverColor: "#fff19c", prefectures: [29]},
    {code : 30, name: "和歌山",   color: "#C0C0C0", hoverColor: "#fff19c", prefectures: [30]},
    {code : 31, name: "鳥取",   color: "#C0C0C0", hoverColor: "#ffe0a3", prefectures: [31]},
    {code : 32, name: "島根",   color: "#C0C0C0", hoverColor: "#ffe0a3", prefectures: [32]},
    {code : 33, name: "岡山",   color: "#C0C0C0", hoverColor: "#ffe0a3", prefectures: [33]},
    {code : 34, name: "広島",   color: "#C0C0C0", hoverColor: "#ffe0a3", prefectures: [34]},
    {code : 35, name: "山口",   color: "#C0C0C0", hoverColor: "#ffe0a3", prefectures: [35]},
    {code : 36, name: "徳島",   color: "#C0C0C0", hoverColor: "#ffbb9c", prefectures: [36]},
    {code : 37, name: "香川",   color: "#C0C0C0", hoverColor: "#ffbb9c", prefectures: [37]},
    {code : 38, name: "愛媛",   color: "#C0C0C0", hoverColor: "#ffbb9c", prefectures: [38]},
    {code : 39, name: "高知",   color: "#C0C0C0", hoverColor: "#ffbb9c", prefectures: [39]},
    {code : 40, name: "福岡",   color: "#C0C0C0", hoverColor: "#ffbdbd", prefectures: [40]},
    {code : 41, name: "佐賀",   color: "#C0C0C0", hoverColor: "#ffbdbd", prefectures: [41]},
    {code : 42, name: "長崎",   color: "#C0C0C0", hoverColor: "#ffbdbd", prefectures: [42]},
    {code : 43, name: "熊本",   color: "#C0C0C0", hoverColor: "#ffbdbd", prefectures: [43]},
    {code : 44, name: "大分",   color: "#C0C0C0", hoverColor: "#ffbdbd", prefectures: [44]},
    {code : 45, name: "宮崎",   color: "#C0C0C0", hoverColor: "#ffbdbd", prefectures: [45]},
    {code : 46, name: "鹿児島",   color: "#C0C0C0", hoverColor: "#ffbdbd", prefectures: [46]},
    {code : 47, name: "沖縄",   color: "#C0C0C0", hoverColor: "#f5c9ff", prefectures: [47]},
    ];
    
    $("#map-container").japanMap({
      width: 600,  //canvasのwidth。別途heightも指定可。
      selection: "prefecture",
      areas: areas,
      backgroundColor : "lightskyblue", //canvasの背景色
      borderLineColor: "#f2fcff",
      borderLineWidth : 0.25,
      lineColor : "#a0a0a0",
      lineWidth: 1,
      drawsBoxLine: true, //canvasを線で囲む場合はtrue
      showsPrefectureName: false,  //エリア名の表示:true 非表示:false
      prefectureNameType: "short",
      movesIslands : true, //南西諸島を左上に移動させるときはtrue、移動させないときはfalse
      fontSize : 11,
      fontShadowColor : "#fff",
  
      //クリックした際、県名表示
      onSelect : function(data){  
          alert(data.name);
      }
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

  function changeColor (content, areas) {
    var prefecture = areas.find(content.visited); //配列内の県名照合 indexof:要素有1 要素無-1 
    return (areas.name == content.visited);

                       //find 検索した関数を取得する
    
    $(prefecture).css({   //対応した県の色変更
      'color':'#FF0000', //グレーから赤へ
    });
  }
  console.log(prefecture)    
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

      changeColor(content, areas)
      
      return false;
    })
    .fail(function(){
      alert('メッセージ送信に失敗しました');
    });
  });







  //うざい広告
  // ポップアップ表示
  $(".footer).on("click", function(){
    $(".popup-overlay, .popup-content").addClass("active");

  });
  // ポップアップ閉じる
  $(".close, .popup-overlay").on("click", function(){
    $(".popup-overlay, .popup-content").removeClass("active");
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
  
  


});

