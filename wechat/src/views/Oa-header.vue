<template>
    <div id="app">
        <mt-header fixed class="header">
            <div slot="left" class="title">
                <mt-button icon="back" v-if="this.headertype == 'integral'" @click="modelClose"></mt-button>
                {{title}}
            </div>
        </mt-header>
    </div>
</template>

<script>
export default {
    props:['title', 'headertype'],
    data () {
        return{
            popupVisible: false,
        }
    },
    methods: {
        modelClose () {
            // console.log(this.popupVisible);
            this.$emit('modelClose', this.popupVisible)
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
        font-size: 6vw;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        // font-weight: bold;
    }
</style>
