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
            <input class="ps_check"
                   type="text"
                   v-model="ps_check"
                   placeholder="二次校验密码"/>
        </label>
        <button class="login"
                v-on:click="sendRegistMsg">
            注册
        </button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'registContent',
  data () {
    return {
      us: '',
      ps: '',
      ps_check: ''
    }
  },
  methods: {
    sendRegistMsg: function () {
      if (this.ps === '' || this.us === '') {
        console.log('用户名或密码不能为空！')
      } else if (this.ps_check !== this.ps && this.ps_check !== '') {
        console.log('两次输入的密码不一致！')
      } else if (this.ps_check === '') {
        console.log('请输入第二次密码')
      } else {
        if (this.us && this.ps !== '') {
          let loginData = {us: this.us, ps: this.ps}
          axios.post('/account/reg', loginData).then((res) => {
            if (res.data.err === 0) {
              this.$store.commit('changeUserID', res.data.lastId)
              console.log(res.data.lastId)
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
