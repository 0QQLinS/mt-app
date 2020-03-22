<template>
  <div
    :class="['choose-wrap', disabled?'disabled':'']"
    @click="showWrapper"
    v-document-click="documentClick"
  >
    <div class="choose">
      <span>{{this.slectVal}}</span>
      <i
        :class="{'el-icon-caret-bottom':showWrapperActive,'el-icon-caret-right':!showWrapperActive}"
      ></i>
      <div :class="{'mt-content':true ,'active':showWrapperActive}">
        <h2>{{selectList.subTitle}}</h2>
        <div :class="{'wrapper':true,'active':showWrapperActive}">
          <div class="col" style="word-wrap:break-word" v-for="(item,i) in Math.ceil(selectList.list.length/10)" :key="i">
            <span
              class="mt-item"
              v-for="(item,index) in selectList.list.slice(10*i,10+i*10)"
              :key="index"
              @click="getSlectVal(item)"
            >{{item.provinceName?item.provinceName:item.name}}</span>
          </div>
         
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["selectList", "showWrapperActive", "slectVal", "disabled"],
  methods: {
    showWrapper(e) {
      e.stopPropagation();
      if (this.disabled != true) {
        this.$emit("change_active", true);
      }
    },
    documentClick() {
      this.$emit("change_active", false);
    },
    getSlectVal(item) {
      // this.slectVal=item
      this.$emit("changeVal", item);
      console.log(item,this.slectVal);
    }
  }
};
</script>

<style lang="sass">
@import "@/assets/css/changecity/select.scss";
</style>
