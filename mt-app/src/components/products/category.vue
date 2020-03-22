<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="(item,index) in classicList" :key="index">
        <m-select :list="item" />
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="(item,index) in areaList" :key="index">
        <m-select :list="item" />
      </dd>
    </dl>
  </div>
</template>

<script>
import MSelect from "@/components/products/select.vue";
import api from "@/api/index.js";
export default {
  components: {
    MSelect
  },
  data() {
    return {
      classicList: [],
      areaList: [
        {
          title: "推荐商圈",
          subList: [
            {
              name: "望京",

              id: 120000
            },

            {
              name: "昌平",

              id: 12222
            }
          ]
        }
      ]
    };
  },
  created() {
    api.getProductCategoryList().then(res => {
      // console.log('class',res);
      this.classicList = res.data.data;
    });
    // api.getAreaList().then(res => {
    //   console.log("area",res.data );
    //   this.areaList = JSON.parse(res.data);
    // });
  }
};
</script>

<style>
</style>
