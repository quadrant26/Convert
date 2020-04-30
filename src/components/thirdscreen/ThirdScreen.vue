<template>
    <div class="third_parent_excharge">
      <div class="map_site"><a href="javascript:;" data-page="2" class="back" @click="backFirstScreen">fanhui</a>您所在位置：<a href="javascript:;" data-page="1" @click="backFirstScreen">商城首页</a><em>&gt;</em><a href="javascript:;" data-page="2">商品详情</a><em>&gt;</em><span>兑换支付</span></div>
    </div>
</template>

<script>
  export default {
    name: "ThirdScreen",
    props: {
      goldnumer: {
        type: Number,
        default :0
      }
    },
    methods: {
      backFirstScreen (){
        this.$emit("secondBackToFirst")
      }
    }

  }
</script>

<style scoped>

</style>