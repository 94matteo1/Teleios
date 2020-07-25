/*$(function(){

    
    var frames = [
    "img/viewer/1-min.png",
    "img/viewer/2-min.png",
    "img/viewer/3-min.png",
    "img/viewer/4-min.png",
    "img/viewer/5-min.png",
    "img/viewer/6-min.png",
    "img/viewer/7-min.png",
    "img/viewer/8-min.png",
    "img/viewer/9-min.png",
    "img/viewer/10-min.png",
    "img/viewer/11-min.png",
    "img/viewer/12-min.png",
    "img/viewer/13-min.png",
    "img/viewer/14-min.png",
    "img/viewer/15-min.png",
    "img/viewer/16-min.png",
    "img/viewer/17-min.png",
    "img/viewer/18-min.png",
    ];
    
    $("#360frames").spritespin({

    frames: frames.length,
    behavior: "drag", // "hold"
    module: "360",
    sense : -1,
    source: frames,
    animate : true,
    loop: true,
    frameWrap : true,
    frameStep : 1,
    frameTime : 60,

    });
    
});


*/


  $(function () {
    var width = $('.teaser-example').innerWidth();
    var height = (width * 0.68) | 0;
    $('#360frames').spritespin({
      source: SpriteSpin.sourceArray('./img/viewer/{frame}-min.jpg', {frame: [1, 18], digits: 1}),
      width: 2100,
      height: 2100,
      sense: -1,
      animate : false,
      loop: false,
      responsive: true
      
    });
  });
