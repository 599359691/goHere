<template>
    <div class="content">
        <label>
            <input class="us"
                   type="text"
                   v-model="us"
                   placeholder="注册新的邮箱号"/>
            <input class="ps"
                   type="text"
                   v-model="ps"
                   placeholder="登录密码"/>
            <input class="psCheck"
                   type="text"
                   v-model="ps"
                   placeholder="请再输入一次密码"/>
        </label>
        <button class="login"
                v-on:click="sendRegistMsg">
            登录
        </button>
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
    sendRegistMsg: function () {
      let loginData = {us: this.us, ps: this.ps}
      axios.post('/account/user/reg', loginData)
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
