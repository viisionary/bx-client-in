<template>
  <div>
    <header class="header-content">
      <span class="back" @click="back">返回</span>
      <span class="title">全部保单</span>
    </header>
    <div class="content">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">全部</mt-tab-item>
        <mt-tab-item id="2">待支付</mt-tab-item>
        <mt-tab-item id="3">保障中</mt-tab-item>
        <mt-tab-item id="4">待续保</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected" :swipeable="true">
        <mt-tab-container-item id="1">
          <div class="deal" v-for="(value, key) in insuranceDeal" :key="key">
            <div class="title">{{value.insuranceName}}</div>
            <div class="info">
              <div class="tit">投保人信息</div>
              <div class="name">{{value.userInfo.realname}}</div>
              <div class="id">{{value.userInfo.number}}</div>
            </div>
            <div class="insured-info">
              <div class="tit">被投保人信息</div>
              <div class="name">{{value.insured.realname}}</div>
              <div class="id">{{value.insured.number}}</div>
            </div>
            <div class="info-content">
              <div class="left">投保时间</div>
              <div class="right">{{value.dealTime}}</div>
            </div>
            <div class="info-content">
              <div class="left">过期时间</div>
              <div class="right">{{value.expiration}}</div>
            </div>
            <div class="sq" @click="sqlp(value)">申请理赔</div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class="deal" v-for="(value, key) in ins2" :key="key">
            <div class="title">{{value.insuranceName}}</div>
            <div class="info">
              <div class="tit">投保人信息</div>
              <div class="name">{{value.userInfo.realname}}</div>
              <div class="id">{{value.userInfo.number}}</div>
            </div>
            <div class="insured-info">
              <div class="tit">被投保人信息</div>
              <div class="name">{{value.insured.realname}}</div>
              <div class="id">{{value.insured.number}}</div>
            </div>
            <div class="info-content">
              <div class="left">投保时间</div>
              <div class="right">{{value.dealTime}}</div>
            </div>
            <div class="info-content">
              <div class="left">过期时间</div>
              <div class="right">{{value.expiration}}</div>
            </div>
            <div class="sq" @click="sqlp(value)">申请理赔</div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
        </mt-tab-container-item>
      </mt-tab-container>

    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import split2 from '../always/split2.vue'
export default{
  data () {
    return {
      selected: '1'
    }
  },
  props: {},
  methods: {
    ...mapActions(['getInsuranceDeal']),
    back () {
      this.$router.go(-1)
    },
    sqlp (value) {
      console.log(value)
    }
  },
  components: {
    split2
  },
  computed: {
    ...mapGetters(['insuranceDeal']),
    ins2 () {
      if (!this.insuranceDeal) {
        return 0
      }
      return this.insuranceDeal.filter((a) => { return a.state === 0 })
    }
  },
  created () {
    this.getInsuranceDeal()
  }
}
</script>

<style scoped lang="sass">
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
  .content
    margin-top: 50px
    .deal
      padding: 10px 20px
      border-bottom: 1px solid #dbdbdb
      .title
      .info
        .tit
        .name
          display: inline-block
        .id
          display: inline-block
      .insured-info
        .tit
        .name
          display: inline-block
        .id
          display: inline-block
      .info-content
        .left
          display: inline-block
        .right
          display: inline-block
</style>
