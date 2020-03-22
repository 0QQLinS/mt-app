<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col class="left" :span="3">
        <router-link :to="{name:'index'}">
          <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团" />
        </router-link>
      </el-col>
      <el-col class="center" :span="15">
        <div class="wrapper">
          <el-input
            class="el-input"
            v-model="searchWord"
            placeholder="搜索商家或地点"
            @focus="focusInput"
            @blur="blurInput"
            @input="input"
          ></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <div>
              <dd v-for="(item,index) in hotPlaceList" :key="item + '_'+ index">
                <router-link :to="{name: 'goodsList', params: {name: item}}">{{item}}</router-link>
              </dd>
            </div>
          </dl>
          <dl class="searchList">
            <dd v-if="isSearchPlace" v-for="(item ,index) in searchList" :key="index">
              <router-link :to="{name:'goodsList',params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <router-link
            v-for="(item,index) in suggestList"
            :key="item + '~' + index"
            :to="{name:'goodsList',params:{name:item}}"
          >{{item}}</router-link>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from "@/api/index.js";

// import axios from "@/axios.js";
// // import axios from 'axios';
// // axios.defaults.baseURL = '/api'

export default {
  data() {
    return {
      searchWord: "",
      isFocus: false,
      hotPlaceList: [],
      searchList: [],
      suggestList: []
    };
  },

  computed: {
    isHotPlace() {
      return this.isFocus && !this.searchWord;
    },
    isSearchPlace() {
      return this.isFocus && this.searchWord;
    }
  },

  methods: {
    focusInput() {
      this.isFocus = true;
      // console.log("聚焦");
    },
    blurInput() {
      this.isFocus = false;
    },
    input() {
      let val = this.searchWord;
      api.getSearchList().then(res => {
        // console.log("searchlist", res);
        this.searchList = res.data.data.list.filter((item, index) => {
          return item.indexOf(val) > -1;
        });
      });
    }
  },
  created() {
    api.searchHotWords().then(res => {
      // console.log(res);
      this.suggestList = res.data.data;
      this.hotPlaceList = res.data.data;
    });
  }

  // created() {
  //   axios.get("/meituan/header/searchHotWords.json?appkey=LINSHUANG_1575700989036").then(res => {
  //     console.log(res, 111);
  //   });
  //   // api.searchHotWords().then(res => {
  //   //   console.log(res);
  //   //   // this.hotPlaceList = res.data.data;
  //   //   // this.suggestList = res.data.data;
  //   // });
  // }
};
</script>

<style lang='sass'>
@import '@/assets/css/public/header/search.scss';
@import '@/assets/css/public/header/index.scss';
</style>