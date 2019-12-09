<template>
    <div>
        <div class="title">周边游攻略</div>
        <ul>
            <router-link
                    tag="li"
                    class="item"
                    v-for="item of list"
                    :key="item.id"
                    :to="'/detail/'+item.id">
                <img class="item-img" :src="item.imgUrl"/>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
        line-height: .8rem
        background: #eee
        text-indent: .2rem

    .item
        float: left
        width: 48%
        padding:1%
        padding-bottom: 5%

        .item-img
            width:100%
            height:3rem

        .item-title
            font-size:.30rem
            padding: .10rem
            line-height: .50rem
            ellipsis()

        .item-desc
            padding:.1rem
            height: 1.1rem
            line-height: .40rem
            font-size:.25rem
            color: #979c93
            display:-webkit-box
            overflow:hidden
            white-space:normal
            text-overflow:ellipsis
            word-wrap:break-word
            -webkit-line-clamp:3
            -webkit-box-orient:vertical
</style>
