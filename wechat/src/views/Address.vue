<template>
    <div id="app">
        <oa-header :title="title" :headertype="headertype" :right="right"></oa-header>
        <div class="main-content">
            <mt-index-list class="mt-index-list">
                <mt-index-section index="A">
                    <mt-cell title="Aaron"></mt-cell>
                    <mt-cell title="Alden"></mt-cell>
                    <mt-cell title="Austin"></mt-cell>
                </mt-index-section>
                <mt-index-section index="B">
                    <mt-cell title="Baldwin"></mt-cell>
                    <mt-cell title="Braden"></mt-cell>
                </mt-index-section>
                <mt-index-section index="C">
                    <mt-cell title="Zack"></mt-cell>
                    <mt-cell title="Zane"></mt-cell>
                </mt-index-section>
                <mt-index-section index="D">
                    <mt-cell title="Zack"></mt-cell>
                    <mt-cell title="Zane"></mt-cell>
                </mt-index-section>
                <mt-index-section index="E">
                    <mt-cell title="Zack"></mt-cell>
                    <mt-cell title="Zane"></mt-cell>
                </mt-index-section>
                <mt-index-section index="F">
                    <mt-cell title="Zack"></mt-cell>
                    <mt-cell title="Zane"></mt-cell>
                </mt-index-section>
                <mt-index-section index="G">
                    <mt-cell title="Zack"></mt-cell>
                    <mt-cell title="Zane"></mt-cell>
                </mt-index-section>
                <mt-index-section index="H">
                    <mt-cell title="Zack"></mt-cell>
                    <mt-cell title="Zane"></mt-cell>
                </mt-index-section>
                <mt-index-section index="I">
                    <mt-cell title="Zack"></mt-cell>
                    <mt-cell title="Zane"></mt-cell>
                </mt-index-section>
                <mt-index-section index="J">
                    <mt-cell title="Zack"></mt-cell>
                    <mt-cell title="Zane"></mt-cell>
                </mt-index-section>
                <mt-index-section index="L">
                    <mt-cell title="Zack"></mt-cell>
                    <mt-cell title="Zane"></mt-cell>
                </mt-index-section>
                <mt-index-section index="M">
                    <mt-cell title="Zack"></mt-cell>
                    <mt-cell title="Zane"></mt-cell>
                </mt-index-section>
                <mt-index-section index="N">
                    <mt-cell title="Zack"></mt-cell>
                    <mt-cell title="Zane"></mt-cell>
                </mt-index-section>
                <mt-index-section index="O">
                    <mt-cell title="Zack"></mt-cell>
                    <mt-cell title="Zane"></mt-cell>
                </mt-index-section>
                <mt-index-section index="P">
                    <mt-cell title="Zack"></mt-cell>
                    <mt-cell title="Zane"></mt-cell>
                </mt-index-section>
                <mt-index-section index="Q">
                    <mt-cell title="Zack"></mt-cell>
                    <mt-cell title="Zane"></mt-cell>
                </mt-index-section>
                <mt-index-section index="R">
                    <mt-cell title="Zack"></mt-cell>
                    <mt-cell title="Zane"></mt-cell>
                </mt-index-section>
                <mt-index-section index="S">
                    <mt-cell title="Zack"></mt-cell>
                    <mt-cell title="Zane"></mt-cell>
                </mt-index-section>
                <mt-index-section index="T">
                    <mt-cell title="Zack"></mt-cell>
                    <mt-cell title="Zane"></mt-cell>
                </mt-index-section>
                <mt-index-section index="U">
                    <mt-cell title="Zack"></mt-cell>
                    <mt-cell title="Zane"></mt-cell>
                </mt-index-section>
                <mt-index-section index="V">
                    <mt-cell title="Zack"></mt-cell>
                    <mt-cell title="Zane"></mt-cell>
                </mt-index-section>
                <mt-index-section index="W">
                    <mt-cell title="Zack"></mt-cell>
                    <mt-cell title="Zane"></mt-cell>
                </mt-index-section>
                <mt-index-section index="X">
                    <mt-cell title="Zack"></mt-cell>
                    <mt-cell title="Zane"></mt-cell>
                </mt-index-section>
                <mt-index-section index="Y">
                    <mt-cell title="Zack"></mt-cell>
                    <mt-cell title="Zane"></mt-cell>
                </mt-index-section>
                <mt-index-section index="Z">
                    <mt-cell title="Zack"></mt-cell>
                    <mt-cell title="Zane"></mt-cell>
                </mt-index-section>
            </mt-index-list>

        </div>
    </div>
</template>

<style lang="scss" scoped>

    .main-content {
        margin-top: 16vw
    }

    .mt-index-list {
        height: 78vh;
    }
</style>

<script>
import OaHeader from './Oa-header.vue'
export default {
    components: {
        OaHeader
    },
    data () {
        return {
            title: '通讯录',
            headertype: 'integral',
            right: ['search', 'add']
        }
    }
}
</script>

