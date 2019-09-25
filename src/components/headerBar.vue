<template>
    <header id="headerBar">
        <router-link class="title"  to="/">half_123的前端博客</router-link>
        <div class="list" v-if="list||big">
            <ul>
                <li><router-link  to="/">首页</router-link></li>
                <li><router-link  to="/items/html" >HTML</router-link></li>
                <li><router-link  to="/items/css" >CSS</router-link></li>
                <li><router-link  to="/items/js">JS</router-link></li>
                <li><router-link  to="/items/vue" >VUE</router-link></li>
                <li><router-link  to="/items/webpack">WEBPACK</router-link></li>
                <li v-show="!state"><span class="login" @click="login" >登录</span></li>
                <li v-show="state"><router-link  to="/add" >写文章</router-link></li>
                <li><router-link  to="/about">关于我</router-link></li>
            </ul>
        </div>
        <label for="list" class="iconfont icon-1"></label>
        <input type="checkbox" id="list" hidden v-model="list">
    </header>
</template>

<script>
    export default {
        name: "headerBar",
        data(){
          return{
              list : false,
              width : document.body.clientWidth
          }
        },
        computed: {
            big : function () {
                if(this.width>1024)
                    return true;
                else
                    return false;
            },
            state() {
                return this.$store.state.login
            }
        },
        watch:{
            '$route'(){
                this.list = false
                }
            },
        methods: {
            login : function () {
                this.$emit('func',false)
                this.list = false
            },
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        text-decoration: none;
    }
    .iconfont {
        display: none;
    }
    header {
        display: flex;
        justify-content: space-between;
        height: 50px;
        width: 100%;
        background: #f8f8f8;
        padding: 0 20%;
        font-size: 14px;
    }
    .title {
        display: block;
        line-height: 50px;
        font-size: 1.2em;
        font-weight: 500;
    }
    header ul {
        display: flex;
    }
    header li, h3{
        margin-left: 5px;
        display: block;
        padding: 0 10px;
        height: 30px;
        line-height: 30px;
        margin-top: 10px;
        text-align: center;
    }
    h3 {
        font-size: 1.3em;
    }
    header a {
        display: block;
        color: #000;
    }
    header a:hover{
        color: #2e6da4;
    }
    header li:hover {
        background: rgba(0,0,0,.04);
    }
    .login {
        cursor:pointer;
    }
    @media screen and (max-width: 1204px) {
        #headerBar {
            padding: 0 20px;
        }
        .iconfont{
            display: block;
            font-size: 20px;
            padding: 15px 0;
            position: relative;
            right: 0;
        }
        .list {
            width: 100%;
            margin: 0;
            position: absolute;
            top: 50px;
            z-index: 9999;
            left: 0;
        }
        header ul {
            display: block;
            width: 100%;
        }

        header li{
            display: block;
            width: 100%;
            margin: 0;
            height: 30px;
            background: #f8f8f8;
        }
        header li a{
            background: #f8f8f8;
            display: block;
            width: 100%;
        }
    }
</style>