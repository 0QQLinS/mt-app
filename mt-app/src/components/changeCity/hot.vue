<template>
  <div class="m-hcity">
    <dl>
      <dt>{{title}}</dt>
      <dd v-for="(item,index) in list" :key="index">{{item.name}}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["list",'title']
};
</script>

<style lang="sass">
@import '@/assets/css/changecity/hot.scss';
</style>