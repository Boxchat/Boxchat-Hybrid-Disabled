<template>
    <div id="app">
        <mt-header fixed class="header">
            <div slot="left" class="title">
                <mt-button icon="back" v-if="this.headertype == 'integral' && this.where == 'setting'" @click="modelClose_Setting"></mt-button>
                <mt-button icon="back" v-if="this.headertype == 'integral' && this.where == 'chat'" @click="modelClose_Chat"></mt-button>
                {{title}}
            </div>
            <div slot="right" class="icon-area">
                <div class="icon-search">
                    <img src="@/assets/img/icon/search.png" alt="icon-search" class="img-100">
                </div>
                <div class="icon-add">
                    <img src="@/assets/img/icon/add.svg" alt="icon-add" class="img-100">
                </div>
            </div>
        </mt-header>
    </div>
</template>

<script>
export default {
    props:['title', 'headertype', 'where'],
    data () {
        return{
            popupVisible: false,
        }
    },
    methods: {
        modelClose_Setting () {
            // console.log(this.popupVisible);
            this.$store.commit('switch', 'settingModelVisible')

        },
        modelClose_Chat () {
            this.$store.commit('switch', 'chatModelVisible')
        }
    },

}
</script>

// 全局 CSS, 项目完成前需要单独封装
<style lang="scss">
    .img-100 {
        width: 100%;
    }
</style>


<style lang="scss" scoped>
    .header {
        background-color: #EDEDED;
        color: black;
        height: 16vw;
        padding-left: 5vw;
        padding-right:5vw;
        border-bottom: 1px solid #DADADA;
    }
    .title {
        font-size: 5vw;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        // font-weight: bold;
    }

    .icon-area {
        display: flex;
        justify-content: flex-end;
        // align-items: 
    }

    .icon-search {
        width: 9vw;
    }

    .icon-add {
        width: 6.5vw;
        margin-top: 1.5vw;
        margin-left: 6vw
    }
</style>
