<template>
    <div id="login">
        <form class="form">
            <div class="form-group">
                <label for="exampleInputEmail1" >用户名</label>
                <input  class="form-control" id="exampleInputEmail1" placeholder="username" v-model="username">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1" >密码</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
            </div>
            <div class="form-group">
                <transition name="fade">
                    <div class="alert alert-danger" role="alert" v-show="!correct">用户名或密码不正确！！！</div>
                </transition>
            </div>
            <div class="form-group">
                    <button class="btn btn-success form-control" @click="submit">登录</button>
            </div>
            <span class="iconfont icon-x" @click="login" ref="close"></span>
        </form>
    </div>

</template>

<script>
    import axios from 'axios'
    import Qs from 'qs'
    export default {
        name: "login",
        data() {
            return {
                username: '',
                password : '',
                correct : true
            }
        },
        computed: {
            // login() {
            //     return this.$store.state.login
            // }
        },
        methods: {
            login() {
                this.$emit('func', true)
            },
            submit(){
                axios.post('api/login', Qs.stringify({
                    username: this.username,
                    password: this.password
                }))
                    .then(res => {
                        if (res.data) {
                            this.correct = true
                            this.$refs.close.click()
                            this.$store.commit('login','login')
                        } else
                            this.correct = false
                    })
                    .catch((error) => console.log(error))
                console.log(this.$session.get('login'));
            }
        }
     }
</script>

<style scoped>
    #login {
        position: fixed;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .form {
        position: relative;
        width: 400px;
        padding: 40px 50px ;
        background: #ffffff;
        top: 50%;
        margin: 0 auto;
        transform: translateY(-50%);
        z-index: 9999;
        border-radius: 5px;
    }
    .alert-danger {
        height: 40px;
    }
    .btn {
        margin-top: 10px;
    }
    .icon-x {
        position: absolute;
        right: 30px;
        top: 20px;
        font-size: 20px;
    }
    @media screen and (max-width: 1024px) {
      .form {
          width: 90%;
        }
    }

</style>