<template>
    <mt-popup v-model="modelStat" position="right" class="pop--gray app">
        <oa-header :where="where" :title="title" :headertype="headertype" @modelClose="modelClose" class="oa-header"></oa-header>
        <!-- <me-setting-appear class="me-setting-appear"></me-setting-appear> -->
        <list-card :listCardData="listCardData_1" class="list-card"></list-card>
        <list-card :listCardData="listCardData_2" class="list-card"></list-card>
        <list-card :listCardData="listCardData_3" class="list-card"></list-card>
        <list-card :listCardData="listCardData_4" class="list-card"></list-card>
    </mt-popup>
</template>

// 全局 CSS，项目结束前需要单独封装
<style lang="scss">

    .pop--white {
        height: 100vh;
        width: 100vw;
        background-color: white;
    }

    .pop--gray {
        min-height: 100vh;
        // margin-top: 0px;
        width: 100vw;
        background-color: #EDEDED;
    }

    .me-setting-appear {
        margin-top: 16vw
    }
</style>

// 局部 CSS
<style lang="scss" scoped>
    .oa-header {
        margin-top: 16vw
    }

    .list-card {
        margin-bottom: 3vw
    }
</style>

<script>
import ListCard from './card.vue'
import OaHeader from './Oa-header.vue';
import MeSettingAppear from './Me-setting-appear.vue'
export default {
    props:["popupVisible", 'headertype'], 
    components: {
        OaHeader,
        MeSettingAppear,
        ListCard
    },
    data () {
        return {
            title: '设置',
            back: 'back',
            modelStat: false,
            where: 'setting',
            listCardData_1: ['账号与安全'],
            listCardData_2: ['新消息提醒', '勿扰模式', '聊天', '隐私', '通用'],
            listCardData_3: ['关于微信', '帮助和反馈'],
            listCardData_4: ['插件']
        }
    },
    methods: {
        modelClose () {
            this.$store.commit('settingModelVisible')

        }
    },
    watch: {
        VuexModelStat (val) {
            this.modelStat = val
        }
    },
    computed: {
        VuexModelStat () {
            return this.$store.getters.settingModelVisible
        }
    },
}
</script>

