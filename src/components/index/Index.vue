<template>
    <div class="convert">
        <FirstScreen :goldnumer="goldnumer" :privilegeList="privilegeList" @popup="popup" @rechargeMoney="rechargeMoney"></FirstScreen>
        <SecondScreen></SecondScreen>
        <ThirdScreen></ThirdScreen>
        <FourthScreen></FourthScreen>

        <PopupBox
                :tips="tips" :shade="shade" :loading="loading" :success="success" :failed="failed" :code="code" :fullmoney="fullmoney" :recharge="recharge" ref="popup"
                @tiphide="tiphide" @rechargeHide="rechargeHide"
        ></PopupBox>
    </div>
</template>

<script>

  import FirstScreen from 'components/firstscreen/FirstScreen'
  import SecondScreen from 'components/secondscreen/SecondScreen'
  import ThirdScreen from 'components/thirdscreen/ThirdScreen'
  import FourthScreen from 'components/fourthscreen/FourthScreen'
  import PopupBox from 'components/popupbox/PopupBox'
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
      tips: false,
      shade: false,
      loading: false,
      success: false,
      failed: false,
      code: false,
      fullmoney: false,
      recharge: false
    }
  },
  components: {
    FirstScreen,
    SecondScreen,
    ThirdScreen,
    FourthScreen,
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
      this.shade = true;
    },
    rechargeHide (shade, recharge){
      this.shade = shade;
      this.recharge = recharge;
    }
  }
}
</script>

<style scoped>

</style>