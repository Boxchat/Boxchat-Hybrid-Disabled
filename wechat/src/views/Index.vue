<template>
    <div id="app">

        <oa-header title="首页"></oa-header>
        
        <div class="main-content">
            <div class="card">
                <div class="card-item">
                    <div class="header">
                        <img src="../assets/img/header/header.jpg" alt="header">
                    </div>
                    <div class="username">{{username}}</div>
                </div>
            </div>
            <div class="card">
                <div class="card-item">
                    <div class="header">
                        <img src="../assets/img/header/header.jpg" alt="header">
                    </div>
                    <div class="username">{{username}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import OaHeader from './Oa-header.vue'
export default {
    data() {
        return {
            username: '测试用户'
        }
    },
    components: {
        OaHeader  
    }
}
</script>

<style lang="scss" scoped>



    .main-content {
        margin-top: 16vw;
    }

    .card {
        .card-item {
            height: 20vw;
            // background-color: red;
            display: flex;
            align-items: center;
            padding-left: 3vw;
            border-bottom: 0.1vw solid #DADADA;
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
