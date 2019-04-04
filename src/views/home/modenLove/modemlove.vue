<template>
  <div>
    <Header />

    <div class="modem-main">
      <img src="../../../assets/images/伊维斯分类5.png" alt="">
    </div>

    <!-- 底部 -->
    <Concatc />
  </div>
</template>

<script>
import Header from '../../../components/header/header';
import Concatc from '../../../components/concatc/concatc';
export default {
 components: {
    Header,
    Concatc
  }

}
</script>

<style lang="less">
  .modem-main{
    border-top: 1px solid #ccc;
    padding: 0 5px;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
