<template>
    <div class="header">
        <router-link
                tag="div"
                to="/"
                class="header-abs">
            <div class="iconfont header-abs-back">&#xe624;</div>

        </router-link>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .header
        .header-abs
            position: absolute
            left: .2rem
            top: .2rem
            line-height: .8rem
            width: .8rem
            height: .8rem
            border-radius: .4rem
            text-align: center
            background: rgba(0, 0, 0, .8)
            .header-abs-back
                color: #fff
                font-size: .4rem
</style>
