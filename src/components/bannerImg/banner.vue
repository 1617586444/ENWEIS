<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide banner-sw">
          <img src="../../assets/images/微信图片_20190404110425.png" alt="">
        </div>
        <div class="swiper-slide banner-sw">
          <img src="../../assets/images/微信图片_20190404110425.png" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return{
      // swiper 轮播图的实例对象
      mySwiper: null
    }
  },
  methods: {
      initSeiper () {
      this.mySwiper = new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        },
         // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
      });
    }
  },
  created() {
    this.initSeiper()
  },
  mounted() {
    this.initSeiper()
  }
}
</script>

<style lang="less" scope>
  .banner-sw{
    width:100%;
    height:100%;
    img{
      height: 100%;
      width: 100%;
    }
  }
  .swiper-container {
    width: 100%;
    height: 100%;
}
</style>
