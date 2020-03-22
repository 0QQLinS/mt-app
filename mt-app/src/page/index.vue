<template>
  <div class="page-index">
    <el-row class>
      <el-col :span="5">
        <m-menu />
      </el-col>
      <el-col :span="19">
        <m-list />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <m-container :nav="iStyle" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <m-container :nav="recomment" />
      </el-col>
    </el-row>
    <el-row></el-row>
  </div>
</template>

<script>
import MMenu from "@/components/index/menu.vue";
import MList from "@/components/index/life.vue";
import MContainer from "@/components/index/container.vue";

export default {
  data() {
    return {
      iStyle: {
        class: "istyle",
        title: "有格调",
        titleList: [
          {
            text: "全部",
            tab: "all"
          },
          {
            text: "约会聚餐",
            tab: "food"
          },
          {
            text: "丽人SPA",
            tab: "spa"
          },
          {
            text: "电影演出",
            tab: "movie"
          },
          {
            text: "品质出游",
            tab: "travel"
          }
        ],
        contentList: [
          {
            title: "东兴贝儿凯生日蛋糕",
            subtitle:
              "人气星选：6英寸生日礼物欧式水果蛋糕（卡通蛋糕）新鲜现做，传递",
            priceInfo: {
              nowPrice: "58",
              oldPrice: "128"
            },
            address: "回龙观",
            url:
              "https://p0.meituan.net/bbia/850ce195a4db8d447644429ac6e32c20330100.jpg@552w_312h_1e_1c"
          },
          {
            title: "大教堂蛋糕 Kathedral（王府中环店）",
            subtitle: "蛋糕2选1,约6寸，圆形",
            priceInfo: {
              nowPrice: "318",
              oldPrice: "398"
            },
            address: "门市价王府井/东单",
            url:
              "https://p0.meituan.net/bbia/38de90ff9a8cba15b926783a5b133335717497.jpg@552w_312h_1e_1c"
          },
          {
            title: "哈根达斯（东方广场店）",
            subtitle: "花火蛋糕冰淇淋1个，约700克，圆",
            priceInfo: {
              nowPrice: "258",
              oldPrice: "298"
            },
            address: "王府井/东单",
            url:
              "https://p1.meituan.net/msmerchant/08adfc2c365fe2ff08e4db1c0155bdf1189139.jpg@552w_312h_1e_1c"
          },
          {
            title: "幸福西饼生日蛋糕（程远店）",
            subtitle:
              "芒果拿破仑1个，约650克，方形，甜点下午茶，百分百新鲜制作，3小时免费配送，幸福就在家门口",
            priceInfo: {
              nowPrice: "99",
              oldPrice: "148"
            },
            address: "西三旗",
            url:
              "https://p1.meituan.net/msmerchant/9d453c38a7714f2992f3760dd650dec41368949.jpg@552w_312h_1e_1c"
          },
          {
            title: "  西堤厚牛排（国瑞购物中心店）",
            subtitle: "【可自提】地中海海鲜意面（原味/辣味，2选1）1份",
            priceInfo: {
              nowPrice: "47",
              oldPrice: "68"
            },
            address: "崇文门",
            url:
              "https://p0.meituan.net/msmerchant/3210179e9990dc8e869d97a7fd0ad2f52497973.jpg@552w_312h_1e_1c"
          },
          {
            title: "元祖食品（双井店）",
            subtitle: "三角慕思蛋糕1个，约125克，三角形",
            priceInfo: {
              nowPrice: "19.8",
              oldPrice: "22"
            },
            address: "双井",
            url:
              "https://p0.meituan.net/msmerchant/ece37ce11c355f13a5cf3745b380e282230492.jpg@552w_312h_1e_1c"
          }
        ]
      },
      recomment: {
        class: "youhui",
        title: "很优惠",
        titleList: [
          {
            text: "全部",
            tab: "all"
          },
          {
            text: "美食",
            tab: "food"
          },
          {
            text: "休闲",
            tab: "xiuxian"
          }
        ],
        contentList:[
          {
            title: "外教中国英语外教（公主坟校区））",
            subtitle:
              "[公主坟/万寿路]北美外教1对1线下课到店有礼",
            priceInfo: {
              nowPrice: "1",
              oldPrice: "89900"
            },
            address: "已售1",
            url:
              "https://p1.meituan.net/joymerchant/3e73198e3da465a10cc8b7f33ae8eef7-1861159884.jpg@319w_180h_1e_1c"
          },{
            title: "中艺理想家装饰·专注老房装修",
            subtitle:
              "[花乡/新发地]老房装修免费拆除",
            priceInfo: {
              nowPrice: "9.9",
              oldPrice: "5000"
            },
            address: "已售0",
            url:
              "https://p0.meituan.net/dpmerchantpic/a204110c3fcea8758444980f524afdd3172168.jpg@319w_180h_1e_1c"
          },{
            title: "PS-ONE（北京）品思国际艺术留学",
            subtitle:
              "[朝阳门]艺术留学一对一作品集规划咨询",
            priceInfo: {
              nowPrice: "2.1",
              oldPrice: "4000"
            },
            address: "已售0",
            url:
              "https://p1.meituan.net/deal/6277acb85ab92a7800ef95ffaa62dc93121399.jpg@58_0_1484_900a%7C388h_640w_2e_90Q%7C319w_180h_1e_1c"
          },{
            title: "Bounce Factory 反弹工厂蹦床公园（亦庄店）",
            subtitle:
              "[亦庄]团建趣味拓展轰趴基地详情咨询",
            priceInfo: {
              nowPrice: "1",
              oldPrice: "39996"
            },
            address: "已售0",
            url:
              "https://p0.meituan.net/dpmerchantpic/5f37d7b22443e4514f2a5f6c720dc2ea802824.jpg@319w_180h_1e_1c"
          },{
            title: "美联英语（中关村中心）",
            subtitle:
              "[中关村]【预售】在线课+抵用券限量体验套餐",
            priceInfo: {
              nowPrice: "9.1",
              oldPrice: "100000"
            },
            address: "已售0",
            url:
              "https://p1.meituan.net/dpmerchantpic/c6b36e9e3ee0de9acd82167335ef9ee3116002.jpg@319w_180h_1e_1c"
          },{
            title: "美联英语（中关村中心）",
            subtitle:
              "[中关村]实用口语在线课程团购",
            priceInfo: {
              nowPrice: "1",
              oldPrice: "100000"
            },
            address: "已售0",
            url:
              "https://p0.meituan.net/dpmerchantpic/2d6c132f0f75036d1897d7d9efd29037613880.jpg@319w_180h_1e_1c"
          }
        ]
      }
    };
  },
  components: {
    MMenu,
    MList,
    MContainer
  }
};
</script>

<style lang="sass">
@import "@/assets/css/index/index.scss";
</style>

