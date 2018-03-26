<template>
  <div class="split">
    <span>{{text}}</span>
  </div>
</template>

<script>
export default{
  data () {
    return {}
  },
  props: {
    height: {
      type: Number
    },
    text: {
      type: String
    }
  },
  methods: {},
  components: {},
  computed: {},
  created () {}
}
</script>

<style scoped lang="sass">
.split
  height: 1px
  border-top: 1px solid #ddd
  text-align: center
  span
    position: relative
    top: -10px
    background: #fff
    padding: 0 20px
</style>
