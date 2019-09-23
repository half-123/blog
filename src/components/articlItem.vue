<template>
    <div id="articleItem">
<!--        <div class="title">-->
<!--            <h1>{{content.title}}</h1>-->
<!--            <span class="data" content="data">{{this.content.time | moment}}</span>-->
<!--            <span>标签：</span>-->
<!--            <a  v-for="key in this.tips" :href='"./?type="+key' >{{key}}</a>-->
<!--        </div>-->
<!--        <div v-html="this.content.content"></div>-->
        <mavon-editor
                class="md"
                :value="this.content.md"
                :subfield = "prop.subfield"
                :defaultOpen = "prop.defaultOpen"
                :toolbarsFlag = "prop.toolbarsFlag"
                :editable="prop.editable"
                :scrollStyle="prop.scrollStyle"
                :codeStyle="prop.codeStyle"
        ></mavon-editor>
    </div>


</template>

<script>
    import axios from 'axios'
    export default {
        name: "articlItem",
        data() {
            return {
                content: '',
                id:this.$route.query.id,
                tips : []

            }
        },
        methods: {

        },
        computed: {
            prop () {
                let data = {
                    subfield: false,// 单双栏模式
                    defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域
                    editable: false,
                    toolbarsFlag: false,
                    scrollStyle: true,
                    codeStyle: "atelier-heath-light"
                }
                return data
            }
        },
        mounted () {
            axios
                .get('http://120.79.11.93:3001/item?id='+this.id)
                .then(response => {
                    this.content = response.data[0]
                    this.tips = this.content.tips.split(",")
                })
                . catch(function (error) { // 请求失败处理
                console.log(error);
            })
        }
    }
</script>

<style scoped>
    #articleItem {
        width: 75%;
        margin: 30px 0;
        /*background: #f8f8f8;*/
        /*padding: 10px 40px;*/
        /*border-radius: 15px;*/
    }

    #articleItem >>> h1 {
        font-weight: 500;
        margin-bottom: 5px;
    }
    #articleItem >>> span {
        color: #777;
    }
    #articleItem >>> .data {
        margin-right: 10px;
    }
    #articleItem >>> a {
        display: inline-block;
        margin-right: 10px;
        color: #777;
    }
    #articleItem >>>h2 ,#articleItem >>>h3{
        font-weight: 500;
        font-size: 1.2em;
    }
    #articleItem >>> .title {
        padding-bottom: 10px;
        border-bottom: 1px dashed rgba(0,0,0,.3);
    }
    @media screen and (max-width: 1024px) {
        #articleItem {
            box-sizing: content-box;
            width: 100%;
        }

    }
</style>