<template>
  <div class="user">
    <header class="header-content">
      <span class="title">我的</span>
    </header>
    <div class="userInfo-content" @click="toUserinfo">
      <img class="avatar" :src="userInfo.avatar ? userInfo.avatar : 'http://p5mm9eqwz.bkt.clouddn.com/defaultavatar.jpg' ">
      <div class="username">{{ userInfo.account ? userInfo.account : '请登录' }}</div>
      <icon name="angle-right" scale="1" class="icon"></icon>
    </div>
    <split2></split2>
    <div class="insuranceDeal-content">
      <div class="title">
        <span class="left">我的保单</span>
        <span class="right" @click="ViewAllDeal">查看全部保单
        <icon name="angle-right" scale="1"></icon>
        </span>
      </div>
      <div class="content">
        <div class="bzz">
          <icon name="home" class="icon" scale="1.5"></icon>
          <span>保障中</span>
          <span class="hi">{{all}}</span>
        </div>
        <div class="dzf">
          <icon name="home" class="icon" scale="1.5"></icon>
          <span>待支付</span>
          <span class="hi">{{dzf}}</span>
        </div>
        <div class="dxb">
          <icon name="home" class="icon" scale="1.5"></icon>
          <span>待续保</span>
        </div>
      </div>
    </div>
    <split2></split2>
    <mt-cell
      title="常用被保人" to="//github.com" is-link value="带链接">
    </mt-cell>
    <mt-cell
      title="我的理赔"
      to="//github.com"
      is-link>
    </mt-cell>
  </div>
</template>

<script>
import split2 from '../../components/always/split2.vue'
import Icon from 'vue-awesome/components/Icon'
import { mapActions, mapGetters } from 'vuex'
export default{
  data () {
    return {
      username: ''
    }
  },
  props: {},
  methods: {
    ...mapActions(['getUserInfo']),
    toUserinfo () {
      if (this.userInfo.hasOwnProperty('account')) {
        this.$router.push('userinfo')
      } else {
        this.$router.push('login')
      }
    },
    ViewAllDeal () {
      if (this.userInfo.hasOwnProperty('account')) {
        this.$router.push('insuranceDeal')
      } else {
        this.$router.push('login')
      }
    }
  },
  components: {
    Icon, split2
  },
  computed: {
    ...mapGetters(['userInfo']),
    all () {
      if (!this.userInfo.insuranceDeal) {
        return 0
      }
      // 0 待支付 1保障中（支付成功）2 已关闭 3 7天内过期
      return this.userInfo.insuranceDeal.filter((a) => { return a.dealState === 1 || a.dealState === 3 }).length
    },
    dzf () {
      if (!this.userInfo.insuranceDeal) {
        return 0
      }
      return this.userInfo.insuranceDeal.filter((a) => { return a.dealState === 0 }).length
    }
  },
  created () {
    // 判断token
    this.getUserInfo()
  }
}
</script>

<style scoped lang="sass">
.user
  margin-top: 50px
  .header-content
    width: 100%
    position: fixed
    top: 0
    text-align: center
    background-color: #fff
    height: 50px
    line-height: 50px
    border-bottom: 1px solid #e2e2e2
    .title
      font-size: 18px
      font-weight: 600
  .userInfo-content
    padding: 20px 10px
    height: 50px
    .avatar
      border-radius: 3px
      width: 50px
      height: 50px
      margin-right: 10px
    .username
      font-size: 16px
      font-weight: 400
      line-height: 50px
      display: inline-block
      vertical-align: top
    .icon
      float: right
      margin-top: 15px
  .insuranceDeal-content
    .title
      padding: 0 10px
      height: 40px
      line-height: 40px
      .left
      .right
        float: right
    .content
      border-top: 1px solid #dbdbdb
      font-size: 0
      text-align: center
      div
        .hi
          position: absolute
          top: 10px
          left: 70px
          width: 15px
          height: 15px
          line-height: 15px
          font-size: 8px
          background-color: #6e6e6e
          border-radius: 50%
          color: #fff
      .bzz
        width: calc((100% - 2px)/3)
        height: 50px
        display: inline-block
        border-right: 1px solid #dbdbdb
        font-size: 12px
        padding: 10px 0
        position: relative
        span
          display: block
          margin: 0 auto
      .dzf
        width: calc((100% - 2px)/3)
        height: 50px
        display: inline-block
        border-right: 1px solid #dbdbdb
        font-size: 12px
        padding: 10px 0
        position: relative
        span
          display: block
          margin: 0 auto
        .hi
          background-color: #ff382f
      .dxb
        width: calc((100% - 2px)/3)
        height: 50px
        display: inline-block
        font-size: 12px
        padding: 10px 0
        span
          display: block
          margin: 0 auto
</style>
