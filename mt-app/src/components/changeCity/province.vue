<template>
  <div>
    <span class="name">按省份选择：</span>
    <m-select
      :selectList="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @changeVal="changeProvinceVal"
      :slectVal="this.provinceSlectedItem.provinceName?this.provinceSlectedItem.provinceName:'按省份选择'"
    />
    <m-select
      :selectList="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @changeVal="changeCityVal"
      :slectVal="this.citySlectedItem.name?this.citySlectedItem.name:'城市选择'"
      :disabled="this.cityDisabled"
    />
    <span>直接搜索:</span>

    <el-select
      v-model="searchWord"
      multiple
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>


<script>
import api from "@/api/index.js";
import MSelect from "./select.vue";
export default {
  components: {
    MSelect
  },
  data() {
    return {
      province: {
        title: "按省份选择",
        subTitle: "省份",
        list: []
      },
      city: {
        subTitle: "城市",
        list: []
      },
      search: {
        title: "请输入城市中文或拼音"
      },
      provinceActive: false,
      cityActive: false,
      loading: false,
      searchWord: "",
      searchList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗"],
      provinceSlectedItem: "",
      citySlectedItem: "",
      cityDisabled: true
    };
  },
  created() {
    api.getProvinceList().then(res => {
      // console.log("province", res);
      this.province.list = res.data.data;
    });
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
      // console.log(this.provinceActive)
    },
    //显示和隐藏
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    //改变省份
    changeProvinceVal(item) {
      this.provinceSlectedItem = item;
      this.cityDisabled = false;
      this.city.list = item.cityInfoList;
      console.log(item,'item');
      // console.log(this.city,item.cityInfoList)
    },
    //改变城市
    changeCityVal(item) {
      this.citySlectedItem = item;
      console.log(item);
      this.$store.dispatch('setPosition',[this.citySlectedItem,this.provinceSlectedItem]);
    },
    remoteMethod(val) {
      // 请求后端接口
      console.log(document.cookie, localStorage);
    }
  }
};
</script>

<style lang="sass">
@import "@/assets/css/changecity/iselect.scss";
</style>
