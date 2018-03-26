<template>
  <div class="login">
    <img src="http://p5mm9eqwz.bkt.clouddn.com/wallls.com_107974.jpg" alt="" class="show">
    <div class="content">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username" :state="usernamestate"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" :state="passwordstate"></mt-field>
      <mt-button type="primary" size="large" class="bt-submit" :disabled="submitable" @click="userRegister">注册</mt-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { Toast } from 'mint-ui'
export default{
  data () {
    return {
      username: '',
      password: ''
    }
  },
  watch: {
  },
  props: {},
  methods: {
    ...mapActions(['register']),
    userRegister () {
      this.register({account: this.username, pwd: this.password}).then((res) => {
        Toast({
          message: res.data.msg,
          position: 'bottom',
          duration: 5000
        })
        if (res.data.msg === 'success') {
          this.$router.push('login')
        }
      })
    }
  },
  components: {},
  computed: {
    usernamestate () {
      if (this.username.length > 6) {
        return 'success'
      } else if (this.username.length > 0) {
        return 'error'
      } else {
        return ''
      }
    },
    passwordstate () {
      if (this.password.length > 6) {
        return 'success'
      } else if (this.password.length > 0) {
        return 'error'
      } else {
        return ''
      }
    },
    submitable () {
      return !(this.usernamestate === 'success' && this.passwordstate === 'success')
    }
  },
  created () {}
}
</script>

<style scoped lang="sass">
  .login
    .show
      width: 100%
      height: 180px
    .content
      padding: 0  10px
      .bt-submit
        margin-top: 10px
</style>
