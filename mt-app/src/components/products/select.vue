<template>
  <div class="m-product-select">
    <dl class="tab">
      <dt>
       {{list.title}}
        <i class="el-icon-caret-bottom"></i>
      </dt>
      <dd>
          <dt class="select-title">{{list.title}}</dt>
          <span v-for="item in list.subList" :key="item.id">{{item.name}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {

    props:['list']
};
</script>

<style>
</style>