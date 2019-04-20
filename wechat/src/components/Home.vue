<template>
    <div id="app">
        <!-- <mt-header fixed title="移动办公系统" class="header"></mt-header> -->
        

        <mt-tab-container class="home-content" v-model="selected">
            <mt-tab-container-item id="index">
                <home-index></home-index>
            </mt-tab-container-item>
            <mt-tab-container-item id="address">
                <home-address></home-address>
            </mt-tab-container-item>
            <mt-tab-container-item id="me">
                <home-me></home-me>
            </mt-tab-container-item>
        </mt-tab-container>


        <mt-tabbar v-model="selected" class="tabbar" fixed>
            <mt-tab-item class="tabbar-item" id="index">
                <img slot="icon" src="../assets/img/tabbar/chat.svg">
                首页
            </mt-tab-item>
            <mt-tab-item class="tabbar-item" id="address">
                <img slot="icon" src="../assets/img/tabbar/address.svg">
                通讯录
            </mt-tab-item>
            <mt-tab-item class="tabbar-item" id="me">
                <img slot="icon" src="../assets/img/tabbar/me.svg">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
import HomeIndex from '../views/Index.vue'
import HomeAddress from '../views/Address.vue'
import HomeMe from '../views/Me.vue'

export default {
    data () {
        return {
            selected: 'index',
        }
    },
    watch: {
      selected: function (val, oldVal) {
        console.log(val)
        // click后打印出当前mt-tab-item的id
      }
    },
    components: {
        HomeIndex,
        HomeAddress,
        HomeMe
    }
}
</script>

<style lang="scss" scoped>

</style>

