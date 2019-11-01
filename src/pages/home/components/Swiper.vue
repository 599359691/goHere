<template>
    <div class="wrapper">
    <swiper :options="swiperOption"  >
        <swiper-slide v-for="item of swiperList" :key="item.id">
             <img class="swiper-img"
             :src="item.imgUrl"/>
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: '//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/387c5e767cccc7a3172ed7ea15b50727.png'
      }, {
        id: '0002',
        imgUrl: '//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/abe3418971067bd655fb2794d6e2eeec.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
    .wrapper  >>> .swiper-pagination-bullet-active
        background :#fff
    .wrapper
        overflow :hidden
        width:100%
        height:0
        padding-bottom :31.25%
        background:#eee
.swiper-img
   width:100%
</style>
