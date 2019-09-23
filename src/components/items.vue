<template>
    <div id="items">
        <transition-group>
            <div class="item"  v-for="(key,index) in content" :key="index" v-if="index<number">
                <router-link class="title" :to='"/item?id="+key.id'>{{key.title}}</router-link>
                <span class="data" content="data">{{key.time | moment}}</span>
                <span>标签:</span>
                <router-link  class="tip" v-for="tip in key.tips.split(',')" :to='"/items/"+tip'>{{tip}}</router-link>
                <div class="content"  v-html="key.html"></div>
            </div>
        </transition-group>

        <i class="iconfont icon-Order-Details-SeeMore" @click="add" v-if="more"></i>
        <span class="noMore" @click="add" v-if="!more">没有更多了！！！</span>
    </div>
</template>

<script>
    import axios from 'axios'
    import SideBar from "./sideBar";
    export default {
        name: "items",
        components: {SideBar},
        data() {
            return{
                content: '',
                tips: [],
                number : 10,
                more : true,
                nomore: ''
            }
        },
        methods: {
          add : function () {
              if(this.number<this.content.length){
                  this.number+=10;
              } else
                  this.more = false
          }
        },
        computed:{
        },
        watch:{
          '$route'(){
              this.number=10;
              this.more = true;
              if(this.$route.params.type){
                  axios
                      .get('api/items?type='+this.$route.params.type)
                      .then(response => {
                          this.content = response.data
                      })
                      . catch(function (error) {
                          console.log(error);
                      })
              }else{
                  axios
                      .get('api/list')
                      .then(response => {
                              this.content = response.data;
                          }
                      )
                      . catch(function (error) {
                          console.log(error);
                      })
              }
          }
        },
        mounted () {
                axios
                    .get('api/list')
                    .then(response => {
                        this.content = response.data;
                        }
                    )
                    . catch(function (error) {
                        console.log(error);
                    })
            }


    }


</script>

<style scoped>
    #items {
        width: 75%;
        padding-top: 30px;
    }
    .item {
        color: #000;
        /*height: 180px;*/
        padding: 20px;
        overflow: hidden;
        background: #f8f8f8;
        margin-bottom: 30px;
        border-radius: 15px;
    }
    hr {
        border:1px dashed rgba(0,0,0,.3);
    }
    .item >>> .title{
        display: block;
        color: #2d2d2d;
        text-decoration: none;
        font-weight: 500;
        font-size: 1.5em;
    }
    .item >>> a:hover{
        color: #2e6da4;
    }
    .item >>> .tip, .item >>> span {
        color: #2d2d2d;
        margin-right: 10px;
    }
    .item >>>h1 ,.item >>>h2{
        font-weight: 500;
        font-size: 1.2em;
    }
    .item >>> .content{
        margin-top: 5px;
        border-top: 1px dashed rgba(0,0,0,.3);
    }
    .content {
        height: 120px;
        overflow: hidden;
    }
    .content >>> h1 {
        display: none;
    }
    .iconfont {
        display: block;
        text-align: center;
        font-size: 25px;
        color: #000;
        height: 40px;
        line-height: 40px;
        background: #f8f8f8;
        margin-bottom: 30px;
        border-radius: 15px;
    }
    .noMore{
        display: block;
        text-align: center;
        color: #2d2d2d;
        height: 40px;
        line-height: 40px;
        background: #f8f8f8;
        margin-bottom: 30px;
        border-radius: 15px;
    }
    .iconfont:hover {
        color: #00bcd4;
    }
    @media screen and (max-width: 1024px) {
        #items {
            width: 100%;
            padding: 20px;
        }
        .item {
            margin-bottom: 20px;
        }

    }
</style>