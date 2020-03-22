<template>
  <div class="m-products-list">
    <ul>
      <li v-for="item in nav" :key="item.key" :class="{'s-nav-active':item.active}">{{item.name}}</li>
    </ul>
    <el-row>
      <item v-for="it in productList" :key="it.itemId" :meta="it" />
    </el-row>
  </div>
</template>

<script>
import item from "@/components/products/item.vue";
import api from '@/api/index.js';
export default {
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false
        }
      ],
      productList: [
        {
          itemId: "2571323",

          title: "井格重庆火锅（哈西万达店）",

          imgUrl:
            "https://p1.meituan.net/msmerchant/c099ca350403212237eb1748e82dce9e302730.jpg@330w_187h_1e_1c",

          type: "food",

          score: 5,

          commentNum: 2555,

          comment: [
            {
              username: "匿名用户",

              image: "https://www.dpfile.com/ugc/user/anonymous.png",

              rate: 5,

              pics: ["http://p0picxxxxx", "http://picxxxxx"],

              evalaute: "xxxx"
            }
          ],

          tab: ["重庆火锅", "哈西万达"],

          address: "南岗区中兴大街168号万达广场3层3055",

          phone: "0451-85717159",

          businessTime: "周一至周日 09:30-21:00",

          service: ["提供wifi"],

          recommend: ["现炸酥肉", "井格毛肚"],

          avgPrice: 95,

          dealItems: [
            {
              title: "100元代金券1张",

              price: 28.9,

              counterPrice: 100,

              saleNum: 3409,

              priceType: "元"
            }
          ]
        }
      ]
    };
  },
  created(){
    api.getProductList().then(res=>{
      // console.log(res,'product');
      this.productList=res.data.data;
    })
  },
  components: {
    item
  }
};
</script>

<style>
</style>
