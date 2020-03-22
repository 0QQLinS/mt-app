<template>
  <el-row class="topBar m-header m-header-topbar">
    <el-col :span="12"><geo /></el-col>
    <el-col :span="12"><my-Nav /></el-col>
  </el-row>
</template>

<script>
import geo from '@/components/header/geo.vue';
import myNav from '@/components/header/nav.vue';

export default {
    components:{
        geo,
        myNav,
    }
};
</script>

<style lang='sass'>
    @import '@/assets/css/public/header/topbar.scss';
</style>