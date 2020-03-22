<template>
  <div class="page-product">
    <el-row class="m-crumbs">
      <crumbs />
    </el-row>

    <el-row>
      <el-col :span="19">
          <el-row>
              <category />
          </el-row>
          <el-row>
              <list />
          </el-row>
      </el-col>

      <el-col :span="5">
        <el-row>map</el-row>
        <el-row>fav</el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import crumbs from "@/components/products/crumbs.vue";
import category from '@/components/products/category.vue';
import list from '@/components/products/list.vue';
export default {
  components: {
    crumbs,
    category,
    list
  }
};
</script>

<style lang="sass">
@import '@/assets/css/products/index.scss';
</style> 