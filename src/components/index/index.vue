<template>
  <div class="index">
    <header class="header-content">
      <span class="title">阳光保险</span>
    </header>
    <div class="content">
      <div class="swipe">
        <mt-swipe :auto="4000">
          <mt-swipe-item>
            <img class="adv" src="http://p5mm9eqwz.bkt.clouddn.com/wallls.com_137450.jpg" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img class="adv" src="http://p5mm9eqwz.bkt.clouddn.com/wallls.com_184790.jpg" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img class="adv" src="http://p5mm9eqwz.bkt.clouddn.com/wallls.com_187122.jpg" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="nav">
        <div class="nav-item">
          <icon name="themeisle" scale="1.5" class="icona"></icon>
          <span>个性推荐</span>
        </div>
        <div class="nav-item">
          <icon name="themeisle" scale="1.5" class="iconb"></icon>
          <span>健康公益</span>
        </div>
        <div class="nav-item">
          <icon name="diamond" scale="1.5" class="iconc"></icon>
          <span>个性推荐</span>
        </div>
        <div class="nav-item">
          <icon name="themeisle" scale="1.5" class="icond"></icon>
          <span>在线预约</span>
        </div>
        <div class="nav-item">
          <icon name="themeisle" scale="1.5" class="icone"></icon>
          <span>保单查询</span>
        </div>
        <div class="nav-item">
          <icon name="themeisle" scale="1.5" class="iconf"></icon>
          <span>自助理赔</span>
        </div>
        <div class="nav-item">
          <icon name="themeisle" scale="1.5" class="icong"></icon>
          <span>医院查询</span>
        </div>
        <div class="nav-item">
          <icon name="themeisle" scale="1.5" class="iconh"></icon>
          <span>在线客服</span>
        </div>
      </div>
      <split2></split2>
      <div class="text-swipe">
        <div class="title">
          <icon name="home" scale="2"></icon>
        </div>
        <div class="swipe-content">
          <mt-swipe :auto="8000" :show-indicators="false">
            <mt-swipe-item>这里是内容</mt-swipe-item>
            <mt-swipe-item>第二条----------------------------</mt-swipe-item>
            <mt-swipe-item>第三条</mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
      <split2></split2>
    </div>
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'
import split2 from '../../components/always/split2.vue'
export default{
  data () {
    return {}
  },
  props: {},
  methods: {},
  components: {
    Icon, split2
  },
  computed: {},
  created () {}
}
</script>

<style scoped lang="sass">
  .index
    .header-content
      width: 100%
      position: fixed
      top: 0
      text-align: center
      background-color: #fff
      height: 50px
      line-height: 50px
      .title
        font-size: 18px
        font-weight: 600
    .content
      margin-top: 50px
      .swipe
        background-color: #ffa2b4
        width: 100%
        height: 150px
        img
          width: 100%
          height: 100%
      .nav
        font-size: 0
        .nav-item
          display: inline-block
          width: calc((100% - 3px)/4)
          border-right: 1px solid #e4e4e4
          border-bottom: 1px solid #e4e4e4
          text-align: center
          padding: 10px 0
          color: #6e6e6e
          &:nth-child(4), &:nth-child(8)
            border-right: none
          &:nth-child(5), &:nth-child(6), &:nth-child(7), &:nth-child(8)
            border-bottom: none
          span
            margin-top: 10px
          .icona
            color: #ff606c
          .iconb
            color: #939aff
          span
            display: block
            font-size: 12px
      .text-swipe
        height: 40px
        font-size: 0
        color: #6e6e6e
        .title
          display: inline-block
          width: 30px
          margin: 5px 10px
          vertical-align: top
        .swipe-content
          width: calc(100% - 50px)
          height: 40px
          line-height: 40px
          display: inline-block
          font-size: 12px
          color: black
</style>
