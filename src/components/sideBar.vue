<template>
    <div id="sideBar">

            <div class="sideBarItem">
                <span class="title">关于该博客</span>
                <p>该博客使用Vuecli3脚手架开发，后台接口由node.js搭建，使用MySQL数据库存储数据，源码已上传至GitHub。</p>
                <div class="info">
                    <a href="/">
                        <i class="iconfont icon-email"></i>
                        <span>邮箱</span>
                    </a>
                    <a href="/">
                        <i class="iconfont icon-Blog"></i>
                        <span>博客</span>
                    </a>
                    <a href="http://github.com/half-123" target="_blank" >
                        <i class="iconfont icon-gitjub"></i>
                        <span>GitHub</span>
                    </a>
                </div>
            </div>


          <div class="sideBarItem">
              <span class="title">分类索引</span>
              <router-link class="list" to="/items/html">HTML</router-link>
              <router-link class="list" to="/items/css">CSS</router-link>
              <router-link class="list" to="/items/js">JS</router-link>
              <router-link class="list" to="/items/vue">VUE</router-link>
              <router-link class="list" to="/items/webpack">WEBPACK</router-link>
          </div>

            <div class="sideBarItem">
                <span class="title">前端学习常用网站</span>
                <a class="list" href="https://cn.vuejs.org/index.html" target="_blank" >Vue.js</a>
                <a class="list" href="http://jquery.cuishifeng.cn" target="_blank" >jQuery文档(非官方）</a>
                <a class="list" href="https://www.npmjs.com" target="_blank" >npm</a>
                <a class="list" href="https://caniuse.com" target="_blank" >Can I use</a>
                <a class="list" href="https://v3.bootcss.com/" target="_blank" >bootstrap</a>
                <a class="list" href="https://daneden.github.io/animate.css/" target="_blank" >Animate(动画类库)</a>
                <a class="list" href="https://www.iconfont.cn/" target="_blank" >阿里图标</a>
                <a class="list" href="https://www.nowcoder.com" target="_blank" >牛客网</a>
                <a class="list" href="https://www.bilibili.com/v/technology/wild/#/" target="_blank" >bilibili野生技术协会</a>
                <a class="list" href="https://www.w3cschool.cn/" target="_blank" >w3cschool</a>
            </div>
    </div>
</template>

<script>
    export default {
        name: "sideBar"
    }
</script>

<style scoped>
    #sideBar {
        width: 23%;
        margin: 30px 0;
    }
    p {
        text-indent: 2em
    }
    .title {
        display: block;
        padding: 5px;
        border-bottom: 1px dashed rgba(0,0,0,.3);
    }
    .sideBarItem {
        box-sizing: border-box;
        color: #000;
        padding: 20px 30px;
        background: #f8f8f8;
        border-radius: 15px;
        margin-bottom: 30px;
    }
    .sideBarItem:nth-last-child(1){
       margin: 0;
    }

    .sideBarItem a:hover {
        color: #2e6da4;
    }
    .iconfont {
        font-size: 1.5em;
        display: block;
        padding: 5px;
    }
    .info {
        display: flex;
        justify-content: space-around;
    }
    .info a {
        color: #2d2d2d;
        display: block;
        text-decoration: none;
        text-align: center;
    }
    .list {
        display: block;
        color: #2d2d2d;
        text-decoration: none;
        height: 40px;
        line-height: 40px;
    }
</style>