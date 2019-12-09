<template>
    <div>
        <mine-header></mine-header>
        <mine-content></mine-content>
    </div>
</template>

<script>
import MineHeader from './compoents/Header'
import MineContent from './compoents/Content'

export default {
  name: 'Login',
  data () {
    return {
      data: []
    }
  },
  components: {
    MineHeader,
    MineContent
  }

}
</script>

<style lang="stylus" scoped>

</style>
