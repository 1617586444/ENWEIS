<template>
  <div>
    <Header />
    <div class="warpper-pic">
      <img src="../../../assets/images/HOME WEAR 家居.png" alt="">
      <!-- <div class="pic-info">
        <p class="">HOME WEAR</p>
        <p>家居</p>
      </div> -->
    </div>
    <div class="text-wrapper">
      <div class="img-text">
        <p class="tetx-line">
          光沉淀后的优雅，伴着静逸的美感，温柔动人
        </p>
        <p class="tetx-line">
          花朵淡淡的香气，将柔美沁入心灵
        </p>
        <p class="tetx-line">
            ENWEIS 家居服系列
        </p>
        <p class="tetx-line">
          让美好回归生活，把时尚融入家居
        </p>
        <p class="tetx-line">
          在多彩的季节，打造繁花交错的绮丽
        </p>
      </div>
    </div>
    <div class="text-bar">
    </div>
    <!-- 图片列表 -->
    <ul class="swiper-list">
      <li>
        <img src="../../../assets/images/Florescence 10310493.png" alt="">
      </li>
      <li>
        <img src="../../../assets/images/Moon Night 10310495.png" alt="">
      </li>
      <li>
        <img src="../../../assets/images/New Basic 10310482+10310480.png" alt="">
      </li>
      <li>
        <img src="../../../assets/images/Simple Life 10310488.png" alt="">
      </li>
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
    Concatc,
    Header
  }
}
</script>


<style lang="less" scope>
  .warpper-pic{
    img{
      width:100%;
      height:100%;
    }
  }
  .text-wrapper{
    margin-top:-4px;
    height:328px;
    background:#f8f6f4;
    padding:67px 115px 63px 112px;
    box-sizing: border-box;
    .img-text{
    height:199px;
    font-size:25px;
    font-family:SourceHanSansCN-Light;
    font-weight:300;
    color:rgba(89,87,87,1);
    .tetx-line{
      text-align: center;
      line-height:36px;

    }
  }
  }
  .text-bar{
    float: right;
    width:465px;
    height:3px;
    background:rgba(89,87,87,1);
    margin-top:49px;
    margin-bottom: 81px;
    }
    .swiper-list{
      margin-top:132px;
      li{
        height:445px;
        margin-bottom:14px;
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
