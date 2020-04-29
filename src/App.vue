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

#app{
  width: 660px;
  height:510px;
  background-color:#fff;
}
</style>
