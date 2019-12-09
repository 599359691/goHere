<template>
    <div>
        <div class="item">
            <div class="item-title border-bottom">
              {{desc}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailDesc',
  props: {
    desc: String
  }
}
</script>

<style lang="stylus" scoped>
    .item-title
        line-height: .8rem
        font-size: .32rem
        padding: 0 .2rem
</style>
