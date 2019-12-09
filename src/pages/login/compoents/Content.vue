<template>
    <div class="content">
        <label>
            <input class="us"
                   type="text"
                   v-model="us"
                   placeholder="邮箱号"/>
            <input class="ps"
                   type="text"
                   v-model="ps"
                   placeholder="登录密码"/>
        </label>
        <button class="login"
                v-on:click="sendLoginMsg()">
            登录
        </button>
        <router-link to="/regist">
        <div class="register">新用户注册</div>
        </router-link>
    </div>
</template>

<script>
import axios from 'axios'

export default {

  name: 'componentsContent',
  data () {
    return {
      us: '',
      ps: ''
    }
  },
  methods: {
    sendLoginMsg: function () {
      if (this.us && this.ps !== '') {
        let loginData = {us: this.us, ps: this.ps}
        axios.post('/account/login', loginData).then((res) => {
          if (res.data.err === 0) {
            // Vuex储存lastID
            this.$store.commit('changeUserID', res.data.lastId)
            console.log(res.data.msg)
            this.$router.push({path: '/'})
            this.$router.go(0)
          } else {
            console.log(res.data.msg)
          }
        }).catch(function (err) {
          console.log(err)
        })
      } else {
        console.log('邮箱名或密码不能为空')
      }
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
