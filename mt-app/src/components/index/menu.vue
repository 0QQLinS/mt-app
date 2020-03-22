<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd v-for="(item,index) in menuList" :key="index" @mouseenter="menuEnter(item)">
        <i :class="item.type"></i>
        {{item.name}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div class="detail" v-if="curDetail" @mouseenter="detailEnter" @mouseleave="detailLeave">
      <template v-for="(item,index) in curDetail">
        <h4 :key="`${item.title}_`+index">{{item.title}}</h4>
        <span v-for="(item,index) in item.items" :key="index">{{item}}</span>
      </template>
    </div>
  </div>
</template>



<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      curDetail: null,
      menuList: []
    };
  },
  methods: {
    menuEnter(item) {
      this.curDetail = item.items;
    },
    menuLeave() {
      const self = this;
      this.timer = setTimeout(() => {
        self.curDetail = null;
      }, 200);
    },
    detailEnter() {
      clearTimeout(this.timer);
    },
    detailLeave() {
      this.curDetail = null;
    }
  },
  created() {
    api.getMenuList().then(res => {
      console.log("menu", res);
      this.menuList=res.data.data;
    });
  }
};
</script>

<style lang="sass">
</style>