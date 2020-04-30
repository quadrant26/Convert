<template>
    <div class="second_parent_excharge">
      <div class="map_site"><a href="javascript:;" class="back" @click="backFirstScreen">fanhui</a>您所在位置：<a href="javascript:;" data-page="2" @click="backFirstScreen">商城首页</a><em> &gt; </em> <span>商品详情</span></div>
      <div class="money_much"><div class="much">我的黑钻：<strong>{{goldnumer}}</strong>黑钻</div></div>
        <div class="second_paymuch">
            <div class="pay_price_much full_price_much">
              <vue-scroll :ops="ops" @handle-scroll="handleScroll">
                <div class="b_box_parent" style="top: 0px;">
                    <div class="good_info privilege_second" style="display: block;">
                        <div class="fl good_logo">
                            <div class="img privilege"><img src="http://sim.kiwitap.com/Upload/Smallfile/Request/5c174ab239ebd.png" alt=""><span class="vertialmiddle"></span></div>
                        </div>
                        <div class="fl good_info_a">
                            <h4>{{privilegeObject.privilege_name}}</h4>
                            <h6 class="hidecheck" v-if="!discountBol">{{privilegeObject.privilege_description}}</h6>
                            <p class="hidecheck" v-if="!discountBol">所需黑钻：<strong>{{privilegeObject.privilege_price_day[currenIndex].privilege_price}}</strong>黑钻</p>
                            <div class="lock_choose hidecheck" v-if="!discountBol">
                                <ul>
                                  <li v-for="(item, index) in privilegeObject.privilege_price_day" :key="index" :class="{on: currenIndex == index}" @click="checkItem(index)"><a href="javascript:;">{{item.privilege_expire_day == 999 ? "永久" : item.privilege_expire_day + "天"}}</a><input type="radio" name="privilege_level" :checked="{checked: currenIndex == index}" :value="index"></li>
                                </ul>
                            </div>
                            <div class="other_vip_bold" v-if="discountBol">
                                <div class="descript">您是黑雷VIP用户，可直接升级为SVIP</div>
                                <div class="exchange_days">可升级天数：<b>{{svipdays}}</b>天, VIP剩余时间：<b>{{vipdays}}</b>天</div>
                                <div class="surplus_days">只需补充：<b>{{vipmoneys}}</b>黑钻</div>
                            </div>
                            <div class="btn"><a href="javascript:;" class="second_button_excharge2" :class="[buttonClass ? 'disabled': '']">{{buttonStatusWord}}</a></div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="goods_detail">
                        <div class="detail_boxer word_detail_plivilege">
                            <h3 class="noticeTips" v-if="tipsSmall">您现有的“去广告”、“虚拟定位”特权将转化为黑雷SVIP额外的时间，共<b>{{qggdv}}</b>天</h3>
                            <h6>您将购买「<strong>{{privilegeObject.privilege_name}}</strong>」特权</h6>
                            <dl>
                                <dt>声明：</dt>
                                <dd v-for="(item, index) in detail_word" :key="index">{{item}}</dd>
                            </dl>
                            <div class="table_clock_svip" style="display: none;" v-show="privilegeKeyCalc">
                                <table>
                                    <thead>
                                    <tr>
                                        <td>功能</td>
                                        <td>VIP</td>
                                        <td>SVIP</td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>勋章</td>
                                        <td><div class="iconstatus vip"><i></i></div></td>
                                        <td><div class="iconstatus svip"><i></i></div></td>
                                    </tr>
                                    <tr>
                                        <td>单开游戏</td>
                                        <td><div class="iconstatus checked"><i></i></div></td>
                                        <td><div class="iconstatus checked"><i></i></div></td>
                                    </tr>
                                    <tr>
                                        <td>双开游戏</td>
                                        <td><div class="iconstatus"><i></i></div></td>
                                        <td><div class="iconstatus checked"><i></i></div></td>
                                    </tr>
                                    <tr>
                                        <td>去除广告</td>
                                        <td><div class="iconstatus"><i></i></div></td>
                                        <td><div class="iconstatus checked"><i></i></div></td>
                                    </tr>
                                    <tr>
                                        <td>虚拟定位</td>
                                        <td><div class="iconstatus"><i></i></div></td>
                                        <td><div class="iconstatus checked"><i></i></div></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="longpadding"></div>
                    </div>
                </div>
                <div class="first_scroll_parent" style="display: none;"><span style="top: 0px;"></span></div>
              </vue-scroll>
            </div>
            <div class="buy_fixed_bottom" v-if="boxFixedBottom">
                <div class="fl many">所需黑钻：<strong>{{privilegeObject.privilege_price_day[currenIndex].privilege_price}}</strong>黑钻</div>
                <div class="fr btnbuy"><a href="javascript:;" :class="[buttonClass ? 'disabled': '']">{{buttonStatusWord}}</a></div>
            </div>
        </div>
    </div>
</template>

