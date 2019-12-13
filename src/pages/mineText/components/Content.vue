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
                <div class="item-info">
                    <div class="img">
                    <img class="item-img" :src="item.bannerImg"/>
                    </div>
                    <p class="item-title">{{item.sightName}}</p>
                    <button :click="deleteText">删除</button>
                    <router-link
                            tag="div"
                            :to="'/editText/'+item._id">
                        修改
                    </router-link>
                </div>
            </router-link>
            <button :click="insertText">新增一篇游记</button>
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
    editText () {

    },
    deleteText () {

    },
    insertText () {

    }
  }
}
</script>

<style lang="stylus" scoped>
    .content
        margin-top 1.5rem

        .item
            border-bottom: 1px solid #666
            height: 2.5rem
            line-height .5rem
        .img
            margin .5rem 0
            .item-img
                width: 3rem
                float :left

</style>
