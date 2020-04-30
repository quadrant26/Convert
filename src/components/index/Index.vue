<template>
  <div class="convert">
      <transition
        name="slide"
        enter-active-class="animated slideInLeft"
        leave-active-class="animated slideOutLeft"
      >
        <FirstScreen
          :goldnumer="goldnumer"
          :privilegeList="privilegeList"
          @popup="popup"
          @rechargeMoney="rechargeMoney"
          @firstScreenMove="firstScreenMove"
          v-if="firstScreenShow"></FirstScreen>
      </transition>

      <transition
        name="slide"
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight" >
          <SecondScreen
            :goldnumer="goldnumer"
            v-if="secondScreenShow"
            @secondBackToFirst="secondBackToFirst"
            :privilegeObject="privilegeObject"
            :boolSvipDiscount="bool_svip_discount"
            :buttonStatus="buttonStatus"
            :buttonLimit="buttonLimit">

          </SecondScreen>
      </transition>

      <transition
        name="slide"
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight" >
        <ThirdScreen
          v-if="thirdScreenShow"></ThirdScreen>
      </transition>

      <transition
        name="slide"
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight" >
          <FourthScreen
            v-if="fourthScreenShow"></FourthScreen>
      </transition>

    <transition
      name="slide"
      enter-active-class="animated slideInRight"
      leave-active-class="animated slideOutRight" >
      <ExchargeScreen
        v-if="exchangeScreenShow"
        :goldnumer="goldnumer"
        @secondBackToFirst="secondBackToFirst"></ExchargeScreen>
    </transition>

      <PopupBox
        :tips="tips"
        :shade="shade"
        :loading="loading"
        :success="success"
        :failed="failed"
        :code="code"
        :fullmoney="fullmoney"
        :recharge="recharge"
        ref="popup"

        @tiphide="tiphide"
        @rechargeHide="rechargeHide" ></PopupBox>
  </div>
</template>

<script>

import FirstScreen from 'components/firstscreen/FirstScreen'
import SecondScreen from 'components/secondscreen/SecondScreen'
import ThirdScreen from 'components/thirdscreen/ThirdScreen'
import FourthScreen from 'components/fourthscreen/FourthScreen'
import PopupBox from 'components/popupbox/PopupBox'
import ExchargeScreen from 'components/exchargescreen/ExchargeScreen'
import {getUserInfo, getPrivilegeList} from 'network/home'

export default {
name: "Index",
data (){
  return {
    session_id: "",
    user_token: "",
    bundleId: "",
    goldnumer: 0,
    privilegeList: [],
    privilegeObject: {},
    tips: false,
    shade: false,
    loading: false,
    success: false,
    failed: false,
    code: false,
    fullmoney: false,
    server_time: 0,
    recharge: false,
    firstScreenShow: true,
    secondScreenShow: false,
    thirdScreenShow: false,
    fourthScreenShow: false,
    exchangeScreenShow: false,
    bool_svip_discount: false,
    buttonStatus: false,
    buttonLimit: false,
  }
},
components: {
  FirstScreen,
  SecondScreen,
  ThirdScreen,
  FourthScreen,
  ExchargeScreen,
  PopupBox
},
created() {
  this.session_id = this.$store.getters.getSessionId;
  this.user_token = this.$store.getters.getUserToken;
  this.bundleId = this.$store.getters.getBundleId;

  // 获取用户信息
  this.getUserInfoDat();
  // 获取特权列表
  this.getPrivilegeData();
},
methods: {
  getUserInfoDat(){
    getUserInfo({
      session_id: this.session_id,
      user_token: this.user_token
    }).then( data => {
      // 设置用户金额
      this.goldnumer = parseFloat(data.user_info.user_money);
      this.$store.commit("setGoldNumber", this.goldnumer);

      let server_time = this.server_time = data.server_time;
      let day30 = 29*24*3600;

      // 检测是否够买svip
      let user_privilege = data.user_info.user_privilege;
      if ( user_privilege ){
        let userPrivilege = JSON.parse(user_privilege);
        let buy_heilei = userPrivilege.buy_heilei;
        let svip = userPrivilege.svip;
        let app_limit = userPrivilege.app_limit;

        if(svip || buy_heilei){
          this.buttonStatus = true;
        }
        if(app_limit){
          this.buttonLimit = true;
        }

        if ( svip && buy_heilei){
          if ( svip > server_time && buy_heilei > server_time && buy_heilei - svip > day30){
            this.bool_svip_discount = true;
          }
        }else{
          if( buy_heilei > server_time && !svip ){
            this.bool_svip_discount = true;
          }
        }
      }
    })
  },
  getPrivilegeData (){
    getPrivilegeList({
      session_id: this.session_id,
      user_token: this.user_token
    }).then( data => {
      this.privilegeList = data.privilege_list;
    })
  },
  popup (){
    this.tips = true;
    this.shade = true;
  },
  tiphide (shade, tips){
    this.shade = shade;
    this.tips = tips;
  },
  rechargeMoney (){
    this.recharge = true;
    // this.shade = true;
    this.firstScreenShow = false;
    this.exchangeScreenShow = true;
  },
  rechargeHide (shade, recharge){
    this.shade = shade;
    this.recharge = recharge;
  },
  firstScreenMove (){
    this.firstScreenShow = false;
    this.secondScreenShow = true;
    // 选择ID
    var privilege_id = this.$store.getters.getPrivilegeId;
    for( var i = 0; i < this.privilegeList.length; i++){
      if( this.privilegeList[i].privilege_id == privilege_id){
        this.privilegeObject = this.privilegeList[i];
        break;
      }
    }
  },
  secondBackToFirst (){
    this.firstScreenShow = true;
    this.secondScreenShow = false;
    this.exchangeScreenShow = false;
  }
}
}
</script>

<style scoped>
.convert{ position: relative;}
</style>