<template>
    <div>
    <edit-text-header></edit-text-header>
    <edit-text-content :desc="desc"></edit-text-content>
    </div>
</template>

<script>
import editTextHeader from './components/Header'
import editTextContent from './components/Content'
import axios from 'axios'
export default {
  name: 'editText',
  data () {
    return {
      desc: ''
    }
  },
  components: {
    editTextContent,
    editTextHeader
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/editText', {
        params: {
          id: this.$route.params.id,
          userId: this.$store.state.ID
        }
      }).then((data) => {
        this.desc = data.data.data.desc
      })
    }
  },
  activated () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
