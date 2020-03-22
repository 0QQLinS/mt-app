<template>
  <el-col class="my-geo">
    <div class="position">
      <i class="el-icon-location" />
      {{this.$store.state.position.name}}
      <router-link class="changeCity" :to="{name:'changeCity'}">切换城市</router-link>
      [
      <a href v-for="(item,index) in this.$store.state.surrounding" :key="index"> {{item.name}} </a>
      ]
      <router-link class="login" :to="{name:'login'}" v-if="flag">立即登录</router-link>
      <router-link class="register" :to="{name:'register'}" v-if="flag">注册</router-link>
    </div>
  </el-col>
</template>

<script>
export default {
  data(){
    return{
      flag:this.$store.state=='',//是否登录的标记
    }
  }
};
</script>

<style>
</style>