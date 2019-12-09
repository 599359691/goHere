<template>
    <div class="content">
        <router-link class="text"
               to="/text">
            我的文章
        </router-link>
        <button class="login"
                v-on:click="exitLogin()">
            退出登录
        </button>
    </div>
</template>

<script>

export default {

  name: 'Content',
  data () {
    return {

    }
  },
  methods: {
    exitLogin () {
      // 清空ID数据
      this.$store.commit('changeUserID', '')
      this.$router.push({path: '/'})
      this.$router.go(0)
    }
  }
}
</script>

<style lang="stylus" scoped>
    .content
        margin-top: 1rem

    .us
        height: 1rem
        margin-top: 3rem

    .ps
        height: 1rem
        margin-top: .5rem

    .login
    .register
        margin-top: .4rem
</style>
