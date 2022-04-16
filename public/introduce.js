// 버튼 구현
function HoverChange(a, b, c){

    $(document).ready(function(){
        $(a).hover(function(){
          $(b).css('background','#4558FF');
          $(c).css('color','#FFFFFF');
        },function(){
          $(b).css('background','#FFFFFF');
          $(c).css('color','#4558FF');
        })
    })
    }

/*function ClickChange(a,b,c){
    $(document).on('click', a ,function(e) {
      $('.bluebox').css('background','#FFFFFF');
      $('.all').css('color','#4558FF');
      $(b).css('background','#4558FF');
      $(c).css('color','#FFFFFF');
      $(a).unbind("mouseenter mouseleave");
    });}*/


HoverChange('#bl1, #al1','#bl1','#al1');
HoverChange('#bl2, #al2','#bl2','#al2');
HoverChange('#bl3, #al3','#bl3','#al3');
HoverChange('#bl4, #al4','#bl4','#al4');

$(document).on('click', '#bl1, #al1' ,function(e) {
  $('.bluebox').css('background','#FFFFFF');
  $('.all').css('color','#4558FF');
  $('#bl1').css('background','#4558FF');
  $('#al1').css('color','#FFFFFF');
  $('#bl1, #al1').unbind("mouseenter mouseleave");
  HoverChange('#bl2, #al2','#bl2','#al2');
  HoverChange('#bl3, #al3','#bl3','#al3');
  HoverChange('#bl4, #al4','#bl4','#al4');
})

$(document).on('click', '#bl2, #al2' ,function(e) {
  $('.bluebox').css('background','#FFFFFF');
  $('.all').css('color','#4558FF');
  $('#bl2').css('background','#4558FF');
  $('#al2').css('color','#FFFFFF');
  $('#bl2, #al2').unbind("mouseenter mouseleave");
  HoverChange('#bl1, #al1','#bl1','#al1');
  HoverChange('#bl3, #al3','#bl3','#al3');
  HoverChange('#bl4, #al4','#bl4','#al4');
})

$(document).on('click', '#bl3, #al3' ,function(e) {
  $('.bluebox').css('background','#FFFFFF');
  $('.all').css('color','#4558FF');
  $('#bl3').css('background','#4558FF');
  $('#al3').css('color','#FFFFFF');
  $('#bl3, #al3').unbind("mouseenter mouseleave");
  HoverChange('#bl1, #al1','#bl1','#al1');
  HoverChange('#bl2, #al2','#bl2','#al2');
  HoverChange('#bl4, #al4','#bl4','#al4');
})

$(document).on('click', '#bl4, #al4' ,function(e) {
  $('.bluebox').css('background','#FFFFFF');
  $('.all').css('color','#4558FF');
  $('#bl4').css('background','#4558FF');
  $('#al4').css('color','#FFFFFF');
  $('#bl4, #al4').unbind("mouseenter mouseleave");
  HoverChange('#bl1, #al1','#bl1','#al1');
  HoverChange('#bl2, #al2','#bl2','#al2');
  HoverChange('#bl3, #al3','#bl3','#al3');
})

// 버튼 구현 완료

//img click
jQuery.fn.centerpos = function (a, b) {
  this.css("position","absolute");
  this.css("top", Math.max(0, a + (($(window).height() - $(this).outerHeight()) / 2) + 
                                              $(window).scrollTop()) + "px");
  this.css("left", Math.max(0, b + (($(window).width() - $(this).outerWidth()) / 2) + 
                                              $(window).scrollLeft()) + "px");
  return this;
}


$(document).on('click', '.wrapper img, .wrapper2 img' ,function(e) {
  $('.purpler, .whitebox, .quit, .outtaframe,.photo,.hong,.resp,.insta,.mail,.always').css('display', 'block');
  $('.whitebox').centerpos(0, 0);
  $('.quit').centerpos(-385, 316);
  $('.outtaframe').centerpos(400, 32);
  $('.photo').centerpos(-170, 32.5);
  $('.hong').centerpos(39, 32.5);
  $('.resp').centerpos(76, 32.5);
  $('.insta').centerpos(130, 15.5);
  $('.mail').centerpos(130, 49.5);
  $('.always').centerpos(210, 32,5);
})

$(document).on('click', '.quit' ,function(e) {
  $('.purpler, .whitebox, .quit, .outtaframe,.photo,.hong,.resp,.insta,.mail,.always').css('display', 'none');
})

$(document).on('mouseenter', '.onetex' ,function(e) {
  $('.one, .oneone, .oneonetwo, .onetwo').css('display', 'block');
  $('.two, .twoone, .twotwo, .twothree').css('display', 'none');
  $('.thi, .thione').css('display', 'none');
})

$(document).on('mouseenter', '.twotex' ,function(e) {
  $('.one, .oneone, .oneonetwo, .onetwo').css('display', 'none');
  $('.two, .twoone, .twotwo, .twothree').css('display', 'block');
  $('.thi, .thione').css('display', 'none');
})

$(document).on('mouseenter', '.thitex' ,function(e) {
  $('.one, .oneone, .oneonetwo, .onetwo').css('display', 'none');
  $('.two, .twoone, .twotwo,.twothree').css('display', 'none');
  $('.thi, .thione').css('display', 'block');
})

function WeightChange(a){
  $(document).ready(function(){ 
      $(a).hover(function(){  
          $(a).css('font-weight', '700');
      }, function(){  
          $(a).css('font-weight', '500');
      })}) 
  }

WeightChange('.oneone');
WeightChange('.oneonetwo');
WeightChange('.onetwo');
WeightChange('.twoone');
WeightChange('.twotwo');
WeightChange('.twothree');
WeightChange('.thione');