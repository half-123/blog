<template>
    <div id="addNote">
        <div v-if="!submited">
            <div class="toolBar">
                <span>开始书写你的文章吧！！</span>
                <div id="tips">
                    <label>请勾选文章标签：</label>
                    <input id="html" type="checkbox" value="HTML" v-model="tips">
                    <label for="html">HTML</label>
                    <input id="css" type="checkbox" value="CSS" v-model="tips">
                    <label for="css">CSS</label>
                    <input id="js" type="checkbox" value="JS" v-model="tips">
                    <label for="js">JS</label>
                    <input id="vue" type="checkbox" value="VUE" v-model="tips">
                    <label for="vue">VUE</label>
                </div>
                <div>
                    <button @click="submit">提交</button>
                </div>
            </div>
            <mavon-editor
                    v-model="content"
                    ref="md"
                    @change="change"
                    style="min-height: 700px"
                    />

        </div>
        <div v-if="submited">
            <a href="/">恭喜，你的博客已经成功提交！！！点击任意空白处返回主页</a>
        </div>

    </div>
</template>

<script>
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    import axios from 'axios'
    import Qs from 'qs'

    export default {
        name: "addNote",
        components: {
            mavonEditor,
        },
        data() {
            return {
                submited: false,
                content:'', // 输入的markdown
                html:'',    // 及时转的html
                tips : [],   //标签
                // title : ''   //文章标题
            }
        },
        computed: {
          title : function () {
              return this.html.match(/<\/a>(\S*)<\/h1>/)[1]
          },
            context: function () {

            }
        },
        methods: {
            // 所有操作都会被解析重新渲染
            change(value, render){
                // render 为 markdown 解析后的结果[html]
                this.html = render;
            },
            submit(){

                axios.post('api/add',Qs.stringify({
                    html:this.html.toString(),
                    md:  this.content.toString(),
                    title: this.title,
                    tips: this.tips.toString()
                }))
                    .then(res=>console.log('res=>',res))
                    .catch((error)=>console.log(error))
                    .then(this.submited = true)
            }
        },
        mounted() {


        }
    }
</script>

<style scoped>
    #addNote {
        width: 100%;
        margin: 0 auto;
    }
    .toolBar {
        height: 80px;
        line-height: 80px;
        display: flex;
        justify-content: space-between;
    }
    button,input{
        margin-top: 20px;
        height: 40px;
        text-decoration: none;
        font-size: 15px;
    }
    button {
        width: 60px;
        margin-left: 20px;
        background: #009a61;
        color: #fff;
        border: none;
        border-radius: 8px;
        font-size: 15px;
    }
    a {
        display: block;
        width: 100%;
        text-align: center;
        margin: auto;
        font-size: 1.4em;
        text-decoration: none;
        color: #2d2d2d;
        line-height: 800px;
    }
    #tips {
        display: flex;
        height: 80px;
    }
    #tips input {
        margin-left: 20px;
        margin-right: 5px;
    }
    span {
        font-size: 1.2em;
        font-weight: 700;
    }
</style>