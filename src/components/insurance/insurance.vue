<template>
  <div class="insurance">
    <mt-navbar v-model="navSelected">
      <mt-tab-item id="1">全部</mt-tab-item>
      <mt-tab-item id="2">成人</mt-tab-item>
      <mt-tab-item id="3">儿童</mt-tab-item>
      <mt-tab-item id="4">老人</mt-tab-item>
      <mt-tab-item id="5">家庭</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="navSelected" :swipeable="true" :cancelable="false">
      <mt-tab-container-item id="1" :cancelable="false">
        <detail :detail="detail" v-for="(detail, key) in insurance" :key="key" @detailShow="showFun"></detail>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <detail :detail="detail" v-for="(detail, key) in insurance" :key="key" v-if="detail.type=='成人'" @detailShow="showFun"></detail>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <detail :detail="detail" v-for="(detail, key) in insurance" :key="key" v-if="detail.type=='儿童'" @detailShow="showFun"></detail>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <detail :detail="detail" v-for="(detail, key) in insurance" :key="key" v-if="detail.type=='老人'" @detailShow="showFun"></detail>
      </mt-tab-container-item>
      <mt-tab-container-item id="5">
        <detail :detail="detail" v-for="(detail, key) in insurance" :key="key" v-if="detail.type=='成人'" @detailShow="showFun"></detail>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import detail from '../../components/detail/detail.vue'
export default{
  data () {
    return {
      navSelected: '1',
      showDetail: false,
      detailinfo: {}
    }
  },
  props: {},
  methods: {
    ...mapActions([
      'getInsurance'
    ]),
    showFun (data) {
      this.detailinfo = data
      // this.showDetail = true
      // 路由方式..
      this.$router.push({name: 'detailView', params: {data: data}})
    },
    closeShow () {
      this.showDetail = false
    }
  },
  components: {
    detail
  },
  computed: {
    ...mapGetters([
      'insurance'
    ])
  },
  created () {
    this.getInsurance()
  }
}
</script>

<style scoped lang="sass">
.insurance
  margin-bottom: 50px
.detailshow
  position: fixed
  top: 0
  height: calc(100% + 50px)
  z-index: 100000
  width: 100%
  background-color: rgb(226, 226, 226)
</style>
