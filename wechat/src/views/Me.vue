<template>
    <div id="app">
        <me-user class="me-user"></me-user>
        <me-setting class="me-setting"></me-setting>
        <mt-button type="danger" size="large" class="exit-button" @click="exitButton">退出登录</mt-button>
    </div>
</template>


<script>
import MeUser from "../views/Me-user.vue"
import MeSetting from "../views/Me-setting.vue"
export default {
    methods: {
        exitButton () {
            let dbcheck = this.$messagebox.confirm('您真的要退出登录吗', '退出登录')
                .then(()=>{
                    location.replace('#/login');
                })
        }
    },
    components: {
        MeUser,
        MeSetting
    }
}
</script>

<style lang="scss" scoped>
    .exit-button {
        margin-top: 3vh;
        // font-size: 5vw;
        // height: 10vw;
    }
    .me-user {
        margin-top: 8vh;
        border-bottom: 0.5px solid #DADADA;
    }
    
    .me-setting {
        // margin-top: 2vh;
        // border-top: 0.5px solid #DADADA;
        border-bottom: 0.5px solid #DADADA;
    }
</style>

