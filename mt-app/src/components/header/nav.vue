<template>
  <el-col class="m-nav">
    <ul class="nav">
      <li class="list my">
        <router-link to="{'/'}">我的美团</router-link>
        <dl>
          <dd>
            <router-link to="{'/'}">我的订单</router-link>
          </dd>
          <dd>
            <router-link to="{'/'}">我的收藏</router-link>
          </dd>
          <dd>
            <router-link to="{'/'}">抵用券</router-link>
          </dd>
          <dd>
            <router-link to="{'/'}">账户设置</router-link>
          </dd>
        </dl>
      </li>
      <li>
        <router-link to="{'/'}">手机APP</router-link>
      </li>

      <li class="list bd">
        <router-link to="{'/'}">商家中心</router-link>
        <dl>
          <dd>
            <router-link to="{'/'}">登录商家中心</router-link>
          </dd>
          <dd>
            <router-link to="{'/'}">美团智能收银</router-link>
          </dd>
          <dd>
            <router-link to="{'/'}">我想合作</router-link>
          </dd>
          <dd>
            <router-link to="{'/'}">账户设置</router-link>
          </dd>
        </dl>
      </li>
      <li class="list site">
        <router-link to="{'/'}">网站导航</router-link>
        <div class="subContainer">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd>
              <router-link :to="{path: '/'}">我的订单</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">我的收藏</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">抵用券</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">账户设置</router-link>
            </dd>
          </dl>
          <dl class="food">
            <dt>吃美食</dt>
            <dd>
              <router-link :to="{path: '/'}">我的订单</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">我的收藏</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">抵用券</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">账户设置</router-link>
            </dd>
          </dl>
          <dl class="movie">
            <dt>看电影</dt>
            <dd>
              <router-link :to="{path: '/'}">我的订单</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">我的收藏</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">抵用券</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">账户设置</router-link>
            </dd>
          </dl>
          <dl class="app">
          

    
              <dt>手机应用</dt>
              <dd>
                <a href="https://i.meituan.com/mobile/down/meituan" target="_blank">
                  <img
                    class="appicon"
                    src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                    title="美团app"
                    alt="美团app"
                  />
                </a>
              </dd>
              <dd>
                <a href="https://waimai.meituan.com/mobile/download/default" target="_blank">
                  <img
                    class="appicon"
                    src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
                    title="外卖app"
                    alt="外卖app"
                  />
                </a>
              </dd>
              <dd>
                <a href="https://minsu.meituan.com/app/" target="_blank">
                  <img
                    class="appicon"
                    src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png"
                    title="民宿app"
                    alt="民宿app"
                  />
                </a>
              </dd>
              <dd>
                <a href="https://www.dianping.com/events/m/index.htm" target="_blank">
                  <img
                    class="appicon"
                    src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
                    title="点评app"
                    alt="点评app"
                  />
                </a>
              </dd>
              <dd>
                <a href="https://maoyan.com/app" target="_blank">
                  <img
                    class="appicon"
                    src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
                    title="猫眼app"
                    alt="猫眼app"
                  />
                </a>
              </dd>
          </dl>
        </div>
      </li>
    </ul>
  </el-col>
</template>

<script>
export default {};
</script>

<style>
</style>