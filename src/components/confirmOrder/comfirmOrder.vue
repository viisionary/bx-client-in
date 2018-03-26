<template>
  <div class="confirmOrder">
    <header class="header-content">
      <span class="title">确认订单</span>
    </header>
    <div class="content">
      <div class="insuranceDetail">
        <div class="title">{{dealDetail.name}}</div>
        <div class="period">保障期限： {{dealDetail.period}}年</div>
        <div class="quota">保障额度： {{dealDetail.quota}}</div>
      </div>
      <div class="info-content">
        <div class="title">投保人信息</div>
        <div class="info" v-if="userInfo.identityInformation">
          <div class="idinfo">{{userInfo.identityInformation.realname}}</div>
          <div class="idinfonum">{{userInfo.identityInformation.number}}</div>
        </div>
        <div class="info-c" v-else @click="fillInfo">完善个人信息</div>
      </div>
      <split2></split2>
      <div class="insuredInfo-content">
        <div class="title-content">
          <div class="title">被保人信息</div>
          <div class="forself">
            <span>为本人投保</span>
            <mt-switch v-model="self" class="switch"></mt-switch>
          </div>
        </div>
        <div class="insured" v-if="insuredShow" v-show="!self">
          <div class="info">
            <div class="idinfo">{{insured.realname}}</div>
            <div class="idinfonum">{{insured.number}}</div>
          </div>
          <div class="insuredSelect" @click="insuredSelect"> 更改被保人</div>
        </div>
        <div class="insuredSelect" @click="insuredSelect" v-else v-show="!self">+ 选择被保人</div>
      </div>
      <!--<div class="right">{{userInfo.commonInsured}}</div>-->
      <div class="oderInfo">
        <mt-checklist v-model="valued" :options="op"></mt-checklist>
      </div>
    </div>
    <div class="payment" @click="payment">立即支付</div>
    <insuredList class="list" :commonInsured="userInfo.commonInsured" v-show="commonInsuredShow" @choose="chooseInsured"></insuredList>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import split2 from '../../components/always/split2.vue'
import insuredList from '../../components/insuredList/insuredList.vue'
import { Toast } from 'mint-ui'
export default{
  data () {
    return {
      valued: [],
      self: false,
      op: [
        {
          label: '我已阅读并了解',
          value: 'true'
        }
      ],
      commonInsuredShow: false,
      insured: {},
      insuredShow: false
    }
  },
  props: {
    dealDetail: {
      type: Object
    }
  },
  watch: {
    insured () {
      if (this.insured) {
        this.insuredShow = true
      }
    }
  },
  methods: {
    ...mapActions(['getUserInfo', 'addInsuranceDeal']),
    payment () {
      // 先提交一次信息。状态为待支付 0，
      // 路由到另一页面 支付成功 状态为1， 暂时不写，个人资料里只有待支付
      let dealInfo = {
        type: this.dealDetail.type,
        userId: this.userInfo._id,
        userAccount: this.userInfo.account,
        insuranceId: this.dealDetail._id,
        insuranceName: this.dealDetail.name,
        price: this.dealDetail.price,
        period: this.dealDetail.period,
        state: 0,
        userInfo: {
          realname: this.userInfo.identityInformation.realname,
          typeOfCertificate: this.userInfo.identityInformation.typeOfCertificate,
          number: this.userInfo.identityInformation.number,
          gender: this.userInfo.identityInformation.gender,
          socialInsurance: this.userInfo.identityInformation.socialInsurance
        },
        insured: {
          realname: this.insured.realname,
          typeOfCertificate: this.insured.typeOfCertificate,
          number: this.insured.number,
          gender: this.insured.gender,
          socialInsurance: this.insured.socialInsurance
        }
      }
      if (this.self) {
        dealInfo.insured = dealInfo.userInfo
      }
      if (this.isEmpty(dealInfo.insured)) {
        Toast('请选择被投保人')
        return
      }
      if (this.isEmpty(this.valued)) {
        Toast('请同意相关法律条款')
        return
      }
      this.addInsuranceDeal(dealInfo).then((res) => {
        if (res.data.msg === 'success') {
          this.$router.push('payment')
          console.log('成功')
        } else {
          Toast(res.data.msg)
        }
      })
    },
    insuredSelect () {
      this.commonInsuredShow = true
    },
    chooseInsured (value) {
      this.commonInsuredShow = false
      this.insured = value
    },
    isEmpty (value) {
      for (let key in value) {
        if (value[key]) {
          return false
        }
      }
      return true
    },
    fillInfo () {
      this.$router.push('/fillidinformation')
    }
  },
  components: {
    split2, insuredList
  },
  computed: {
    ...mapGetters(['userInfo']),
    insuredChange () {
      return this.insured
    }
  },
  created () {
  }
}
</script>

<style scoped lang="sass">
.confirmOrder
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
  .content
    margin-top: 50px
    .insuranceDetail
      background-color: #d3eaff
      padding: 10px 20px 10px 30px
    .info-content
      .title
        border-bottom: 1px solid #dbdbdb
        background-color: #fff
        padding: 10px 20px
        font-size: 16px
      .info
        padding: 10px 20px
        .idinfo
          display: inline-block
        .idinfonum
          display: inline-block
          float: right
      .info-c
        border-radius: 15px
        border: 1px solid #87b9ff
        color: #87b9ff
        width: 100px
        padding: 10px
        margin: 10px auto
    .insuredInfo-content
      .title-content
        background-color: #fff
        border-bottom: 1px solid #dbdbdb
        font-size: 16px
        height: 50px
        vertical-align: top
        .title
          display: inline-block
          line-height: 50px
          padding-left: 20px
        .forself
          display: inline-block
          float: right
          line-height: 50px
          .switch
            display: inline-block
            vertical-align: top
            margin-top: 10px
            margin-left: 10px
      .insured
        .info
          padding: 10px 20px
          .idinfo
            display: inline-block
          .idinfonum
            display: inline-block
            float: right
      .insuredSelect
        text-align: center
        font-size: 16px
        color: #87b9ff
        text-decoration: underline
        margin: 20px
    .oderInfo
      margin-top: 35px
  .payment
    position: fixed
    bottom: 0
    right: 0
    display: inline-block
    background-color: #87b7ff
    padding: 0 20px
    width: calc(100% - 200px)
    height: 50px
    line-height: 50px
    color: #fff
    font-size: 16px
    font-weight: 400
  .list
    background-color: #fff
    height: 100%
    width: 100%
    z-index: 1000
    position: fixed
    top: 0
</style>
