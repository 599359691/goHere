<template>
    <div>
        <div class="title"> 正在修改文章中....</div>
        <div class="content">
            <label>
                <textarea class="desc" v-model="desc"/>
            </label>
        </div>
        <button class="pushBtn"
                @click="pushData">
            提交
        </button>
    </div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
export default {
  name: 'DetailHeader',
  props: {
    desc: String
  },
  data () {
    return {
      editData: ''
    }
  },
  methods: {
    pushData () {
      let data = {editData: $('.desc').val(), detailId: this.$route.params.id, lastId: this.$store.state.ID}
      axios.post('/api/editText', data).then((data) => {
        if (data.data.code === 200) {
          alert(data.data.msg)
          this.$router.go(-1)
        } else {
          alert(data.data.msg)
          this.$router.go(-1)
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
    .title
        width :50%
        font-size: .5rem
        background :orangered
        position: absolute;
        top:0
        left:2rem

    .content
        padding:.5rem .5rem

        .desc
            width :100%
            height:8rem
            font-size: .4rem

    .pushBtn
        height:1rem
        background :orangered
        position: fixed
        bottom: 0
        width: 100%
</style>
