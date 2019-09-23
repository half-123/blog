<template>
  <div id="app">
    <headerBar></headerBar>
    <div class="main">
        <router-view></router-view>
        <router-view name="sidebar" class="sidebar"></router-view>
    </div>
    <bottomBox></bottomBox>
      <i class="toTop iconfont icon-top" @click="backTop" v-if="flag"></i>
  </div>
</template>

<script>
  import headerBar from './components/headerBar.vue'
  import bottomBox from './components/bottomBox.vue'
  import articlItem from './components/articlItem.vue'
  import addNote from './components/addNote.vue'
  import items from './components/items.vue'
  import sideBar from './components/sideBar.vue'

  export default {
    name: 'app',
    components: {
      headerBar, bottomBox, articlItem,addNote, items,sideBar
    },
    data() {
      return{
        flag : false
      }
    },

    mounted () {
      window.addEventListener('scroll', this.scrollToTop)
    },
    destroyed () {
      window.removeEventListener('scroll', this.scrollToTop)
    },

    methods: {
      // 点击图片回到顶部方法，加计时器是为了过渡顺滑
      backTop() {
        const that = this
        let timer = setInterval(() => {
          let ispeed = Math.floor(-that.scrollTop / 5)
          document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
          if (that.scrollTop === 0) {
            clearInterval(timer)
          }
        }, 16)
      },

      // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
      scrollToTop() {
        const that = this
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        that.scrollTop = scrollTop
        if (that.scrollTop > 500) {
          that.flag = true
        } else {
          that.flag = false
        }
      }
    }

  }
</script>

<style>
  @import './assets/icon.css';  /*引入阿里图标*/
  .v-enter,
  .v-leave-to {
    opacity: 0;
    transform: translateY(80px);
  }

  .v-enter-active,
  .v-leave-active{
    transition: all 1s ease;
  }
  body ,html{
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
  .main {
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .toTop {
    position: fixed;
    display: block;
    width: 80px;
    height: 80px;
    background: #f8f8f8;
    padding: 20px;
    right: 30px;
    bottom: 50px;
    font-size: 40px;
  }
  @media screen and (max-width: 1024px) {
    .main{
      width: 100%;
    }
      .sidebar {
        display: none;
      }
    .toTop {
      display: none;
    }
  }

</style>
