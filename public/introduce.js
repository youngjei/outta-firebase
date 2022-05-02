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
  $('html, body').animate({ scrollTop: $(document).height()-1000},25000);
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
  window.scrollTo({ left: 576, top: 1574, behavior: "smooth" });
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
  window.scrollTo({ left: 576, top: 3380, behavior: "smooth" });
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
  window.scrollTo({ left: 576, top: 4889, behavior: "smooth" });
})

// 버튼 구현 완료

// img click
jQuery.fn.centerpos = function (a, b) {
  this.css("position","absolute");
  this.css("top", Math.max(0, a + (($(window).height() - $(this).outerHeight()) / 2) + 
                                              $(window).scrollTop()) + "px");
  this.css("left", Math.max(0, b + (($(window).width() - $(this).outerWidth()) / 2) + 
                                              $(window).scrollLeft()) + "px");
  return this;
}


function ClickImage(a,b,c,d,x,y,z){
  $(document).on('click', a ,function(e) {
    $(b).css('display', 'block');
    $(c).centerpos(-170, 32.5);
    $(d).centerpos(39, 32.5);
    $(x).centerpos(76, z);
    /*$('.insta').centerpos(130, 15.5);
    $('.mail').centerpos(130, 49.5);*/
    $(y).centerpos(210, 32,5);
  })
}

function DeleteImage(a){
  $(document).on('click', '.quit' ,function(e) {
    $(a).css('display', 'none');
  })
}

// board + edu
ClickImage('#김지원', '.김지원, .name_0, .job_0, .maxim_0', '.김지원', '.name_0', '.job_0', '.maxim_0', 32)
DeleteImage('.김지원, .name_0, .job_0, .maxim_0')
ClickImage('#서주호', '.서주호, .name_1, .job_0, .maxim_1', '.서주호', '.name_1', '.job_0', '.maxim_1', 32)
DeleteImage('.서주호, .name_1, .job_0, .maxim_1')
ClickImage('#양윤정', '.양윤정, .name_2, .job_1, .maxim_2', '.양윤정', '.name_2', '.job_1', '.maxim_2', 30)
DeleteImage('.양윤정, .name_2, .job_1, .maxim_2')
ClickImage('#권태희', '.권태희, .name_3, .job_1, .maxim_3', '.권태희', '.name_3', '.job_1', '.maxim_3', 30)
DeleteImage('.권태희, .name_3, .job_1, .maxim_3')
ClickImage('#신주민', '.신주민, .name_4, .job_1, .maxim_4', '.신주민', '.name_4', '.job_1', '.maxim_4', 30)
DeleteImage('.신주민, .name_4, .job_1, .maxim_4')
ClickImage('#전수연', '.전수연, .name_5, .job_1, .maxim_5', '.전수연', '.name_5', '.job_1', '.maxim_5', 30)
DeleteImage('.전수연, .name_5, .job_1, .maxim_5')
ClickImage('#류수정', '.류수정, .name_6, .job_1, .maxim_6', '.류수정', '.name_6', '.job_1', '.maxim_6', 30)
DeleteImage('.류수정, .name_6, .job_1, .maxim_6')
ClickImage('#배윤지', '.배윤지, .name_7, .job_1, .maxim_7', '.배윤지', '.name_7', '.job_1', '.maxim_7', 30)
DeleteImage('.배윤지, .name_7, .job_1, .maxim_7')
ClickImage('#임주희', '.임주희, .name_8, .job_2, .maxim_8', '.임주희', '.name_8', '.job_2', '.maxim_8', 34)
DeleteImage('.임주희, .name_8, .job_2, .maxim_8')
ClickImage('#조민지', '.조민지, .name_9, .job_2, .maxim_9', '.조민지', '.name_9', '.job_2', '.maxim_9', 34)
DeleteImage('.조민지, .name_9, .job_2, .maxim_9')
ClickImage('#한창희', '.한창희, .name_10, .job_2, .maxim_10', '.한창희', '.name_10', '.job_2', '.maxim_10', 34)
DeleteImage('.한창희, .name_10, .job_2, .maxim_10')

