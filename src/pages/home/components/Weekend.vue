<template>
    <div>
        <div class="title">周末去哪儿</div>
            <div class="item" v-for="item of list"
                 :key="item.id">
                <img class="item-img" :src="item.imgUrl"/>
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
            </div>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
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
        padding-bottom: 10%

        .item-img
            width:100%

        .item-title
            font-size:.30rem
            padding: .10rem
            line-height: .50rem
            ellipsis()

        .item-desc
            padding:.1rem
            height: 1.2rem
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
