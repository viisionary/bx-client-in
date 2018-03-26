<template>
  <div class="login">
    <img src="http://p5mm9eqwz.bkt.clouddn.com/wallls.com_107974.jpg" alt="" class="show">
    <div class="ps" @click="jump">跳过</div>
    <div class="content">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <mt-button type="primary" size="large" class="bt-submit" :disabled="submitable" @click="userLogin">登录</mt-button>
      <router-link to="register" class="register">没有账号? 去注册</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default{
  data () {
    return {
      username: '',
      password: ''
    }
  },
  props: {},
  methods: {
    ...mapActions(['login']),
    userLogin () {
      this.login({account: this.username, pwd: this.password}).then((res) => {
        if (res.data.msg === 'success') {
          this.$router.push('/')
        }
      })
    },
    jump () {
      this.$router.push('/')
    }
  },
  components: {},
  computed: {
    submitable () {
      return !(this.username && this.password)
    }
  },
  created () {}
}
</script>

<style scoped lang="sass">
.login
  position: relative
  .show
    width: 100%
    height: 180px
  .ps
    position: absolute
    top: 10px
    right: 10px
    width: 60px
    height: 20px
    padding: 3px 0
    background-color: rgba(158, 158, 158, 0.63)
    border-radius: 5px
    text-align: center
    color: slategray
  .content
    padding: 0  10px
    .bt-submit
      margin: 10px 0
    .register
      font-size: 12px
      float: right
</style>
