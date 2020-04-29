<template>
    <div>
        <div class="shade" v-show="isShade"></div>
        <div class="pay_successing" v-if="success"><img src="~assets/images/user/pay_successiing.png" alt=""></div>
        <div class="loading" v-if="loading"><img src="~assets/images/store/loading.gif" alt="loading"></div>
        <div class="popup_star_tip" v-show="isTips">
            <h2>什么是黑钻<a href="javascript:;" class="closepop" @click.prevent="tipsHide"></a></h2>
            <ul>
                <li>1.黑钻是黑雷出售并管理的一种虚拟货币，用于购买黑钻商品中提供的物品或增值服务，可在黑钻商城、个人中心、官方网站等位置消费使用。</li>
                <li>2.人民币与黑钻兑换比例是1:10，即：人民币1元=10黑钻。</li>
                <li>3.黑钻一经充值到账，不能提现，不能转让，不能退款。</li>
                <li>4.您仅能采用黑雷公司指定的方式进行充值，以增加您黑钻账户所拥有的黑钻数量，可供充值方式包括：第三方支付（例如支付宝、微信）等。</li>
            </ul>
        </div>
        <div class="confirm_popup popup_app_tip" v-if="failed">
            <h2><strong>购买失败</strong><a href="javascript:;" class="closepop" @click.prevent="failedHide"></a></h2>
            <p class="appcard_info"></p>
        </div>
        <div class="confirm_popup fullmoney_code" v-if="code">
            <h2><strong>请输入兑换码</strong><a href="javascript:;" class="closepop" @click.prevent="codeHide"></a></h2>
            <div class="user_press_code">
                <input type="text" class="code" name="code">
            </div>
            <div class="cp_tips">兑换码由YX开头的15位数字和字母组成</div>
            <div class="p_error"></div>
            <div class="submit_box"><a href="javascript:;" class="confirm">兑换</a></div>
            <div class="iter_tip">兑换码请联系代理商购买</div>
        </div>
        <div class="confirm_popup fullmoney_stone" v-if="fullmoney">
            <h2><strong>兑换</strong><a href="javascript:;" class="closepop" @click.prevent="fullmoneyHide"></a></h2>
            <h3>确定要<strong>兑换</strong>“<span>{{privilegeTitle}}</span>”吗？</h3>
            <div class="submit_box"><a href="javascript:;" class="cancel">取消</a><a href="javascript:;" class="confirm">确认</a></div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "PopupBox",
    props: {
      privilegeTitle: {
        type: String,
        default: ""
      },
      tips: {
        type: Boolean,
        default: false
      },
      shade: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      success: {
        type: Boolean,
        default: false
      },
      failed: {
        type: Boolean,
        default: false
      },
      code: {
        type: Boolean,
        default: false
      },
      fullmoney: {
        type: Boolean,
        default: false
      },
      recharge: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      isTips () {
        return this.tipsOnly = this.tips;
      },
      isShade () {
        return this.shadeOnly = this.shade;
      },
      isCode () {
        return this.codeOnly = this.code;
      },
      isFullmoney () {
        return this.fullmoneyOnly = this.fullmoney;
      },
      isFailed () {
        return this.failedOnly = this.failed;
      },
      isRecharge (){
        return this.failedOnly = this.failed;
      }
    },
    data (){
      return {
        tipsOnly: this.tips,
        shadeOnly: this.shade,
        codeOnly: this.code,
        fullmoneyOnly: this.fullmoney,
        failedOnly: this.failed,
        loadingOnly: this.loading,
        successOnly: this.success,
        rechargeOnly: this.recharge,
      }
    },
    methods: {
      tipsHide (){
        this.shadeOnly = false;
        this.tipsOnly = false;
        this.$emit("tiphide", this.shadeOnly, this.tipsOnly);
      },
      rechargeHide (){
        this.shadeOnly = false;
        this.rechargeOnly = false;
        this.$emit("rechargehide", this.shadeOnly, this.rechargeOnly);
      },
      fullmoneyHide (){
        this.shade = false;
        this.fullmoney = false;
      },
      codeHide (){
        this.shade = false;
        this.code = false;
      },
      failedHide (){
        this.shade = false;
        this.failed = false;
      },
      successHide (){
        this.shade = false;
        this.success = false;
      },
      loadingHide (){
        this.shade = false;
        this.loading = false;
      }
    }
  }
</script>

