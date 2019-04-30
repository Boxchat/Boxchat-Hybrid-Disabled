<template>
    <div id="app">

        <oa-header :title="title" :right="right"></oa-header>
        <chat-model></chat-model>

        <div class="main-content">
            <div class="card" v-for="item in index" :key="item.index" @click="toChat">
                <div class="card-item">
                    <div class="header">
                        <img src="../assets/img/header/header.jpg" alt="header">
                    </div>
                    <div class="user">
                        <div class="username">{{item.username}}</div>
                        <div class="msg">{{item.msg}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import OaHeader from './Oa-header.vue'
import ChatModel from './Chat-model.vue'
export default {
    data() {
        return {
            title: '微信',
            index: [
                {username: '测试用户1',msg: '这是一条测试消息。'}, 
                {username: '测试用户2',msg: '这是一条测试消息。'}
            ],
            right: ['search', 'add']
        }
    },
    components: {
        OaHeader,
        ChatModel
    },
    methods: {
        toChat () {
            this.$store.commit('switch', 'chatModelVisible')
            console.log(this.$store.getters.chatModelVisible)
        }
    },
}
</script>

<style lang="scss" scoped>


    .main-content {
        margin-top: 16vw;
    }
    
    .user {
        margin-left: 3vw;
        // height: 17vw;
        width: 73vw;
        border-bottom: 0.1vw solid #DADADA;
        padding-left: 0.5vw;
        padding-top: 1vw;
        padding-bottom: 3vw
    }

    .username {
        font-size: 4.5vw;
        margin-top: 1vw;

    }

    .msg {
        color: #B5B5B5;
        font-size: 3.5vw;
        margin-top: 2vw;
        margin-bottom: 2.5vw
    }

    .card {
        .card-item {
            // height: 17vw;
            // background-color: red;
            display: flex;
            // border-bottom: 0.1vw solid #DADADA;
            align-items: center;
            padding-left: 2.5vw;
            // padding-button: 1vw;
            margin-bottom: 1vw;
            .header {
                height: 14.5vw;
                color: black;
                display: flex;
                margin-top: -2.5vw;
                img {
                    height: 100%;
                }
            }
        }
    }

</style>
