<template>
    <div>
        <login-header></login-header>
        <login-content></login-content>
    </div>
</template>

<script>
import LoginHeader from './compoents/Header'
import LoginContent from './compoents/Content'

export default {
  name: 'Login',
  data () {
    return {
      data: []
    }
  },
  components: {
    LoginHeader,
    LoginContent
  }

}
</script>

<style lang="stylus" scoped>

</style>
