<template>
  <div class="navigat">
    <Header/>
    <ul class="nav-main">
      <router-link tag="li" to="/">首页</router-link>
      <router-link tag="li" to="/appreciate">伊品鉴赏</router-link>
      <router-link tag="li" to="/art">艺术伊维斯</router-link>
      <router-link tag="li" to="/artpainting">艺术插画</router-link>
      <router-link tag="li" to="/research">内衣研究所</router-link>
      <router-link tag="li" to="/vipcenter">VIP中心</router-link>
      <router-link tag="li" to="/storeimage">门店形象</router-link>
      <router-link tag="li" to="/yrstore">天猫商城</router-link>
    </ul>
  </div>
</template>

<style lang="less">
  .ss{
    width:750px;
    height:932px;
  }
</style>

<script>
import Header from '../../../components/header/header'
export default {
  components: {
    Header
  }
}
</script>

<style lang="less" scope>
  .navigat{
    height:100%;
    background:#f8f6f4;
     .nav-main{
      margin:241px auto;
      text-align: center;
    li{
      height:27px;
      font-size:29px;
      font-family:SourceHanSansCN-Light;
      font-weight:300;
      color:rgba(89,87,87,1);
      margin-bottom:60px;
      }
    }
  }

</style>
