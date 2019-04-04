
<template>
  <div>
    <Header />
    <div class="store-address">
      <img src="../../../assets/images/门店形象顶图.png" alt="">
    </div>
    <div class="store-show">
      <p class="city-info">
        ENWEIS SHOP
      </p>
      <p class="store-name">
        国内店铺展示
      </p>
    </div>
    <div class="select-city">
      <div class="city-bar"></div>
      <div class="province">省份</div>
      <select class="select-name">
        <option value="广东省">广东省</option>
      </select>
    </div>
    <ul class="ulLi">
      <div class="describe-header">
        <span class="cent-city">城市</span>
        <span class="shoppe">专柜简称</span>
        <span class="sop-add">商场地址</span>
      </div>
      <li>
        <div class="des-item1 cent">东莞市</div>
        <div class="des-item2 cent">东莞海雅东城店</div>
        <div class="des-item3 cent">
          广东省东莞市东城区东城大道世博广
          场A座海雅百货三楼伊维斯专柜
        </div>
      </li>
      <li>
        <div class="des-item1 cent">广州市</div>
        <div class="des-item2 cent">广州广百北京路店</div>
        <div class="des-item3 cent">
          广东省广州市越秀区北京路295号广
百百货五楼伊维斯专柜
        </div>
      </li>
      <li>
        <div class="des-item1 cent">广州市</div>
        <div class="des-item2 cent">广州广百中怡店</div>
        <div class="des-item3 cent">
          广东省广州市天河区天河路200号三
楼伊维斯专柜
        </div>
      </li>
      <li>
        <div class="des-item1 cent">广州市</div>
        <div class="des-item2 cent">广州万达百货</div>
        <div class="des-item3 cent">
          广东省广州市白云区云城东路507号
万千百货三楼伊维斯专柜
        </div>
      </li>
    </ul>
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
@import url('./storeimage.less');
</style>
