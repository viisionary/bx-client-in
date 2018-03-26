<template>
  <div>
    <header class="header-content">
      <span class="back" @click="back">返回</span>
      <span class="title">身份信息</span>
      <span class="info" @click="saveInfo">保存</span>
    </header>
    <div class="cell-content">
      <mycell class="mycell" :title="'真实姓名'" :info="realNameValue"
              :inputV="true" @confirmValue="realNameConfirm"></mycell>
      <mycell class="mycell" @popShow="pop2Show" :title="'证件类型'"
              :info="certificateTypeValue"></mycell>
      <mycell class="mycell" :title="'证件号码'" :info="numberValue"
              :inputV="true" @confirmValue="numberConfirm"></mycell>
      <mycell class="mycell" style="border: none" @popShow="pop5Show" :title="'性别'"
              :info="genderValue"></mycell>
      <split2></split2>
      <mycell class="mycell" @popShow="pop6Show" :title="'有无社保'"
              :info="socialValue"></mycell>
    </div>
    <mt-popup
      class="pop"
      v-model="popShow"
      position="bottom">
      <div class="tool" @click="certificateConfirm">确定</div>
      <mt-picker :slots="typeOfCertificate" @change="onCertificateValuesChange"></mt-picker>
    </mt-popup>
    <mt-popup
      class="pop"
      v-model="genderShow"
      position="bottom"
      :showToolbar="true">
      <div class="tool" @click="genderConfirm">确定</div>
      <mt-picker :slots="gender" @change="onGenderValuesChange"></mt-picker>
    </mt-popup>
    <mt-popup
      class="pop"
      v-model="popsocialShow"
      position="bottom">
      <div class="tool" @click="socialConfirm">确定</div>
      <mt-picker :slots="social" @change="onSocialValuesChange"></mt-picker>
    </mt-popup>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import mycell from '../mycell/mycell.vue'
import split2 from '../../components/always/split2.vue'
export default{
  data () {
    return {
      popShow: false,
      genderShow: false,
      popsocialShow: false,
      typeOfCertificate: [
        {
          values: ['身份证', '护照', '军人证', '港澳台回乡证', '出生证', '户口本', '外国人永久居留身份证'],
          textAlign: 'center'
        }
      ],
      gender: [
        {
          values: ['男', '女'],
          textAlign: 'center'
        }
      ],
      social: [
        {
          values: ['有', '无'],
          textAlign: 'center'
        }
      ],
      idInfo: {},
      certificateTypeValue: '',
      cacheCertificateTypeValue: '',
      genderValue: '',
      cacheGenderValue: '',
      cacheSocialValue: '',
      socialValue: '',
      realNameValue: '',
      numberValue: ''
    }
  },
  props: {},
  methods: {
    ...mapActions(['updateId']),
    onSocialValuesChange (picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
      }
      this.cacheSocialValue = picker.getValues()[0]
    },
    onGenderValuesChange (picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
      }
      this.cacheGenderValue = picker.getValues()[0]
    },
    onCertificateValuesChange (picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
      }
      this.cacheCertificateTypeValue = picker.getValues()[0]
    },
    pop2Show () {
      this.popShow = true
    },
    pop5Show () {
      this.genderShow = true
    },
    pop6Show () {
      this.popsocialShow = true
    },
    back () {
      this.$router.go(-1)
    },
    saveInfo () {
      // 得验证
      console.log('--------修改前----------')
      console.log(this.idInformation)
      console.log('--------修改后----------')
      this.idInfo = {
        gender: this.genderValue,
        number: this.numberValue,
        realname: this.realNameValue,
        socialInsurance: this.socialValue,
        typeOfCertificate: this.certificateTypeValue
      }
      this.updateId(this.idInfo)
    },
    socialConfirm () {
      this.socialValue = this.cacheSocialValue
      this.popsocialShow = false
    },
    genderConfirm () {
      this.genderValue = this.cacheGenderValue
      this.genderShow = false
    },
    certificateConfirm () {
      this.certificateTypeValue = this.cacheCertificateTypeValue
      this.popShow = false
    },
    realNameConfirm (value) {
      this.realNameValue = value
    },
    numberConfirm (value) {
      this.numberValue = value
    },
    initData () {
      this.certificateTypeValue = this.idInformation.typeOfCertificate
      this.socialValue = this.idInformation.social ? '有' : '无'
      this.genderValue = this.idInformation.gender
      this.realNameValue = this.idInformation.realname
      this.numberValue = this.idInformation.number
    }
  },
  components: {
    mycell, split2
  },
  computed: {
    ...mapGetters(['idInformation'])
  },
  created () {
    this.initData()
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
  .info
    float: right
    margin-right: 10px
    color: #87b7ff
    text-decoration: underline
  .back
    float: left
    margin-left: 10px
    color: #87b7ff
    text-decoration: underline
.cell-content
  margin-top: 50px
.pop
  width: 100%
  .tool
    width: calc(100% - 20px)
    height: 20px
    text-align: right
    margin-top: 10px
    margin-right: 20px
</style>
