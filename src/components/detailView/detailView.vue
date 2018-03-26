<template>
  <div class="detail-view">
    <!--{{data.coverage}}-->
    <header class="header-content">
      <span class="title">产品详情</span>
    </header>
    <div class="content">
      <img :src=data.avatar alt="" class="avatar">
      <div class="info-content">
        <div class="name">{{data.name}}</div>
        <div class="info">{{data.info}}</div>
      </div>
      <split2></split2>
      <div class="footbar">
        <div class="share">
          <icon name="home" scale="1.5" class="icon"></icon>
          <span class="text">分享</span>
        </div>
        <div class="service">
          <icon name="home" scale="1.5" class="icon"></icon>
          <span class="text">在线客服</span>
        </div>
        <div class="payment" @click="confirmOrder">
          <span class="price">{{data.price}}元起</span>
          <span class="submit">立即投保</span>
        </div>
      </div>
    </div>
    <confirm-order class="confirm" :dealDetail="dealDetail" v-show="confirmShow"></confirm-order>
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'
import split2 from '../../components/always/split2.vue'
import confirmOrder from '../../components/confirmOrder/comfirmOrder.vue'
import { mapActions, mapGetters } from 'vuex'
export default{
  data () {
    return {
      plan: '',
      // v-moudel
      dealDetail: {
        name: this.data.name,
        period: this.data.precept.period,
        price: this.data.price,
        type: this.data.type,
        _id: this.data._id,
        quota: this.data.quota
      },
      confirmShow: false
    }
  },
  props: {
    data: {
      type: Object
    },
    detail: {
      type: Object
    }
  },
  methods: {
    ...mapActions(['getUserInfo']),
    confirmOrder () {
      if (this.userInfo.hasOwnProperty('account')) {
        this.confirmShow = true
      } else {
        this.$router.push('login')
      }
    }
  },
  components: {
    Icon, split2, confirmOrder
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  created () {
    this.getUserInfo()
  }
}
</script>

<style scoped lang="sass">
.detail-view
  z-index: 10000
  .header-content
    width: 100%
    position: fixed
    top: 0
    text-align: center
    background-color: #fff
    height: 50px
    line-height: 50px
    border-bottom: 1px solid #dbdbdb
    .title
      font-size: 18px
      font-weight: 600
  .content
    margin-top: 50px
    font-size: 0
    .avatar
      width: 100%
      height: 180px
    .info-content
      padding: 3px 10px 10px 10px
      .name
        font-size: 14px
        font-weight: 700
      .info
        font-size: 12px
    .footbar
      width: 100%
      height: 50px
      background-color: #fff
      position: fixed
      bottom: 0
      text-align: center
      border-top: 1px solid #dbdbdb
      .share
        display: inline-block
        width: 80px
        color: #808080
        margin-top: 5px
        .text
          display: block
          margin: 0 auto
          font-size: 12px
      .service
        display: inline-block
        width: 80px
        color: #808080
        margin-top: 5px
        .text
          display: block
          margin: 0 auto
          font-size: 12px
      .payment
        display: inline-block
        background-color: #87b7ff
        padding: 0 20px
        width: calc(100% - 200px)
        height: 50px
        line-height: 50px
        color: #fff
        float: right
        .price
          font-size: 16px
          font-weight: 400
          margin-right: 10px
        .submit
          font-size: 16px
          font-weight: 400
  .confirm
    background-color: #fff
    z-index: 100
    position: fixed
    top: 0
    width: 100%
    height: 100%
</style>
