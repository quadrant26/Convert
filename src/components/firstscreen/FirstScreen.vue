<template>
    <div class="first_parent_excharge">
        <h6 class="tip1">现已开通微信支付功能</h6>
        <div class="money_much">
            <div class="fl money">我的黑钻：<strong>{{goldnumer}}</strong>黑钻<a href="javascript:;" id="firstscreenexcharge" @click="rechargeKey">充值黑钻</a></div>
            <div class="fr question"><a href="javascript:;" @click="clickPopup">什么是黑钻？</a></div>
        </div>
        <div class="goods_list">
            <div class="goods_list_parent">
                <ul>
                    <GridItem v-for="(item, index) in privilegeList" :privilege-item="item" :key="index" @clickPrivilege="clickPrivilege"></GridItem>
                </ul>
            </div>
            <div class="first_scroll_parent" style=""><span></span></div>
        </div>
    </div>
</template>

<script>

  import GridItem from './gridItem/GridItem'

  export default {
    name: "FirstScreen",
    props: {
      goldnumer: {
        type: Number,
        default: 0
      },
      privilegeList: {
        type: Array,
        default: function (){
          return []
        }
      }
    },
    data (){
      return {
        session_id: "",
        user_token: ""
      }
    },
    components: {
      GridItem
    },
    methods: {
      rechargeKey (){
        this.$emit("rechargeMoney")
      },
      clickPopup (){
        this.$emit("popup")
      },
      clickPrivilege (privilege_id, privilege_key){

        this.$store.commit("setPrivilegeId", privilege_id);
        this.$store.commit("setPrivilegeKey", privilege_key);

        this.$emit("firstScreenMove");
      }
    }
  }
</script>

<style scoped>
.first_parent_excharge .tip1{ background-color: #fffbe5; padding:0 30px; color:#ff4949; font-size: 12px; line-height:25px; height:25px; font-weight: normal;}
.first_parent_excharge .tip1 b{ border:1px solid #ff4949; padding:1px 4px; margin:0 4px; vertical-align: middle; font-weight: normal;}
.first_parent_excharge .money_much{ height: 40px; line-height: 40px; padding:0 30px;}
.first_parent_excharge .money, .goods_list li .p_much .price, .second_parent_excharge .money_much .much, .excharge_parent .money_much .much{ background: url(~assets/images/oct18/star_02.png) no-repeat left center; padding-left: 23px; line-height:40px; color:#333; font-weight: normal;}
.first_parent_excharge .money strong{ font-weight: normal;}
.first_parent_excharge .money a{ display: inline-block; width: 70px; height: 23px; border-radius:12px; color:#ff4949; text-align: center; line-height: 23px; border:1px solid #ff4949; margin-left: 10px;}
.first_parent_excharge .question a{ color:#999;}
.first_parent_excharge .question a:hover{ color:#ff4949;}
.goods_list { padding:0 15px; width: 630px; height: 426px; position: relative; overflow: hidden;}
.goods_list .goods_list_parent{ position: absolute; width: 630px; left:15px; top:0;}
.first_scroll_parent{ position: absolute; height:426px; width: 10px; background-color:#ccc; right:10px; top:0; display: none;}
.first_scroll_parent span{ display: block; width: 10px; height:10px; background-color:#888; left:0; top:0; cursor: pointer; position: absolute;}
.full_price_much .first_scroll_parent{ height:384px;}
</style>