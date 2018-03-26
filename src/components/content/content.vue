<template>
  <div>
    <router-view></router-view>
    <mt-tabbar v-model="menuSelected" :fixed="true" class="tabbar">
      <mt-tab-item id="index">
        <icon class="nav-icon" name="home" scale="2"></icon>
        <span class="nav-title">首页</span>
      </mt-tab-item>
      <mt-tab-item id="insurance">
        <icon class="nav-icon" name="umbrella" scale="2"></icon>
        保险
      </mt-tab-item>
      <mt-tab-item id="user">
        <icon class="nav-icon" name="user" scale="2"></icon>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'
export default{
  data () {
    return {
      registerInfo: {
        account: '',
        pwd: ''
      },
      menuSelected: 'index'
    }
  },
  name: 'App',
  methods: {
    userRegister () {
      this.$store.dispatch('register', this.registerInfo).then((res) => {
        console.log('dispatch完毕')
      })
    }
  },
  watch: {
    menuSelected () {
      if (this.menuSelected === 'index') {
        this.$router.push('/')
      } else {
        this.$router.push(this.menuSelected)
      }
    }
  },
  components: {
    Icon
  }
}
</script>

<style scoped lang="sass">
  .nav-icon
    margin: 0 auto
    display: block
</style>
