<template>
  <div>
    <Header />
    <div class="y-vdideo">
      <dl class="vdieo-img">
        <dd>
          <img src="../../../assets/images/8.png" alt="">
        </dd>
        <dt>
          2018暖衣巴黎之旅
        </dt>
      </dl>
    </div>
    <div class="vdieo-bar"></div>
    <div class="y-vdideo">
      <dl class="vdieo-img">
        <dd>
          <img src="../../../assets/images/图层 29.png" alt="">
        </dd>
        <dt>
          伊维斯宣传片
        </dt>
      </dl>
    </div>
    <!-- 底部线条 -->
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
@import url('./video.less');
</style>
