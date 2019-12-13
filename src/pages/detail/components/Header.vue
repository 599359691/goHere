<template>
    <div>
        <div v-show="showAbs">
        <button @click="goBack"
                class="header-abs">
            <span class="iconfont header-abs-back">&#xe624;</span>
        </button>
        </div>
        <div class="header-fixed"
             v-show="!showAbs"
             :style="opacityStyle">
            <button @click="goBack">
                <span class="iconfont header-fixed-back">&#xe624;</span>
            </button>
            内容详情
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',

  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    },
    goBack () {
      this.$router.go(-1)
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .header-abs
        position: absolute
        left: .2rem
        top: .2rem
        line-height: .8rem
        width: .8rem
        height: .8rem
        border-radius: .4rem
        text-align: center
        background: rgba(0, 0, 0, .8)

    .header-edit
         position: absolute
         right: .2rem
         top: .2rem
         line-height: .8rem
         width: 1.2rem
         height: .8rem
         text-align: center
         text-color:#fff
         background: rgba(0, 0, 0, .8)

        .header-abs-back
            color: #fff
            font-size: .4rem

    .header-fixed
        z-index: 2
        position: fixed
        top: 0
        left: 0
        right: 0
        height: $headerHeight
        line-height: $headerHeight
        text-align: center
        color: #fff
        font-size: .4rem
        background: $bgColor

        .edit
            position: absolute
            right: .1rem
            width: 1rem
            font-size: .4rem
            color: #fff

        .header-fixed-back
            position: absolute
            top: .1rem
            left: 0
            width: .64rem
            font-size: .4rem
            color: #fff
</style>
