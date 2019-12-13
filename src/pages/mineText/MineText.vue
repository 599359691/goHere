<template>
    <div>
        <text-header></text-header>
        <text-content :list="textList"></text-content>
    </div>
</template>

<script>
import TextHeader from './components/Header'
import TextContent from './components/Content'
import axios from 'axios'

export default {
  name: 'mineText',
  components: {
    TextHeader,
    TextContent
  },
  data () {
    return {
      textList: []
    }
  },
  methods: {
    getList (res) {
      console.log(res)
      this.textList = res
    },
    sendUser () {
      if (this.$store.state.ID !== '') {
        let lastId = {lastId: this.$store.state.ID}
        axios.post('/api/mineText', lastId).then((res) => {
          this.getList(res.data)
          if (res.data.err === -5) {
            console.log(res.data.msg)
          }
        })
      }
    }
  },
  created () {
    this.sendUser()
  }
}
</script>

<style lang="stylus" scoped>

</style>
