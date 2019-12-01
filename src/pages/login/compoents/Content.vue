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
                v-on:click="sendLoginMsg">
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
  name: 'Content',
  data () {
    return {
      us: '',
      ps: ''
    }
  },
  methods: {
    sendLoginMsg: function () {
      let loginData = {us: this.us, ps: this.ps}
      axios.post('/account/user/login', loginData).then(function (res) { // api就是http://localhost:8081,在proxy中配置过
        if (res.status === '200') {
          console.log('23456')
        } else {
          console.log('213456')
        }
      }).catch(function (res) {
        console.log(res)
      })
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
