<template>
  <div class="page-changeCity">
    <el-row>
      <province />
    </el-row>
    <el-row>
      <hot title="热门城市：" :list="hotList" />
    </el-row>
    <el-row>
      <hot title="最近访问：" :list="recentList" />
    </el-row>
    <el-row>
      <category />
    </el-row>
  </div>
</template>


        
<script>
import province from "@/components/changeCity/province";
import hot from "@/components/changeCity/hot.vue";
import category from "@/components/changeCity/category.vue";
import api from '@/api/index.js';
export default {
  data() {
    return {
      hotList: [],
      recentList: []
    };
  },
  created(){
    api.getHotCityList().then(res=>{
      console.log('hot',res);
      this.hotList=res.data.data;
    });
    api.getRecentCityList().then(res=>{
      console.log('recent',res);
      this.recentList=res.data.data;
    })
  },
  components: {
    province,
    hot,
    category
  }
};
</script>

<style>
</style>