<template>
    <div id="app">

        <oa-header :title="title"></oa-header>
        <chat-model></chat-model>

        <div class="main-content">
            <div class="card" v-for="item in index" :key="item.index">
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
            ]
        }
    },
    components: {
        OaHeader,
        ChatModel
    }
}
</script>

<style lang="scss" scoped>

    .username {
        font-size: 4.5vw

    }

    .main-content {
        margin-top: 16vw;
    }
    
    .user {
        margin-left: 4vw;
        height: 13vw;
        width: 75vw;
        border-bottom: 0.1vw solid #DADADA;
    }

    .msg {
        color: #B5B5B5;
        font-size: 3.8vw;
        margin-top: 1vw;
        // padding-bottom: 0;
    }

    .card {
        .card-item {
            height: 20vw;
            // background-color: red;
            display: flex;
            // border-bottom: 0.1vw solid #DADADA;
            align-items: center;
            padding-left: 2.5vw;
            .header {
                height: 13vw;
                color: black;
                display: flex;
                img {
                    height: 100%;
                }
            }
        }
    }

</style>
