<template>
    <div>
        <li class="privilege" v-if="privilegeItem.privilege_key != sviponeday" data-category="privilege" :data-privilegeid="privilegeItem.privilege_id" :data-privilegekey="privilegeItem.privilege_key" @click="clickPrivilege(privilegeItem.privilege_id, privilegeItem.privilege_key)">
            <a href="javascript:;" :data-privilegeid="privilegeItem.privilege_id" :data-privilegekey="privilegeItem.privilege_key">
                <div class="img"><img :src="privilegeItem.privilege_icon" :alt="privilegeItem.privilege_name"><span class="vertialmiddle"></span></div>
                <div class="p_much">
                    <h4>{{privilegeItem.privilege_name}}</h4>
                    <div class="price">黑钻：<strong class="newprice">{{privilegeItem.privilege_price_day[0].privilege_price}}</strong></div>
                </div>
                <div class="hidden_argument">{{privilegeItem.privilege_description}}</div>
            </a>
        </li>
    </div>
</template>

<script>
  export default {
    name: "GridItem",
    props: {
      privilegeItem: {
        type: Object,
        default (){
          return {};
        }
      }
    },
    mounted (){
    },
    methods: {
      clickPrivilege(privilege_id, privilege_key){
        this.$emit("clickPrivilege", privilege_id, privilege_key)
      }
    },
    data (){
      return {
        sviponeday: "sviponeday"
      }
    }
  }
</script>

<style scoped>li{ padding:0 5px 20px; width: 200px; height: 202px; float:left; }
li a{ display: block;  width: 144px; height: 180px; padding:13px 27px 7px; background:url(~assets/images/store/good_store_bg_normal.png) no-repeat center -9px;}
li a:hover{background:url(~assets/images/store/good_store_bg_box.png) no-repeat center -9px;}
li .img{ height: 94px; width: 144px; border-radius: 8px;}
li.privilege .img{ background-color: #fffbe3; text-align: center;}
li.privilege .img img{ width: 52px; height: 52px; vertical-align: middle;}
li.storeItem .img{ background: url(~assets/images/store/good_app_store_bg.jpg) no-repeat;}
li.storeItem .img p{ padding: 13px 16px 0 0; color:#fff; text-align: right; }
li .p_much{ padding-top: 24px;}
li .p_much h4{ font-size: 12px; color: #333; line-height: 25px; text-align: left; height:25px; overflow: hidden; text-overflow: ellipsis; width: 144px;}
li .p_much .price{ line-height: 26px; height:26px; padding-left: 20px; color:#666; }
li .p_much .price strong{ color:#ff4949; font-weight: normal;}
li .p_much .price span{ text-decoration: line-through; margin:0 5px;}
li.privilege .price span, .hidden_argument{ display: none; }
li.appgamebuy .img, .good_info .good_logo .img.privilege.appgamebuy{ background-color: transparent; }
li.appgamebuy .img img, .application_third .appgamebuy img{ width: 60px; height: 60px; border-radius: 10px; }
</style>