<template>
  <div>
    <div class="y-header">
      <router-link tag="div" to="/navigation" class="header-menu"><img src="../../assets/images/1.png" alt=""></router-link>
      <div class="header-logo"><img src="../../assets/images/2.png" alt=""></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {

  }
}
</script>
<style lang="less">
  .y-header{
    width:100%;
    height: 103px;
    box-sizing: border-box;
    padding:17px 47px 7px 47px;
    background: #fff;
    .header-menu{
      float: left;
      margin-right:225px;
      margin-top:17px;
      margin-bottom:16px;
      cursor: pointer;
      img{
       width:54px;
      height:35px;
      }
    }
    .header-logo{
      float: left;
      img{
        width:127px;
        height:67px;
      }

    }
  }
</style>