<script>


  import {getPrivilegeUserInfo} from 'network/home'

  const detail_words = {
    "app_limit": ["1.购买后可解除最多只能安装8款APP的限制；", "2.解锁后您依旧只能安装“应用商店”中已有的APP；"],
    "buy_heilei": ["1.购买黑雷VIP特权后就可以正常启动游戏了", "2.建议您在黑雷应用商店中找到想玩的游戏后再进行付费", "3.新用户有2天试玩时间，建议您试玩体验下能否满足您的需求", "4.虚拟物品售出后概不退换"],
    "svip" : ["1.升级为黑雷SVIP特权后可使用黑雷双开的功能", "2.黑雷SVIP将免费获得相同时间的“虚拟定位”、“去广告”功能", "3.双开黑雷将占用更多的系统资源，请根据您的电脑配置酌情考虑", "4.如果同时拥有VIP和SVIP，则优先消耗SVIP时间", "5.虚拟物品售出后概不退换"],
    "sviponeday": ["1.您将开通黑雷SVIP试用权限", "2.开通后将拥有SVIP全部功能，持续1天", "3.每个账号只得开通一次试用权限", "4.若同时拥有VIP和SVIP，则优先消耗SVIP时间", "5.虚拟物品售出后概不退换"],
    "hide_advertise": ["1.解锁后在有效期内将不再显示黑雷客户端右下角的广告；", "2.到期后将恢复广告显示；"],
    "virtual_position": ["1.“虚拟定位”功能可随意设置模拟器所在的地理位置；", "2.此功能可适用于所有可安装的应用或游戏；", "3.您可以在虚拟定位的地图中搜索任意位置；", "4.您只需点击地图上任意一点，即可完成对位置的的设定"]
  }

  export default {
    name: "SecondScreen",
    props: {
      goldnumer: {
        type: Number,
        default :0
      },
      privilegeObject: {
        type: Object,
        default: () => {
          return {}
        }
      },
      boolSvipDiscount: {
        type: Boolean,
        default: false
      },
      buttonLimit: {
        type: Boolean,
        default: false
      },
      buttonStatus: {
        type: Boolean,
        default: false
      }
    },
    data (){
      return {
        privilegeKey: "",
        detail_word: [],
        activeClass: "on",
        currenIndex: 0,
        discountBol: false,
        tipsSmall: false,
        qggdv: 0,
        vipdays: 0,
        svipdays: 0,
        vipmoneys: 0,
        boxFixedBottom: false,
        buttonClass: false,
        ops: {
          rail: {
            opacity: '0.2',
            background: "#ccc",
            border: '1px solid #cecece',
            size: '10px',
          },
          bar: {
            background: '#888',
            keepShow: true,
            size: '10px',
            minSize: 0.2
          },
          scrollPanel: {
            easing: 'easeInQuad',
            speed: 800
          },
          vuescroll: {
            wheelScrollDuration: 0,
            wheelDirectionReverse: false
          }
        },
      }
    },
    computed: {
      privilegeKeyCalc (){

        this.privilegeKey = this.$store.getters.getPrivilegeKey;
        this.detail_word = detail_words[this.privilegeKey];
        return this.privilegeKey != "app_limit" ? true: false;
      },
      buttonStatusWord (){
        let buttonStr;
        if ( this.privilegeKey == "app_limit"){
          if(this.buttonLimit){
            buttonStr = "已解锁";
            this.buttonClass = true;
          }else{
            buttonStr = "立即解锁";
            this.buttonClass = false;
          }
        }else{
          if( this.buttonStatus ){
            buttonStr = "立即续费";
          }else{
            buttonStr = "立即解锁";
          }
        }
        return buttonStr;
      }
    },
    created (){
      this.session_id = this.$store.getters.getSessionId;
      this.user_token = this.$store.getters.getUserToken;

      this.boolSvipDiscount && this.getDiscountPrivilege();
    },
    methods: {
      backFirstScreen (){
        this.$emit("secondBackToFirst")
      },
      checkItem (index){
        this.currenIndex = index;
      },
      getDiscountPrivilege (){
        getPrivilegeUserInfo({
          user_token: this.user_token,
          session_id: this.session_id
        }).then( data => {
          console.log(data);
          if ( data.result == 1){
            this.discountBol = true;
            if ( data.qv + data.qgg > 0 ){
              this.qggdv = true;
            }
            this.qggdv = data.qv + data.qgg;
            this.vipdays =data.vipdays;
            this.svipdays = data.svipdays;
            this.vipmoneys = data.vipmoneys;
          }
        }).catch( e => {
          console.log(e)
        })
      },
      handleScroll(vertical, horizontal, nativeEvent) {
        this.boxFixedBottom = vertical.scrollTop >= 124 ? true : false;
      }
    }
  }
</script>

