<template>
  <div>
    <Header />
    <div class="store-pic">
      <a href="https://enweis.tmall.com/search.html"><img src="../../../assets/images/矩形 6.png" alt=""></a>
    </div>
    <div class="code-bar">
    </div>
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
  .store-pic{
    width: 100%;
    height: 100%;
    a{
      display: block;
      width: 100%;
      height: 100%;
      img{
      height: 100%;
      width: 100%;
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
