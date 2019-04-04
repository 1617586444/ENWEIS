<template>
  <div>
      <Header></Header>
      <Banner></Banner>
      <router-link tag="div" to="/brandvideo">
        <div class="y-video">
          <div class="video-title">
            <div class="video-text">
              BRAND VIDEO
              </div>
              <div class="video-name">
                品牌视频
              </div>
            </div>
            <div class="video-img">
              <div class="img-title">
                <span class="line"></span>
                <span class="look-more">
                  查看更多
                </span>
              <div class="videoInfo">
                <img src="../../assets/images/8.png" alt="">
              </div>
              <div class="line-bom"></div>
              </div>
            </div>
        </div>
      </router-link>
      <router-link tag="div" to="/appreciate">
        <div class="y-video">
          <div class="video-title">
            <div class="video-text">
              COLLECTIONS
              </div>
              <div class="video-name">
                伊品鉴赏
              </div>
            </div>
            <div class="video-img">
              <div class="img-title">
                <span class="line"></span>
                <span class="look-more">
                  了解更多最新款
                </span>
              <div class="videoInfo">
                <img src="../../assets/images/11.png" alt="">
              </div>
              <div class="line-bom"></div>
              </div>
            </div>
        </div>
      </router-link>
      <router-link tag="div" to="/art">
        <div class="y-video">
          <div class="video-title">
            <div class="video-text">
              ART  ENWEIS
              </div>
              <div class="video-name">
                艺术伊维斯
              </div>
            </div>
            <div class="video-img">
              <div class="img-title">
                <span class="line"></span>
                <span class="look-more">
                  品牌故事
                </span>
              <div class="videoInfo">
                <img src="../../assets/images/4.png" alt="">
              </div>
              <div class="line-bom"></div>
              </div>
            </div>
        </div>
      </router-link>
      <router-link tag="div" to="/research">
        <div class="y-video">
          <div class="video-title">
            <div class="video-text">
              ART ILLUSTRATION
              </div>
              <div class="video-name">
                内衣研究院
              </div>
            </div>
            <div class="video-img">
              <div class="img-title">
                <span class="line"></span>
                <span class="look-more">
                  研究领域
                </span>
              <div class="videoInfo">
                <img src="../../assets/images/7.png" alt="">
              </div>
              <div class="line-bom"></div>
              </div>
            </div>
        </div>
      </router-link>
      <router-link tag="div" to="/artpainting">
         <div class="y-video">
          <div class="video-title">
            <div class="video-text">
              BRA RESEARCH CENTER
              </div>
              <div class="video-name">
                艺术插画
              </div>
            </div>
            <div class="video-img">
              <div class="img-title">
                <span class="line"></span>
                <span class="look-more">
                  手绘欣赏
                </span>
              <div class="videoInfo">
                <img src="../../assets/images/13.png" alt="">
              </div>
              <div class="line-bom"></div>
              </div>
            </div>
        </div>
      </router-link>
      <router-link tag="div" to="/vipcenter">
        <div class="y-video">
          <div class="video-title">
            <div class="video-text">
              VIP CLUP
              </div>
              <div class="video-name">
                VIP中心
              </div>
            </div>
            <div class="video-img">
              <div class="img-title">
                <span class="line"></span>
                <span class="look-more">
                  会员权益
                </span>
              <div class="videoInfo">
                <img src="../../assets/images/9.png" alt="">
              </div>
              <div class="line-bom"></div>
              </div>
            </div>
        </div>
      </router-link>
      <router-link tag="div" to="/storeimage">
        <div class="y-video">
          <div class="video-title">
            <div class="video-text">
              ENWEIS SHOP
              </div>
              <div class="video-name">
                门店形象
              </div>
            </div>
            <div class="video-img">
              <div class="img-title">
                <span class="line"></span>
                <span class="look-more">
                  店铺分布
                </span>
              <div class="videoInfo">
                <img src="../../assets/images/10.png" alt="">
              </div>
              <div class="line-bom"></div>
              </div>
            </div>
        </div>
      </router-link>
      <div class="shopInfo">
        <router-link to="/yrstore"><img class="info-left" src="../../assets/images/12.png" alt=""></router-link>
        <img class="info-right" src="../../assets/images/6.png" alt="">
      </div>
      <!-- 联系商家模块 -->
      <Concate />
  </div>
</template>
<script>
import Concate from '../../components/concatc/concatc';
import Banner from '../../components/bannerImg/banner';
import Header from '../../components/header/header.vue';
export default {
  components: {
    Banner,
    Header,
    Concate,
  },
  data() {
    return{
      show: false
    }
  }
}
</script>

<style lang="less">
@import url('./home.less');
</style>
