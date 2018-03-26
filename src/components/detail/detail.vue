<template>
  <div class="detail" @click="detailShow()">
    <div class="img-content">
      <img :src=detail.avatar alt="">
    </div>
    <div class="content">
      <div class="content-left">
        <div class="name">{{detail.name}}</div>
        <div class="info">{{detail.info}}</div>
      </div>
      <div class="content-right" @click="confirmOrder">
        <div class="price">{{price}}元起</div>
      </div>
    </div>
    <div class="confirm" :dealDetail="dealDetail" v-show="confirmShow"></div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      dealDetail: {},
      confirmShow: false
    }
  },
  props: {
    detail: {
      type: Object
    }
  },
  methods: {
    typeone () {
    },
    detailShow () {
      this.$emit('detailShow', this.detail)
    },
    confirmOrder () {
      this.confirmShow = true
    }
  },
  components: {},
  computed: {
    price () {
      return this.detail.price / 100
    }
  },
  created () {}
}
</script>

<style scoped lang="sass">
.detail
  margin: 10px
  width: calc(100% - 20px)
  border: 1px solid #d0d0d0
  .img-content
    width: 100%
    img
      width: 100%
      height: 160px
  .content
    height: 40px
    padding: 3px 10px 10px 10px
    .content-left
      float: left
      .name
        font-size: 14px
        font-weight: 700
      .info
        font-size: 12px
    .content-right
      float: right
      .price
        font-size: 14px
        font-weight: 700
        color: #87b7ff
  .confirm
    position: fixed
    top: 0
    width: 100%
    height: 100%
    background-color: #bfd7ff
</style>
