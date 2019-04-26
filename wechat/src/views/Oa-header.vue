<template>
    <div id="app">
        <mt-header fixed class="header">
            <div slot="left" class="title">
                <mt-button icon="back" v-if="this.headertype == 'integral' && this.where == 'setting'" @click="modelClose_Setting"></mt-button>
                <mt-button icon="back" v-if="this.headertype == 'integral' && this.where == 'chat'" @click="modelClose_Chat"></mt-button>
                {{title}}
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

<style lang="scss" scoped>
    .header {
        background-color: #EDEDED;
        color: black;
        height: 16vw;
        padding-left: 5%;
        border-bottom: 1px solid #DADADA;
    }
    .title {
        font-size: 5vw;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        // font-weight: bold;
    }
</style>
