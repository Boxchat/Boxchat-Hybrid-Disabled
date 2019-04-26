<template>
    <div id="app">
        <div class="card" v-for="item of this.listCardData" :key="item.id">
            <div class="card-item">{{item}}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .card-item {
        background-color: white;
        padding: 5vw 4vw 5vw 4vw;
        font-size: 4.5vw;
        // margin-bottom: 3vw;
        border-bottom: 1px;
    }
</style>

<script>
export default {
    props:['listCardData'],
}
</script>

