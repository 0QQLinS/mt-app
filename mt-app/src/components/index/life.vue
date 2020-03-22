<template>
  <div class="m-life">
    <el-row>
      <ul class="nav">
        <li>
          <router-link to="/" class="takeout">美团外卖</router-link>
        </li>
        <li>
          <router-link to="/" class>猫眼电影</router-link>
        </li>
        <li>
          <router-link to="/" class>美团酒店</router-link>
        </li>
        <li>
          <router-link to="/" class="apartment">民宿/公寓</router-link>
        </li>
        <li>
          <router-link to="/" class="business">商家入驻</router-link>
        </li>
        <li>
          <router-link to="/" class>美团公益</router-link>
        </li>
      </ul>
    </el-row>

    <el-row>
      <el-col :span="14">
        <Slider />
      </el-col>
      <el-col :span="4">
        <a href>
          <div class="m-life-pic"></div>
        </a>
      </el-col>
      <el-col :span="6">
        <div class="m-life-login">
          <h4>
            <img v-if="flag" src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt />
            <img v-if="!flag" src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=377259358,72458941&fm=26&gp=0.jpg" alt="">
          </h4>
          <p class="m-life-login-name">Hi！'{{flag?'你好！':this.$store.state.userName}}'</p>
          <p v-if="flag">
            <router-link :to="{name:'register'}">
              <el-button round>注册</el-button>
            </router-link>
          </p>
          <p v-if="flag">
            <router-link :to="{name:'login'}">
              <el-button round>立即登陆</el-button>
            </router-link>
          </p>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="7">
        <a href>
          <div class="m-life-hotel"></div>
        </a>
      </el-col>
      <el-col :span="7">
        <a href>
          <div class="m-life-music"></div>
        </a>
      </el-col>
      <el-col :span="4">
        <a href>
          <div class="m-life-coop"></div>
        </a>
      </el-col>
      <el-col :span="6">
        <div class="m-life-downapp">
          <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP" />
          <p>美团APP手机版</p>
          <p class="last-p">
            <span class="red">1元起</span>
            吃喝玩乐
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Slider from "@/components/index/slider.vue";
export default {
  components: {
    Slider
  },
  data() {
    return {
      flag: this.$store.state.userName == "" //是否登录的标记
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/life.scss";
</style>