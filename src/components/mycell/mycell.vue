<template>
  <div class="mycell" @click="popShow">
    <span>{{title}}</span>
    <span class="info" v-show="!inputV">{{info}}</span>
    <input type="text" v-show="inputV" v-model="infoValue" class="input" @blur="confirmValue(infoValue)">
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default{
  data () {
    return {
      infoValue: this.info
    }
  },
  props: {
    title: {
      type: String
    },
    info: {
      type: String
    },
    inputV: {
      type: Boolean
    }
  },
  methods: {
    ...mapActions([]),
    popShow () {
      this.$emit('popShow')
    },
    confirmValue (value) {
      this.$emit('confirmValue', value)
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
.mycell
  height: 30px
  padding: 5px 30px 5px 10px
  line-height: 30px
  border-bottom: 1px solid #dbdbdb
  .info
    float: right
  .input
    border: 0
    float: right
    text-align: right
    font-size: 16px
    line-height: 30px
</style>
