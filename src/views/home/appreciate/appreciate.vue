<template>
  <div>
    <Header />
    <ul class="list-wrapper">
      <router-link tag="li" to="/appreciatechild" class="list-item">
        <img src="../../../assets/images/01(4).png" alt="">
        <div class="bar-info">
          <div class="info-name">
            <span class="name"> Bra</span>
            <span class="name"> 文胸</span>
          </div>
          <div class="info-line"></div>
        </div>
      </router-link>
      <li class="list-item">
        <img src="../../../assets/images/modern lover 10310475.png" alt="">
        <div class="odd-line">
          <div class="info-name">
            <span class="name">
                            Home wear
                        </span>
            <span class="name">
                              家居
                        </span>
          </div>
          <div class="info-line"></div>
        </div>
      </li>
      <li class="list-item">
        <img src="../../../assets/images/印象巴黎11020144.png" alt="">
        <div class="bar-info">
          <div class="info-name">
            <span class="name"> Bra</span>
            <span class="name"> 文胸</span>
          </div>
          <div class="info-line"></div>
        </div>
      </li>
       <li class="list-item">
        <img src="../../../assets/images/New Sexy10710221（4）.png" alt="">
        <div class="odd-line">
          <div class="info-name">
            <span class="name">
                            Home wear
                        </span>
            <span class="name">
                              家居
                        </span>
          </div>
          <div class="info-line"></div>
        </div>
      </li>
      <li class="list-item">
        <img src="../../../assets/images/溢彩10400124+跃动10310514.png" alt="">
        <div class="bar-info">
          <div class="info-name">
            <span class="name"> Bra</span>
            <span class="name"> 文胸</span>
          </div>
          <div class="info-line"></div>
        </div>
      </li>
      <li class="list-item">
        <img src="../../../assets/images/screenshot_20180918170119.png" alt="">
        <div class="odd-line">
          <div class="info-name">
            <span class="name">
                            Home wear
                        </span>
            <span class="name">
                              家居
                        </span>
          </div>
          <div class="info-line"></div>
        </div>
      </li>
      <li class="list-item">
        <img src="../../../assets/images/玫瑰礼赞50510065（2）.png" alt="">
        <div class="bar-info">
          <div class="info-name">
            <span class="name"> Bra</span>
            <span class="name"> 文胸</span>
          </div>
          <div class="info-line"></div>
        </div>
      </li>
    </ul>

    <!-- 底部商家联系 -->
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
.list-wrapper{
  width:100%;
  .list-item{
    margin-bottom: 138px  ;
    img{
      width:100%;
      height: 351px;
    }
    .bar-info{
      width:297px;
      float: right;
      position: relative;
      .info-name{
        margin-top:21px;
        margin-bottom:12px;
        .name{
          width:114px;
          height:27px;
          font-size:29px;
          font-family:Georgia;
          font-weight:400;
          color:rgba(89,87,87,1);
        }
      }
      .info-line{
        position: absolute;
        bottom: 0;
        right: 0;
        width:297px;
        height:2px;
        background:rgba(89,87,87,1);
      }
    }
    .odd-line{
      width:297px;
      float: left;
      position: relative;
      .info-name{
       float: right;
        margin-top:21px;
        margin-bottom:12px;
        .name{
          width:114px;
          height:27px;
          font-size:29px;
          font-family:Georgia;
          font-weight:400;
          color:rgba(89,87,87,1);
        }
      }
      .info-line{
        position: absolute;
        bottom: 0;
        right: 0;
        width:297px;
        height:2px;
        background:rgba(89,87,87,1);
      }
    }
  }
}
</style>
