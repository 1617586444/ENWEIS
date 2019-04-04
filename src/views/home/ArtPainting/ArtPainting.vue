<template>
  <div>
    <Header />
    <ul class="art-list-pic">
      <li> <img src="../../../assets/images/17.png" alt=""></li>
      <li> <img src="../../../assets/images/13.png" alt=""></li>
      <li> <img src="../../../assets/images/15.png" alt=""></li>
      <li> <img src="../../../assets/images/18.png" alt=""></li>
      <li> <img src="../../../assets/images/19.png" alt=""></li>
      <li> <img src="../../../assets/images/17.png" alt=""></li>
      <li> <img src="../../../assets/images/17.png" alt=""></li>
      <li> <img src="../../../assets/images/17.png" alt=""></li>
    </ul>
     <ol class="swiper-dot">
      <li class="swiper-dot-item"></li>
      <li class="swiper-dot-item"></li>
      <li class="swiper-dot-item"></li>
      <li class="swiper-dot-item"></li>
      <li class="swiper-dot-item"></li>
    </ol>
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

<style lang="less" scope>
  .art-list-pic{
    li{
      margin-bottom: 8px;
      img{
        height:100%;
        width:100%;
      }
    }
  }
  .swiper-dot{
    width:100%;
    display: flex;
    justify-content: center;
    margin-top:37px;
    margin-bottom: 72px;
    .swiper-dot-item{
      width:8px;
      height:8px;
      background:rgba(0,0,0,1);
      opacity:0.6;
      border-radius:50%;
      float: left;
      margin:0 10px;
    }
  }
</style>
