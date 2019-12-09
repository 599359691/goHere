<template>
    <div>
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-hot-recommend :list="hotRecommendList"></home-hot-recommend>
        <home-recommend :list="recommendList"></home-recommend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeRecommend from './components/Recommend'
import HomeHotRecommend from './components/HotRecommend'
import axios from 'axios'
import {mapState} from 'vuex'

export default {
  name: 'Home',
  components: {
    HomeHotRecommend,
    HomeRecommend,
    HomeHeader,
    HomeSwiper
  },
  data () {
    return {
      lastCity: [],
      swiperList: [],
      recommendList: [],
      hotRecommendList: []
    }
  },
  mounted () {
    this.getHomeInfo()
    this.lastCity = this.city
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index?city=' + this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      if (res.data.res === true) {
        this.swiperList = res.data.swiper
        this.recommendList = res.data.recommend
        this.hotRecommendList = res.data.hotRecommend
      }
    },
    // 访问首页时先向后端发送本地储存的lastId，后端检查数据库是否有有效值
    // 如果值无效则清空值并且刷新页面
    checkLogin () {
      if (this.$store.state.ID !== '') {
        let lastId = {lastId: this.$store.state.ID}
        axios.post('/account/checkLogin', lastId).then((res) => {
          if (res.data.err === -5) {
            console.log(res.data.msg)
            this.$store.commit('changeUserID', '')
            // 跳转首页
            this.$router.push({path: '/'})
            this.$router.go(0)
          }
        })
      }
    }
  },
  // 向后端发送缓存的lastId,检查是否有效
  created () {
    this.checkLogin()
  }
}
</script>

<style>
</style>
