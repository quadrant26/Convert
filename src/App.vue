<template>
  <div id="app">
    <Index />
  </div>
</template>

<script>
import Index from './components/index/Index';
import qs from 'qs';

export default {
  name: 'App',
  data (){
    return {
      session_id: null,
      user_token: null,
      bundleId: null
    }
  },
  components: {
    Index
  },
  created(){
    const query = qs.parse(location.search.substring(1))
    this.user_token = query.user_token;
    this.session_id = query.session_id;
    this.bundleId = query.bundleId;

    this.$store.commit('setSessionId', this.session_id);
    this.$store.commit('setUserToken', this.user_token);
    this.$store.commit('setBundleId', this.bundleId);
  }
}
</script>

<style>
body{font-size: 12px; line-height:1.666; background-color: #efefef;}
body, html, a, img, span, b, div, p, h1, h2, h3, h4, h5, h6, table, tbody, tfoot, thead, th, td, tr, strong, em, section, form, input, select, option, header, nav, footer, ul, li, dl, dt, dd, ol, label, textarea, button, iframe{ padding: 0; margin: 0; font-size: 12px; font-family:arial, "Microsoft YaHei", "微软雅黑", "宋体"; }
ul, li, dd, dt, dl, ol { list-style: none; }
img { border: none; font-size:0;}
input, button, input:focus { outline: none; padding: 0; }
input[type=button], input[type=reset], input[type=submit], button { cursor: pointer; border:none; }
button { padding: 0; }
input::-ms-clear { display: none; }
input, button, select, textarea { outline: none; -webkit-appearance:none; -webkit-tap-highlight-color: transparent; -ms-tap-highlight-color: transparent; -moz-tap-highlight-color: transparent; -webkit-user-modify: read-write-plaintext-only; resize: none; }
a{ text-decoration:none; -webkit-tap-highlight-color: rgba(255, 0, 0, 0); -ms-tap-highlight-color: rgba(255, 0, 0, 0); -moz-tap-highlight-color: rgba(255, 0, 0, 0); }
a:focus, input:focus, button:focus, select:focus, textarea:focus, a:visited, a:hover{ outline-style: none; -moz-outline-style: none; -webkit-outline-style: none; -webkit-tap-highlight-color: transparent; text-decoration:none;}
a:visited *, a:focus *, a:hover *{ text-decoration:none;}
body a:focus *, body a:hover *, body a:link *, body a:hover, body a:focus, a:hover, a:focus{ text-decoration:none;}
input::-webkit-input-placeholder, input::-ms-input-placeholder, input::-moz-input-placeholder {line-height:normal; }
input[type=radio], input[type=checkbox], input[type=file]{ display:none;}
.verticalmiddle{ vertical-align: middle; display: inline-block; height:100%;}

/* common style*/
.bodywidth{  width: 660px; height: 510px; background-color: #f2f2f2;}
.clearfix{ clear:both;}
.vertialmiddle{ height:100%; display: inline-block; vertical-align:middle; }
.bgcolorfff, .mc_rw, .mc_money_de, .mc_tabs_parent_money, .mc_rank, .mc_user_mations{ background-color: #fff;}
.fl{ float: left; }
.fr{ float: right; }
.tal{ text-align: left;}
.tac{ text-align: center;}
.tar{ text-align: right;}
.ico{ display:inline-block; vertical-align: middle; }
.hideeninput{ display: none; }
.mrnone{ margin-right: 0;}


.parent_excharge{ position: absolute; width: 660px; height: 510px; top:0; left:0; background-color: #fff; z-index:200;}

#app{
  width: 660px;
  height:510px;
  background-color:#fff;
}


.map_site{ height: 30px; line-height:30px; padding:0 30px; font-size: 12px; color:#aaa;}
.map_site em{ font-style: normal; margin:0 3px;}
.map_site a, .map_site em, .map_site span{ line-height:30px; color:#aaa; font-size: 12px;}
.map_site a{ color:#666;}
.map_site a:hover{ color:#ff4949;}
.map_site a.back{ display: inline-block; width: 25px; height: 30px; background: url(~assets/images/icon_allow_back.png) -2px 0 no-repeat; text-indent: -2000px;}
.map_site a.back:hover{ background-position: -2px -30px;}

.pay_method h4{ line-height:40px; font-size:12px; height:40px; font-weight:normal; color:#999; border-bottom: none; position:relative;}
.pay_right_message{ position:absolute; text-align:right; top:0; right:30px; font-size: 12px; color:#666;}
.pay_right_message strong{ color:#f25636; font-size: 14px; font-weight: normal; margin:0 3px;}
.pay_right_message a:link, .pay_right_message a:visited{ color:#ffb400;}
.pay_right_message a:hover{ text-decoration: underline;}

.pay_method_list{ height:254px; padding:0 0 15px;}
.pay_method_choose{ width:121px; border:1px solid #e5e5e5; border-right:none; }
.pay_method_choose li{ height:56px; width:121px; position:relative;  border-bottom: 1px solid #e5e5e5; }
.pay_method_choose li:last-child{ border-bottom:0; }
.pay_method_choose a{ display: block; width:107px; height:56px; background-color:#f5f5f5; padding-left:14px; color:#666; font-size:14px; line-height:56px;}
.pay_method_choose a.on{ background-color:#fff; width:108px; position:absolute; left:0; top:0;}
.pay_method_choose a:hover{ background-color:#fff;  }
.pay_method_choose a i, .paymethod_list li i{ margin-right:5px; position: relative; width:18px; height:18px;}
.pay_method_choose a .ico img{ width:18px; height:18px; position: absolute; left:0; top:0;}

.pay_method_doing{ border:1px solid #e5e5e5; height:252px; width:476px; width:474px\0; }
.payaliwx{ padding-top: 22px; position:relative;}
.payaliwx .qrcode .img{ width:142px; height:142px; border:1px solid #e5e5e5; margin-left: auto; margin-right: auto; padding:4px; position:relative; text-align:center;}
.payaliwx .qrcode .img img{ width:142px; height:142px; text-align: center;}
.payaliwx .qrcode .img span{ display:block; position: absolute; width:122px; height:122px; left:5px; top:5px; display:none; cursor: pointer; z-index:500;}
.payaliwx .qrcode .img span img{ width: 142px; height: 142px; vertical-align: middle;}
.payaliwx .qrcode_logo{ position: absolute; width:20px; height:20px; display:block; left:50%; top:85px; margin-left:-10px; background-color: #fff; z-index:150;}
.payaliwx .qrcode_logo img{ width: 20px; height:20px;}
.payaliwx .load_numberpress{ width: 142px; height: 142px; background-color: #000; opacity:.9; filter:alpha(opacity=90); text-align: center; position: absolute; left:50%; margin-left: -71px; top:27px; z-index:500; display:none;}
@-webkit-keyframes loading {
  0% {
    -webkit-transform: translate3d(0,0,0) rotate(0);
    transform: translate3d(0,0,0) rotate(0)
  }

  100% {
    -webkit-transform: translate3d(0,0,0) rotate(360deg);
    transform: translate3d(0,0,0) rotate(360deg)
  }
}

@keyframes -ms-loading {
  0% {
    -ms-transform: translate3d(0,0,0) rotate(0);
    transform: translate3d(0,0,0) rotate(0)
  }

  100% {
    -ms-transform: translate3d(0,0,0) rotate(360deg);
    transform: translate3d(0,0,0) rotate(360deg)
  }
}

@keyframes loading {
  0% {
    -webkit-transform: translate3d(0,0,0) rotate(0);
    transform: translate3d(0,0,0) rotate(0)
  }

  100% {
    -webkit-transform: translate3d(0,0,0) rotate(360deg);
    transform: translate3d(0,0,0) rotate(360deg)
  }
}
.payaliwx .load_numberpress b{ width: 32px; height: 32px; margin-top: 52px; display: inline-block; -webkit-animation: loading 2s linear infinite; -ms-animation: loading 2s linear infinite;  animation: loading 2s linear infinite}
.payaliwx .load_numberpress b img{ width:32px; height:32px; vertical-align:top;  }
.payaliwx .load_numberpress p{ color:#fff; font-size: 14px; line-height: 20px; padding:5px 10px 0; text-align: center;}

.payaliwx dl{padding:8px;}
.payaliwx dl dt, .payaliwx dl dd{ line-height:22px;}
.payaliwx dl dt{ color:#f25636;}
.payaliwx dl dd{ color:#999;}
.payaliwx dl dd a{ display: inline-block; width:60px; height: 14px;border: 1px solid #f25636; color:#f25636; padding-left: 5px; line-height: 14px; text-align: center;}
.payaliwx dl dd a img{ margin-right:2px; vertical-align: text-top;}
.wx_pay_box, .ali_pay_box, .bank_pay_box{ display:none; }
.wx_pay_box{ display:block; }

.choosevip h5{ height:40px; line-height:40px; font-size:12px; font-weight:normal; color:#333; font-size: 14px; }
.choosevip h5 span, .pay_method h4 span{ height:14px; width:3px; display: inline-block; background-color: #f25636; vertical-align:middle; margin-right: 11px;}
.radio_vipchoose{ height:100px;border-bottom: 1px dashed #e5e5e5;}
.radio_vipchoose li{ width:122px; height:86px; margin-right:33px; border:1px solid #e5e5e5; float:left; cursor:pointer; position:relative; +margin-right:12px;  margin-right:12px\0;}
.radio_vipchoose li:last-child{ margin-right:0px;}
.radio_vipchoose li.mrnone{ margin-right:0px;}
.radio_vipchoose li div.b_top{ text-align:center; position:relative; padding-top: 16px;}
.radio_vipchoose_lock li div.b_top{ padding-top: 16px; height:66px;}
.radio_vipchoose li div h4{ height:42px; line-height:42px; font-size:14px; border:none; font-weight:normal;}
.radio_vipchoose li div h4 b{ font-size:28px; color:#999; font-weight:normal;}
.radio_vipchoose li div h4 b.small{ font-size:18px;}
.radio_vipchoose li div i.tuijian{ position:absolute; width:32px; height:21px; background:url('~assets/images/icon_recommend_orange.png'); left:-3px; top:-2px;}
.radio_vipchoose li i.checked{ display:none; position:absolute; right:-1px; top:-1px; width:33px; height:33px;}
.radio_vipchoose li i.checked img{ width: 33px; height: 33px;}
.radio_vipchoose li.on i.checked{ display:block; }
.radio_vipchoose li.on div h4 b{ color:#f25636; }
.radio_vipchoose li p.line{ font-size:12px; line-height:24px; color:#999;}
.recharge_choose li p.line{ color:#999; font-weight: normal; border-top:1px dotted #e5e5e5; width:110px; margin: 0 auto}
.radio_vipchoose li:hover, .radio_vipchoose li.on{ border-color:#f25636; }
.recharge_choose li.on p.line strong{ color:#f25636;}
.recharge_choose li:last-child:hover i.checked{ display: none;}
.choosevip a{ background-color:#ff7800; color:#fff; border-color:#ff7800; display:inline-block; width:86px; height:32px; line-height:32px; border:1px solid #e5e5e5; text-align:center; font-size:14px; color:#666; border-radius:5px;}
.radio_vipchoose li .self_user{ text-align:center;background-color:#fff; width:122px; height:86px; left:0; top:0; position:absolute;}
.self_user span{ width:122px; line-height:86px; height:86px; text-align:center; font-size:12px; color:#aaa; position: absolute; z-index: 300; display:block; background-color:#fff;}
.self_user input{ width:122px; border:none; height:40px; line-height:40px; text-align:center; padding:23px 0; color:#333; font-size:14px;font-size: 28px; color: #ffb400;}
.self_user input:focus{ border:1px solid #ffb400; margin: -1px;}

.padpayment{ padding: 0 30px;}

/* 充值黑钻 */
.applenew{ padding-top: 15px;}
.goods_list .applenew li{ margin-bottom: 20px; height: 138px; padding: 0 15px 20px; width: 178px;}
.goods_list .applenew li a{ background: #fff; border:1px solid #e7e7e7; height: 138px; padding: 13px 17px 7px; position: relative;}
.goods_list .applenew li a:hover{ box-shadow:0 0 10px 2px #f2f2f2;}
.goods_list .applecardnew .p_much{ padding-top: 6px; margin-top:12px; border-top:1px dashed #ccc;}
.goods_list .applecardnew .p_much .price{background-image: none; text-align: center; color:#333; padding-left: 0;}
.newapplecard{ height: 440px;}
.newapplecard .full_price_much .first_scroll_parent{ height: 424px;}
.newapplecard .buy_fixed_bottom{ bottom: -40px;}
.newapplecard .longpadding{ height: 20px;}
.gotobuy{ border-top:1px solid #e7e7e7; padding:0 35px; text-align: right; height:50px; margin-top: 10px;}
.gotobuy .floatright{ text-align: right; color:#333; vertical-align: middle; padding-top: 10px;}
.gotobuy .floatright strong{ margin-right: 10px; font-weight: normal;}
.gotobuy .floatright a{ text-align: center; width: 130px; height: 30px; display: inline-block; text-align: center; line-height: 30px; background: url(~assets/images/store/store_buy_bg.png) no-repeat; color: #333;}
.gotobuy .floatright a:hover{ background-position: 0 -30px;}
.gotobuy .floatright a.disabled, .gotobuy .floatright a.disabled:hover{ background-position: 0 -120px;}
.applecardnew i.ico{ position: absolute; width: 29px; height: 29px; display: none; background: url(~assets/images/icon_right_bottom_checked_s.png) no-repeat; right:0px; bottom:0px;}
.goods_list .applenew li.on a, .goods_list .applenew li a:hover{ border:1px solid rgb(255,120,0);}
.goods_list .applenew li a:hover{  box-shadow: 0 0 10px 1px rgba(255,120,0, .3); }
.goods_list .applenew li.on i.ico{ display: block;}
</style>
