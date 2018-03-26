<template>
  <div class="payment">
    pay支付成功 即将跳转
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default{
  data () {
    return {}
  },
  props: {},
  methods: {
    ...mapActions([]),
    timeOut () {
      this.$router.push('user')
    }
  },
  components: {},
  computed: {
    ...mapGetters([])
  },
  created () {
    setTimeout(this.timeOut, 3000)
  }
}
</script>

<style scoped lang="sass">
  .payment
    height: 100%
    margin: auto
</style>
