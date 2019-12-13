<template>
    <div class="header">
        <div class="header-left">
            <router-link to="/login">
                <div v-show="!ifLogin" class="login">登录</div>
            </router-link>
            <router-link to="/mine">
                <div v-show="ifLogin" class="login mine">我的</div>
            </router-link>
        </div>
        <div class="header-input">
            <label>
                <span class="iconfont">&#xe632;</span>
                <input class="search-input"
                       type="text"
                       placeholder="输入城市/景点/游玩主题"/>
            </label>
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{ this.city}}
                <span class="iconfont arrow-icon">&#xe64a;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data () {
    return {
      ifLogin: false
    }
  },
  name: 'HomeHeader',
  created () {
    if (this.$store.state.ID !== '') {
      this.ifLogin = true
      console.log('动态密码:' + this.$store.state.ID)
    } else {
      console.log('请登录！！')
    }
  },
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        display: flex
        line-height: $headerHeight
        background: $bgColor
        color: #fff

        .header-left
            width: .64rem
            float: left

            .login
                min-width: 1rem
                float: left
                text-align: center
                color: #fff

        .header-input
            flex: 1
            height: .64rem
            line-height: .64rem
            margin-top: .12rem
            margin-left: .3rem
            padding-left: .2rem
            background: #fff
            border-radius: .1rem
            color: #ccc

            .search-input
                width: 90%
                color: #666
                margin-bottom: .11rem

        .header-right
            min-width: 1.04rem
            padding: 0 .1rem
            float: right
            text-align: center
            color: #fff

            .arrow-icon
                margin-left: -.04rem
                font-size: .24rem
</style>
