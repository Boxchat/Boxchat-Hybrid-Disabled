<template>
    <mt-popup v-model="modelStat" position="right" class="pop--gray app">
        <oa-header :where="where" :title="title" :headertype="headertype" @modelClose="modelClose"></oa-header>
        <me-setting-appear class="me-setting-appear"></me-setting-appear>
    </mt-popup>
</template>

<style lang="scss">
    .pop--white {
        height: 100vh;
        width: 100vw;
        background-color: white;
    }
    .me-setting-appear {
        margin-top: 16vw
    }
</style>

<style lang="scss" scoped>
    .pop--gray {
        height: 100vh;
        width: 100vw;
        background-color: #EDEDED;
    }
</style>



<script>
import OaHeader from './Oa-header.vue';
import MeSettingAppear from './Me-setting-appear.vue'
export default {
    props:["popupVisible", 'headertype'], 
    components: {
        OaHeader,
        MeSettingAppear
    },
    data () {
        return {
            title: '设置',
            back: 'back',
            modelStat: false,
            where: 'setting'
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

