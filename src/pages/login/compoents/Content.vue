<template>
    <div class="content">
        <div class="lab">
            <label>
                <input class="us"
                       type="text"
                       v-model="us"
                       placeholder="邮箱号"/>
            <input class="ps"
                   type="text"
                   v-model="ps"
                   placeholder="登录密码"/><br/>
            </label>

        <button class="login"
                v-on:click="sendLoginMsg()">
            登录
        </button>
        </div>
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
        .lab
            width: 188px
            margin : 0 auto

            .us
                height: 0.8rem
                margin-top: 3rem
                border: 1px solid #666

            .ps
                height: 0.8rem
                margin-top: .2rem
                border: 1px solid #666
        .login
            width :188px
            height: 36px
            background-color: #2d78f4
            margin-top: .2rem
            border-radius: 1rem
            color:#fff

        .register
            margin-top: .4rem
</style>
