<template>
  <div class="excharge_parent">
    <div class="map_site"><a href="javascript:;" class="back" @click="backFirstScreen">fanhui</a>您所在位置：<a href="javascript:;" data-page="2" @click="backFirstScreen">商城首页</a><em> &gt; </em> <span>充值黑钻</span></div>
    <div class="money_much"><div class="much">我的黑钻：<strong>14307</strong>黑钻</div></div>
    <div class="choosevip">
      <h5><span></span>充值数量</h5>
      <div class="radio_vipchoose recharge_choose">
        <ul>
          <li class="on">
            <div class="b_top">
              <h4><b>100</b>黑钻</h4>
              <p class="line">仅需<strong>10</strong>元</p>
              <i class="tuijian"></i>
            </div>
            <input type="radio" name="recharge_key" checked="checked" value="0" id="">
            <i class="checked"><img src="~assets/images/icon_status_checked_orange.png" alt=""></i>
          </li>
          <li>
            <div class="b_top">
              <h4><b>500</b>黑钻</h4>
              <p class="line">仅需<strong>50</strong>元</p>
            </div>
            <input type="radio" name="recharge_key" value="1" id="">
            <i class="checked"><img src="~assets/images/icon_status_checked_orange.png" alt=""></i>
          </li>
          <li>
            <div class="b_top">
              <h4><b>1000</b>黑钻</h4>
              <p class="line">仅需<strong>100</strong>元</p>
            </div>
            <input type="radio" name="recharge_key" value="2" id="">
            <i class="checked"><img src="~assets/images/icon_status_checked_orange.png" alt=""></i>
          </li>
          <li class="mrnone">
            <div class="b_top">
              <h4><b>120</b>黑钻</h4>
              <p class="line">仅需<strong></strong>元</p>
            </div>
            <div class="self_user">
              <span>其他数量</span>
              <input type="text" name="self_tkmoney">
            </div>
            <input type="radio" name="recharge_key" data-rechargekey="4" value="4" id="">
            <i class="checked"><img src="~assets/images/icon_status_checked_orange.png" alt=""></i>
          </li>
        </ul>
        <div class="clearfix"></div>
        <div class="open_url_server"></div>
      </div>
    </div>
    <div class="padpayment">
      <div class="pay_method">
        <h4>
          <span></span>选择支付方式付款
          <div class="pay_right_message">应付金额：<strong>10</strong> 元
            <!-- <a href="javascript:;" target="_blank">《充值服务协议》</a> -->
          </div>
        </h4>
        <div class="pay_method_list">
          <div class="fl pay_method_choose">
            <ul>
              <li><a href="javascript:;" class="on"><i class="ico wx"><img src="~assets/images/icon_wx_pay_sm.png" alt=""></i>微信支付</a></li>
              <li><a href="javascript:;" class=""><i class="ico ali"><img src="~assets/images/icon_ali_pay_sm.png" alt=""></i>支付宝</a></li>
            </ul>
          </div>
          <div class="fl pay_method_doing">
            <div class="payaliwx wx_pay_box commonpay">
              <div class="qrcode">
                <div class="img"><img src="data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACEAQMAAABrihHkAAAABlBMVEX///8AAABVwtN+AAAA9klEQVRIic2VSw7EMAhDuYHvf0tuQG1INJVmFWfTdD7kLRCYTyO+dqoqQw/GdAm/KYOwf21SKbPAv8o7wuDI7oksZNwRfnKcv3I/J5J7nVctzkl0lJ3r65yTvlB2KsbHJ7yhoAJWohVzibqSNyjrsAlDk2pY7WkTdCuESrhE80h7hNJVn/sEpQJ2gNLNJjRmUBCYfvJIdEOWOKS+T9CUw1LLt0W6DXTPHaNHVDg2Va7obKIRwUp4b1qHLOe9J2cjeaQ3SczGLoRNZulrr23PJmnV50WUcUeI1E1Ze3ZMIs/5F+EhicmR2y1+ip2TVp4jix5gn3zrPId9z6bOus4BAAAAAElFTkSuQmCC" alt=""><span><img src="~assets/images/qrcode_refresh_sm2.png" alt=""></span></div>
                <span class="qrcode_logo"><img src="~assets/images/user/icon_wxpay_rqcode.png" alt=""></span>
                <div class="load_numberpress">
                  <b class="ico loadinger"><img src="~assets/images/user/loading.png" alt=""></b>
                  <p>充值金额需大于等于10黑钻</p>
                </div>
              </div>
              <dl>
                <dt>温馨提示</dt>
                <dd>支付宝、微信：充值后即时到帐，无需等待！</dd>
                <dd>客服QQ群：554625698（工作时间：周一至周五10:00-19:00）</dd>
              </dl>
            </div>
            <div class="payaliwx ali_pay_box commonpay">
              <div class="qrcode">
                <div class="img"><img src="" alt=""><span><img src="~assets/images/qrcode_refresh_sm2.png" alt=""></span></div>
                <span class="qrcode_logo"><img src="~assets/images/user/icon_alipay_rqcode.png" alt=""></span>
                <div class="load_numberpress">
                  <b class="ico loadinger"><img src="~assets/images/user/loading.png" alt=""></b>
                  <p>充值金额需大于等于10黑钻</p>
                </div>
              </div>
              <dl>
                <dt>温馨提示</dt>
                <dd>支付宝、微信：充值后即时到帐，无需等待！</dd>
                <dd>客服QQ群：554625698（工作时间：周一至周五10:00-19:00）</dd>
              </dl></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ExchargeScreen",
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
  .excharge_parent{ position: absolute; top:0; width:660px;}
  .choosevip{ padding:0 32px;}
  .excharge_parent .money_much{ height: 26px; line-height: 26px; padding:0 30px; }
</style>