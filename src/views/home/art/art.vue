<template>
  <div class="art">
    <Header />
    <div class="y-art-img">
      <img src="../../../assets/images/BRAND STORY.png" alt="">
    </div>
    <div class="art-main">
      <div class="main-content">
        <div class="story">BRAND STORY</div>
        <div class="brand-name">品牌故事</div>
        <div class="content-info">
          伊维斯ENWEIS，2001酝酿于法国里昂，经与国际设计公司和优质面料供应商的协作， 2003年在中国诞生。国际化的视野和与众不同的艺术气质，为现代都市女性呈现出独具个人品味的视觉与身心体验，代表着对高品质生活的要求。
        </div>
        <div class="info-img">
          <img src="../../../assets/images/fb020e5eab6415ba2d5a4a7914ef825.png" alt="">
        </div>
        <div class="story">BRAND VALUE</div>
        <div class="brand-name">品牌价值</div>
        <div class="content-info">
          以“优雅、精致、诱惑”为品牌核心价值主张，致力于打造令女性具有优雅诱惑力的时尚品牌。专门开设内衣研究院，国际化的产品设计、专业研发的优质面料、体贴与呵护女性肌肤的产品、舒适人性化的购物环境、以客为本的服务标准……每一个细节都追求卓越与创新，致力于成为中国内衣行业优雅气质的倡导者。
        </div>
      </div>
    </div>
    <div class="code-bar">
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

<style lang="less" scope>
  .art{
    height: 100%;
  }
  .y-art-img{
    width: 100%;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .art-main{
    height:1223px;
    .main-content{
      padding:0 38px;
      position: absolute;
      width:688px;
      height:1435px;
      background: #f8f6f4;
      left:31px;
      top: 312px;
      .story{
        margin-top:76px;
        margin-bottom:24px;
        height:22px;
        font-size:29px;
        font-family:Georgia;
        font-weight:400;
        color:rgba(89,87,87,1);
      }
      .brand-name{
        height:28px;
        font-size:29px;
        font-family:SourceHanSansCN-Light;
        font-weight:300;
        color:rgba(89,87,87,1);
      }
      .content-info{
        margin-top:66px;
        font-size:25px;
        font-family:SourceHanSansCN-Light;
        font-weight:300;
        color:rgba(89,87,87,1);
        letter-spacing:3px;
        line-height: 36px;
      }
      .info-img{
        margin-top: 63px;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .code-bar{
  margin:58px 0 65px;
  margin-left:355px;
  width:395px;
  height:2px;
  background:rgba(89,87,87,1);
}

</style>