<style scoped>
.second_parent_excharge{ top:0; position: absolute; width:660px;}
.second_parent_excharge .money_much{ height:26px; margin-bottom: 10px; padding:0 30px;}
.second_parent_excharge .money_much .much, .excharge_parent .money_much .much{ padding-left: 20px; height:26px; line-height:26px;}
.second_paymuch{ height: 424px; position: relative;}
.full_price_much{ position: relative; padding:0 15px; height: 424px; overflow-y: hidden;}
.b_box_parent{ position: absolute; z-index:10; width: 600px; margin-left: 15px;}
.good_info{ height: 131px; margin-bottom: 20px; width: 600px;}
.good_info .good_logo{ width: 179px; height: 129px; border:1px solid #e7e7e7; margin-right: 30px; }
.good_info .good_logo .img{ margin:16px 0 0 16px; width: 144px; height: 94px; background-image: url(~assets/images/store/good_app_store_bg.jpg);}
.good_info .good_logo .img p, .empty_goods_infomation .goods_logo .img p{ color:#fff; padding:16px 16px 0 0; text-align: right; font-size: 12px; }
.good_info .good_logo .img.privilege, .empty_goods_infomation .privilege{ background: #fffbe3; text-align: center;}
.good_info .good_logo .img.privilege img, .empty_goods_infomation .privilege img{ width: 52px; height: 52px; vertical-align: middle;}
.good_info .good_info_a h4{ line-height: 22px; color:#333; font-size: 16px; font-weight: normal; }
.good_info .good_info_a p{ line-height: 30px; font-size: 12px; color:#999;}
.good_info .good_info_a p strong{ font-size: 16px; color:#ff4949;}
.good_info .good_info_a .btn{ padding-top: 19px; height: 30px;}
.good_info .good_info_a .btn a, .buy_fixed_bottom a{ width: 130px; height: 30px; display: block; text-align: center; line-height:30px; background: url(~assets/images/store/store_buy_bg.png) no-repeat; color:#333;}
.good_info .good_info_a .btn a{ margin-right: 10px; float:left;}
.good_info .good_info_a .btn a:hover, .buy_fixed_bottom a:hover{ background-position: 0 -30px;}
.good_info .good_info_a .btn a.disabled, .buy_fixed_bottom a.disabled, .good_info .good_info_a .btn a.disabled:hover, .buy_fixed_bottom a.disabled:hover{ background:#ddd;}
.privilege_second .good_info_a h6{ line-height:26px; font-size: 14px; color:#666; font-weight: normal;}
.privilege_second .good_info_a p{ line-height:18px;}
.lock_choose { height:24px; margin:2px 0; overflow: hidden;}
.lock_choose li{ width: 52px; height: 24px;text-align: center; color:#333; float:left; margin-right: 5px;}
.lock_choose li a{ width: 50px; height: 22px; border:1px solid #e7e7e7; display: block; line-height: 22px; color:#333; }
.lock_choose li.on a, .lock_choose li a:hover{ border:1px solid #f25636;}
.good_info.privilege_second .good_info_a .btn{ padding-top: 6px;}
.goods_detail{ width: 600px;}
.word_detail_plivilege{ border-top:2px solid #f3f3f3;}
.detail_ctime h6{ font-size: 14px; color:#333; line-height:34px;font-weight: normal;}
.detail_ctime p{ line-height:20px; font-size: 12px; color:#999;}
.noticeTips{ color:#f00000; font-size:14px; height:30px; line-height:30px;}
.other_vip_bold div{ height:24px; line-height:24px; font-size:14px; color:#666; }
.other_vip_bold div b{ color: #f00000; font-size:14px; }
.word_detail_buyment h6, .word_detail_buyment strong, .word_detail_plivilege h6, .word_detail_plivilege strong{ font-size: 14px; color:#666; line-height:44px; padding-top: 10px; font-weight: normal; }
.word_detail_buyment dt, .word_detail_buyment dd, .word_detail_plivilege dt, .word_detail_plivilege dd{ font-size: 12px; color:#999; line-height:22px; }
.word_detail_plivilege dd.bold{ font-weight: bold; color:#f00000;}
.longpadding{ height:60px;}
.buy_fixed_bottom{ position: absolute; width: 600px; padding:0 30px; height: 60px; bottom:-20px; left:0; background-color: #fffbe3; z-index:12; z-index:200;}
.buy_fixed_bottom .many{ line-height: 60px; color:#333; font-size: 12px; }
.buy_fixed_bottom .many strong{ color:#ff4949; font-size: 20px;}
.buy_fixed_bottom .btnbuy{ height:30px; padding-top: 15px;}

/* svip 表格 */
.table_clock_svip { text-align: center; padding: 10px 0;}
.table_clock_svip table{ border-collapse:collapse; border:solid 1px #ccc; margin:0 auto;}
.table_clock_svip table td{ border:solid 1px #ccc; padding:2px 0; width: 120px; text-align: center; color:#333; height: 24px; line-height: 24px;}
.table_clock_svip .iconstatus{ text-align: center;}
.table_clock_svip .iconstatus i{ background: url(~assets/images/uiotc/icon_not.png) no-repeat center center; height:24px; width: 24px; display: inline-block; vertical-align: middle;}
.table_clock_svip .vip i{ background: url(~assets/images/uiotc/icon_vip.png) no-repeat 0 -48px; height: 20px; width: 20px;}
.table_clock_svip .svip i{ background: url(~assets/images/uiotc/icon_vip.png) no-repeat 0 -88px; height: 20px; width: 62px;}
.table_clock_svip .checked i{ background-image: url(~assets/images/uiotc/icon_yes.png);}
</style>