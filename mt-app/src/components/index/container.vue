<template>
  <div class="m-istyle">
    <dl :class="nav.class" @mouseover="over">
      <dt>{{nav.title}}</dt>
      <dd
        v-for="(item,index) in nav.titleList"
        :key="index.tab"
        :class="{active: kind == item.tab}"
        :data-type="item.tab"
      >{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in nav.contentList" :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.url" class="image" />
          <div class="cbody">
            <div class="title">{{item.title}}</div>
            <div class="sub-title">{{item.subtitle}}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">￥</span>
                <span class="current-price numfont">{{item.priceInfo.nowPrice}}</span>
                <span
                  class="old-price numfont"
                  style="text-decoration:'line-through'"
                >门市价{{item.priceInfo.oldPrice}}</span>
              </span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: "all",
     
    };
  },
  props: ["nav"],
  methods: {
    over(e) {
      //   console.log(e.target);
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") {
        return false;
      }
      console.log(dom.dataset);
      this.kind = dom.getAttribute("data-type");
      //this.kind=dom.dataset.type;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>






