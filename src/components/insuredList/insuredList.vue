<template>
  <div class="list">
    <header class="header-content">
      <span class="title">选择被投保人</span>
    </header>
    <div class="content">
      <div class="insured-content" v-for="(insured, key) in commonInsured" :key="key" @click="choose(insured)">
        <div class="title">常用联系人  {{key+1}}
          <div class="info-content">{{insured}}</div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default{
  data () {
    return {}
  },
  props: {
    commonInsured: {
      type: Array
    }
  },
  methods: {
    ...mapActions([]),
    choose (insured) {
      this.$emit('choose', insured)
    }
  },
  components: {},
  computed: {
    ...mapGetters([])
  },
  created () {}
}
</script>

<style scoped lang="sass">
.list
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
    .insured-content
      padding: 10px 20px
</style>
