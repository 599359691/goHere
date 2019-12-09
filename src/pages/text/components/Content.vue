<template>
    <div class="content">
        <div class="title">我的文章</div>
        <ul>
            <router-link
                    tag="li"
                    class="item border-bottom"
                    v-for="item of list"
                    :key="item._id"
                    :to="'/detail/'+item._id">
                <img class="item-img" :src="item.imgUrl"/>
                <div class="item-info">
                    <p class="item-title">{{item.sightName}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'textContent',
  data () {
    return {
    }
  },
  props: {
    list: Array
  },
  methods: {
    sendRegistMsg: function () {
    }
  }
}
</script>

<style lang="stylus" scoped>
    .content
        margin-top 1.5rem

</style>
