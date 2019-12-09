<template>
    <div>
        <detail-banner
        :sightName="sightName"
        :bannerImg="bannerImg"
        :bannerImgs="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-desc :desc="desc"></detail-desc>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailDesc from './components/Desc'
import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailDesc
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      desc: ''
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      if (res.status === 200) {
        let data = res.data.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.desc = data.desc
      } else {
        console.log('detail err')
      }
    }
  },
  activated () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
    .content
        height: 50rem
</style>