// mentor
ClickImage('#김수연', '.김수연, .name_11, .job_3, .maxim_11', '.김수연', '.name_11', '.job_3', '.maxim_11', 34)
DeleteImage('.김수연, .name_11, .job_3, .maxim_11')
ClickImage('#손수환', '.손수환, .name_12, .job_3, .maxim_12', '.손수환', '.name_12', '.job_3', '.maxim_12', 34)
DeleteImage('.손수환, .name_12, .job_3, .maxim_12')
ClickImage('#이서준A', '.이서준A, .name_13, .job_3, .maxim_13', '.이서준A', '.name_13', '.job_3', '.maxim_13', 34)
DeleteImage('.이서준A, .name_13, .job_3, .maxim_13')
ClickImage('#이서준B', '.이서준B, .name_14, .job_3, .maxim_14', '.이서준B', '.name_14', '.job_3', '.maxim_14', 34)
DeleteImage('.이서준B, .name_14, .job_3, .maxim_14')
ClickImage('#이예준', '.이예준, .name_15, .job_3, .maxim_15', '.이예준', '.name_15', '.job_3', '.maxim_15', 34)
DeleteImage('.이예준, .name_15, .job_3, .maxim_15')
ClickImage('#이현수', '.이현수, .name_16, .job_3, .maxim_16', '.이현수', '.name_16', '.job_3', '.maxim_16', 34)
DeleteImage('.이현수, .name_16, .job_3, .maxim_16')
ClickImage('#장형원', '.장형원, .name_17, .job_3, .maxim_17', '.장형원', '.name_17', '.job_3', '.maxim_17', 34)
DeleteImage('.장형원, .name_17, .job_3, .maxim_17')
ClickImage('#조성민', '.조성민, .name_18, .job_3, .maxim_18', '.조성민', '.name_18', '.job_3', '.maxim_18', 34)
DeleteImage('.조성민, .name_18, .job_3, .maxim_18')
ClickImage('#하성수', '.하성수, .name_19, .job_3, .maxim_19', '.하성수', '.name_19', '.job_3', '.maxim_19', 34)
DeleteImage('.하성수, .name_19, .job_3, .maxim_19')

// design + tech
ClickImage('#박인서', '.박인서, .name_20, .job_4, .maxim_20', '.박인서', '.name_20', '.job_4', '.maxim_20', 33)
DeleteImage('.박인서, .name_20, .job_4, .maxim_20')
ClickImage('#오혜민', '.오혜민, .name_21, .job_4, .maxim_21', '.오혜민', '.name_21', '.job_4', '.maxim_21', 33)
DeleteImage('.오혜민, .name_21, .job_4, .maxim_21')
ClickImage('#이희은', '.이희은, .name_22, .job_4, .maxim_22', '.이희은', '.name_22', '.job_4', '.maxim_22', 33)
DeleteImage('.이희은, .name_22, .job_4, .maxim_22')
ClickImage('#장은정', '.장은정, .name_23, .job_4, .maxim_23', '.장은정', '.name_23', '.job_4', '.maxim_23', 33)
DeleteImage('.장은정, .name_23, .job_4, .maxim_23')
ClickImage('#홍지윤', '.홍지윤, .name_24, .job_4, .maxim_24', '.홍지윤', '.name_24', '.job_4', '.maxim_24', 33)
DeleteImage('.홍지윤, .name_24, .job_4, .maxim_24')
ClickImage('#김윤종', '.김윤종, .name_25, .job_5, .maxim_25', '.김윤종', '.name_25', '.job_5', '.maxim_25', 32)
DeleteImage('.김윤종, .name_25, .job_5, .maxim_25')
ClickImage('#김정훈', '.김정훈, .name_26, .job_5, .maxim_26', '.김정훈', '.name_26', '.job_5', '.maxim_26', 32)
DeleteImage('.김정훈, .name_26, .job_5, .maxim_26')
ClickImage('#김준희', '.김준희, .name_27, .job_5, .maxim_27', '.김준희', '.name_27', '.job_5', '.maxim_27', 32)
DeleteImage('.김준희, .name_27, .job_5, .maxim_27')
ClickImage('#서동재', '.서동재, .name_28, .job_5, .maxim_28', '.서동재', '.name_28', '.job_5', '.maxim_28', 32)
DeleteImage('.서동재, .name_28, .job_5, .maxim_28')
ClickImage('#이영제', '.이영제, .name_29, .job_5, .maxim_29', '.이영제', '.name_29', '.job_5', '.maxim_29', 32)
DeleteImage('.이영제, .name_29, .job_5, .maxim_29')
ClickImage('#최민우', '.최민우, .name_30, .job_5, .maxim_30', '.최민우', '.name_30', '.job_5', '.maxim_30', 32)
DeleteImage('.최민우, .name_30, .job_5, .maxim_30')

