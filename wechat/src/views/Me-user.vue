<template>
    <div id="app">
        <mt-header fixed class="header">
            <router-link to="/" slot="right">
                <img icon="more" src="@/assets/img/icon/camera.png" class="more">
            </router-link>
        </mt-header>
        <div class="main-content">
            <div class="card">
                <router-link to="/login" tag="div">
                    <div class="card-item">
                        <div class="header">
                            <img :src="userlogo" alt="header">
                        </div>
                        <div class="msg">
                            <div class="username">
                                {{username}}
                            </div>
                            <div class="usernum">
                                微信号：{{usernum}}
                            </div>
                        </div>
                        <div class="icon">
                            <div class="code">
                                <img src="@/assets/img/icon/QRCode.png">
                            </div>
                            <div class="go">
                                <img src="@/assets/img/icon/go.png">
                            </div>
                        </div>
                    </div>
                
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    .setting {
        margin-top: 10px;
    }

    .header {
        height: 8vh;
        background-color: #fff;
    }

    .main-content {
        margin-top: 8vh;
    }

    .more {
        height: 4vh;
        margin-right: 10%;
        margin-top: 3vh;
    }

    .card {
        display: flex;
        flex-wrap:wrap;

        .card-item {
            margin:0;
            background-color: white;
            font-size: 18px;
            width: 100%;
            padding: 3vh 10vh 3vh 4vh;
            display: flex;
            .header {
                width: 20%;
                img {
                    width: 100%;
                }
            }
            .msg {
                width: 40%;
                margin-left: 5vh;
                margin-top: 0.5vh;
                // float: left;
                .username{
                    font-weight: bold;
                    font-size: 8.5vw;
                }
                .usernum {
                    font-size: 4vw;
                    color: gray;
                    margin-top: 1.5vw;
                }
            }
            .icon {
                width: 20vw;
                margin-top: 12vw;
                // margin-right: 10px;
                text-align: right;
                display: flex;
                justify-content: flex-end;
                .code {
                    // display: flex;
                    // height: 4.5vh;
                    // height: 30px;
                    img{
                        // width: 100%;
                        height: 5vh;
                    }
                }
                .go {
                    // height: 2.5vh;
                    // // height: 30px;
                    img{
                        // width: 100%;
                        padding-top: 0.6vh;
                        height: 3vh;
                    }
                }
            }
        }
    }
</style>

<script>
export default {
    data () {
        return {
            userlogo: require('../assets/img/header/header.jpg'),
            username: '埋桑',
            usernum: 123456789
        }
    },
}
</script>