<style scoped>

    .shade{ position: fixed; width:100%; height:100%; z-index:250; left:0; top:0; background: #333; filter:alpha(opacity=40); opacity:0.4;}
    .shademask{ background: #999; filter: alpha(opacity=75); opacity: 0.75;}
    .loading{ background:transparent;position: fixed;  z-index:300; width:800px; text-align:center; height:607px; top:0; opacity:.95; filter: alpha(opacity=95); display: block;}
    .loading img{ text-align:center; vertical-align: middle;}
    /* 弹窗信息 */
    .confirm_popup, .popup_star_tip, .pay_successing{ width: 360px; height: 240px; position: absolute; background: #fff; z-index:1010; left:150px; top:135px;}
    a.closepop{ position: absolute; right:12px; top:15px; background-image: url(~assets/images/ico_closed.png); width: 9px; height: 9px; display: block; transition: .4s all linear; -weblit-transition: .4s all linear; -ms-transition: .4s all linear;}
    a.closepop:hover{ transform: scale(1.2); -webkit-transform: scale(1.2); -ms-transform: scale(1.2); }
    .confirm_popup h2, .popup_star_tip h2{ color:#333; font-size: 16px; line-height:40px; border-bottom:1px solid #e5e5e5; padding:0 20px; font-weight: normal;}
    .confirm_popup strong{ font-weight: normal; font-size: 16px;}
    .confirm_popup h3{ padding-top: 34px; line-height:52px; height:52px; text-align: center; font-size: 16px; color:#333; font-weight: normal;}
    .confirm_popup h3 span{ font-size: 16px;}
    .confirm_popup .submit_box{ padding-top: 20px; text-align: center; height:38px;}
    .confirm_popup .submit_box a{ width: 82px; height:38px; line-height:38px; color:#333; background-image: url(~assets/images/user/rw_status_list.png); display: inline-block; margin:0 10px;}
    .confirm_popup .submit_box a.confirm:link, .confirm_popup .submit_box a.confirm:visited{ background-position: 0 0;}
    .confirm_popup .submit_box a.confirm:hover{ background-position: 0 -38px;}
    .confirm_popup .submit_box a.cancel{ background-position: 0 -152px;}
    .confirm_popup .appcard_info{ color:#666; font-size: 14px; padding-top: 70px; text-align: center;}

    .pay_successing{ width: 168px; height: 124px; left: 246px; top: 198px;}

    .popup_star_tip ul{ padding:0 20px;}
    .popup_star_tip ul li{ font-size: 12px; color:#999; line-height:18px; margin:8px 0;}

    /* 兑换码 */
    .user_press_code{ height: 36px; padding:36px 40px 0; position: relative;}
    .right_menu{ width:120px; height:30px; border:1px solid #999; position: absolute; right:0; top:0; display: none; z-index:1200; background: #fff;}
    .right_menu .item{ width: 120px; height: 30px;}
    .right_menu .item a{  padding-left: 15px; width: 105px; font-size: 12px; display: block; height: 30px; line-height: 30px; color:#333;}
    .right_menu .item a:hover{ background-color:#f2f2f2;}
    .user_press_code input{ width: 260px; height: 34px; line-height: 34px; padding:0 9px; color:#333; font-size: 14px; border:1px solid #dedede; border-radius:5px; }
    .user_press_code input:focus{ border-color:#999;}
    .fullmoney_code .p_error, .p_error, .user_control .cp_tips{ padding: 0 40px; color:#f00000; font-size: 12px; line-height: 20px; height: 20px;}

    .loading{ width: 64px; height: 64px; z-index:300; left:248px; top:223px; display: none;}


    /* 够买兑换码 */

    .displaybox { display:box; display:-moz-box; display:-webkit-box; display: flex; display: -webkit-flex; display: -moz-flex; }
    .m_buy_payment{ width: 10rem; border-top:2px solid #f9b300;}
    .m_buy_payment h2{ height:44px; line-height:44px; color:#333; text-align: center; font-size: 16px; border-bottom:1px solid #f3f3f3;}
    .m_buy_payment p{ font-size: 12px; color:#333; line-height: 22px;  padding:0.2rem 0.32rem;}
    .user_control, .pay_m_method, .payment_tips, .buresult{ padding:0 0.32rem;}
    .user_control .item{ height:42px; width: 9.36rem; border-bottom:1px solid #f2f2f2; position: relative;}
    .user_control .item .fword{ width:4rem; flex:0 0 4rem;  -webkit-flex:0 0 4rem; text-align: right; font-size: 12px; line-height: 36px; color:#999; }
    .user_control .item .minput{ width: 5.36em; flex:1; -webkit-flex:1;}
    .user_control .item .minput input{ box-sizing: border-box; -webkit-box-sizing: border-box; border:none; width: 5.36rem; height:42px; line-height:42px; padding:5px 0 5px 5px; color:#666; font-size: 14px;}
    .user_control .item img, .user_control .item a{ position: absolute; width: 85px; height:36px; line-height:36px; text-align: center; display: block; background-color:#f9b300; color:#fff; right:0; top:3px; border-radius:3px;}
    .user_control .item a.disabled, .user_control .item a.disabled2{ color:#fff; background-color: #ccc;}
    .user_control .p_error{ padding:0; display: none;}
    .price_alone{ margin:0 0.32rem; height: 34px; line-height:34px; font-size: 14px; color:#666; border-bottom:1px solid #f3f3f3; width: 9.36rem; }
    .price_alone strong{ font-size: 16px;  line-height:34px; color:#f65655;}
    .pay_m_method h6{ height: 26px; line-height:26px; color:#666; }
    .pay_control{ height: 40px;}
    .pay_control .fwordicon{ width: 3rem; flex:0 0 3rem; -webkit-flex:0 0 3rem;}
    .fwordicon span{ display: block; width: 3rem; box-sizing: border-box; -webkit-box-sizing: border-box; height:40px; border:1px solid #fff; position: relative;}
    .fwordicon span.on{ border:1px solid #4689f3;}
    .fwordicon i.alipay{ display: inline-block; width: 30px; height: 30px; background: url(~assets/images/icon_alipay_md.png) no-repeat; margin:0 5px; background-size:30px 30px; -webkit-background-size: 30px 30px;  vertical-align: middle;}
    .fwordicon i.square{ width: 23px; height: 23px; background-image: url(~assets/images/icon_status_checked_up.png); display: none; position: absolute; right:0; top:0;}
    .fwordicon span.on i.square{  display: block;}
    .fwordicon b{ display: inline-block; line-height:40px; vertical-align: middle; color:#666;}
    .pay_control .ftext{ width: 6.36rem; flex:1; -webkit-flex:1;}
    .pay_control .ftext p{ padding-left:5px; line-height:18px; color:#999; padding-top: 2px;}
    .pay_m_method .control{ padding:30px 0; text-align: center;}
    .pay_m_method .control input{ text-align: center; display: inline-block; width: 132px; height: 44px;background: -webkit-linear-gradient(right, #f9b300, #f77800); background: linear-gradient(to right, #f9b300, #f77800); color:#fff; font-size: 14px; line-height:44px; border:none; border-radius: 5px; }
    .pay_m_method .control input:hover, .pay_m_method .control input:focus{ background:#f77800;}
    .buresult { padding-top: 20px;}
    .buresult .ficon{ width: 70px; height: 60px; flex:0 0 70px; -webkit-flex:0 0 70px;   }
    .buresult .ficon img{ width: 60px; height: 60px; }
    .buresult .ftxy{ height:60px; font-weight: 700; color:#333; font-size: 18px; line-height: 60px; width: calc(100% - 70px); width: -webkit-calc(100% - 70px); flex:1; -webkit-flex:1;}
    .m_buy_payment .result_tip{ line-height:36px; color:#666; font-size: 12px;}
    .result_code .ficon{ line-height:40px; color:#333;}
    .result_code .ftxy .copy{ width: 100%; font-weight: normal; background-color: #ccc; height:40px; line-height: 40px; color:#fff; text-align: center; font-size: 14px; -webkit-user-select: auto; user-select: auto}
    .result_code .ftxy p{ line-height:20px; font-weight: normal; color:#999; font-size: 12px; padding: 0;}
    .m_buy_payment .line{ border-bottom: 1px solid #f3f3f3; margin: 20px 0.32rem;}

    .payment_tips{ padding: 0px 0.32rem 20px;}
    .payment_tips dt, .payment_tips dd{ color:#999; font-size: 12px; line-height: 22px; }
    .fullmoney_code .cp_tips{ padding:0; color:#999; padding:0 40px;}
    .fullmoney_code .iter_tip{ color:#999; font-size: 12px; padding:10px 10px 0;  text-align: right;}
    .fullmoney_code .p_error{ color:#f00000;}

    /* 弹窗充值 */
    .choosevip{ padding:0 32px;}
    .excharge_parent .money_much{ height: 26px; line-height: 26px; padding:0 30px; }
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
    .goods_list .applenew li a:hover{  box-shadow: 0 0 10px 1px rgba(255,120,0,0.3); }
    .goods_list .applenew li.on i.ico{ display: block;}
</style>