// sns
ClickImage('#김민정', '.김민정, .name_31, .job_6, .maxim_31', '.김민정', '.name_31', '.job_6', '.maxim_31', 32)
DeleteImage('.김민정, .name_31, .job_6, .maxim_31')
ClickImage('#김주현', '.김주현, .name_32, .job_6, .maxim_32', '.김주현', '.name_32', '.job_6', '.maxim_32', 32)
DeleteImage('.김주현, .name_32, .job_6, .maxim_32')
ClickImage('#이수민', '.이수민, .name_33, .job_6, .maxim_33', '.이수민', '.name_33', '.job_6', '.maxim_33', 32)
DeleteImage('.이수민, .name_33, .job_6, .maxim_33')
/*ClickImage('#이정은', '.이정은, .name_34, .job_6, .maxim_34', '.이정은', '.name_34', '.job_6', '.maxim_34', 32)
DeleteImage('.이정은, .name_34, .job_6, .maxim_34')*/
ClickImage('#홍수진', '.홍수진, .name_35, .job_6, .maxim_35', '.홍수진', '.name_35', '.job_6', '.maxim_35', 32)
DeleteImage('.홍수진, .name_35, .job_6, .maxim_35')

// video
ClickImage('#박수민', '.박수민, .name_36, .job_7, .maxim_36', '.박수민', '.name_36', '.job_7', '.maxim_36', 30)
DeleteImage('.박수민, .name_36, .job_7, .maxim_36')
ClickImage('#박지안', '.박지안, .name_37, .job_7, .maxim_37', '.박지안', '.name_37', '.job_7', '.maxim_37', 30)
DeleteImage('.박지안, .name_37, .job_7, .maxim_37')
ClickImage('#신주영', '.신주영, .name_38, .job_7, .maxim_38', '.신주영', '.name_38', '.job_7', '.maxim_38', 30)
DeleteImage('.신주영, .name_38, .job_7, .maxim_38')
ClickImage('#이원아', '.이원아, .name_39, .job_7, .maxim_39', '.이원아', '.name_39', '.job_7', '.maxim_39', 30)
DeleteImage('.이원아, .name_39, .job_7, .maxim_39')
ClickImage('#이정은', '.이정은, .name_40, .job_8, .maxim_40', '.이정은', '.name_40', '.job_8', '.maxim_40', 25)
DeleteImage('.이정은, .name_40, .job_8, .maxim_40')
ClickImage('#홍다현', '.홍다현, .name_41, .job_7, .maxim_41', '.홍다현', '.name_41', '.job_7', '.maxim_41', 30)
DeleteImage('.홍다현, .name_41, .job_7, .maxim_41')
ClickImage('#김세진', '.김세진, .name_42, .job_7, .maxim_42', '.김세진', '.name_42', '.job_7', '.maxim_42', 30)
DeleteImage('.김세진, .name_42, .job_7, .maxim_42')
ClickImage('#이민주', '.이민주, .name_43, .job_7, .maxim_43', '.이민주', '.name_43', '.job_7', '.maxim_43', 30)
DeleteImage('.이민주, .name_43, .job_7, .maxim_43')
ClickImage('#장예나', '.장예나, .name_44, .job_7, .maxim_44', '.장예나', '.name_44', '.job_7', '.maxim_44', 30)
DeleteImage('.장예나, .name_44, .job_7, .maxim_44')

$(document).on('click', '.wrapper img, .wrapper2 img' ,function(e) {
  $('.purpler, .whitebox, .quit, .outtaframe').css('display', 'block');
  $('.whitebox').centerpos(0, 0);
  $('.quit').centerpos(-385, 316);
  $('.outtaframe').centerpos(400, 32);
})

$(document).on('click', '.quit' ,function(e) {
  $('.purpler, .whitebox, .quit, .outtaframe').css('display', 'none');
})

//Navigation 구현

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