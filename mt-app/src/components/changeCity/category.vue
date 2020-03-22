<template>
  <div class="category">
    <dl class="m-category">
      <dt>按拼音首字母选择:</dt>
      <dd v-for="(item,index) in list" :key="index">
        <a :href="'#city-' + item">{{item}}</a>
      </dd>
    </dl>
    <dl
      class="m-category-section"
      v-for="(item,index) in cityGrounp"
      :key="index"
      :id="'city-'+ index"
    >
      <dt>{{index}}</dt>
      <dd>
        <span v-for="(it,i) in item" :key="i" @click="changeCity(it)">{{it.name}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      list: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      cityList: [],
      cityGrounp: {}
    };
  },
  created() {
    let self = this;
    api
      .getCityList()
      .then(res => {
        var obj={};
        this.cityList = res.data.data;
        self.cityList.forEach((item, index) => {
          if (!obj[item.firstChar.toUpperCase()]) {
            obj[item.firstChar.toUpperCase()] = [];
          }
         obj[item.firstChar.toUpperCase()].push(item);
        });
        this.cityGrounp=obj;
      })
    
    console.log(self.cityGrounp, "22");
  },
  methods: {
    changeCity(city) {
      console.log(city);
      //待异步取得信息处理
      this.$store.dispatch('setPosition',city)
    }
  }
};
</script>

<style lang="sass">
@import "@/assets/css/changecity/categroy.scss";
</style>
