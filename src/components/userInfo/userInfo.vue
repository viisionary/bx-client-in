<template>
  <div class="userinfo">
    <header class="header-content">
      <span class="back" @click="back">返回</span>
      <span class="title">个人信息</span>
    </header>
    <split2 class="split"></split2>
    <mt-cell class="avatar" title="头像" isLink>
      <img class="avatarimg" :src="userInfo.avatar ? userInfo.avatar : 'http://p5mm9eqwz.bkt.clouddn.com/defaultavatar.jpg' ">
    </mt-cell>
    <split2></split2>
      <mt-cell title="身份信息" is-link to="/fillidinformation">
        <span style="color: orange">请完善身份信息</span>
      </mt-cell>
    <split2></split2>
      <mycell :title="'客户经理'" @click="unhandle" :info="'去绑定'"></mycell>
      <mycell :title="'健康大使'" @click="unhandle" :info="'去开启'"></mycell>
      <mycell :title="'退出登录'" @popShow="userlogout"></mycell>
  </div>
</template>

<script>
import split2 from '../../components/always/split2.vue'
import { mapActions, mapGetters } from 'vuex'
import { Toast } from 'mint-ui'
import MtCell from '../../../node_modules/mint-ui/packages/cell/src/cell.vue'
import mycell from '../mycell/mycell.vue'
export default{
  data () {
    return {
    }
  },
  props: {},
  methods: {
    ...mapActions(['logout']),
    userlogout () {
      this.logout()
      this.$router.push('/')
    },
    unhandle () {
      Toast('功能未完善，敬请期待')
    },
    back () {
      this.$router.go(-1)
    }
  },
  components: {
    MtCell,
    split2,
    mycell
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  created () {}
}
</script>

<style scoped lang="sass">
.userinfo
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
      margin-left: -20px
    .back
      float: left
      margin-left: 10px
      color: #87b7ff
      text-decoration: underline
  .split
    margin-top: 50px
    border-bottom: 0
  .avatar
    height: 80px
    .avatarimg
      width: 50px
      height: 50px
      margin-top: 15px
  .fill
    position: fixed
    top: 0
    width: 100%
    height: 100%
    background-color: #ff7e72
</style>
