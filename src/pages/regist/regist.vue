<template>
    <div>
        <regist-header></regist-header>
        <regist-content></regist-content>
    </div>
</template>

<script>
import RegistHeader from './compoents/Header'
import RegistContent from './compoents/Content'

export default {
  name: 'Regist',
  data () {
    return {
      data: []
    }
  },
  components: {
    RegistHeader,
    RegistContent
  }

}
</script>

<style lang="stylus" scoped>

</style>
