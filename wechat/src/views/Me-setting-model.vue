<template>
    <mt-popup v-model="modelStat" position="right" class="pop--white">
        <oa-header :title="title" :headertype="headertype" @modelClose="modelClose"></oa-header>
        
    </mt-popup>
</template>

<style lang="scss">
    .pop--white {
        height: 100vh;
        width: 100vw;
        background-color: white;
    }
</style>

<script>
import OaHeader from './Oa-header.vue'
export default {
    props:["popupVisible", 'headertype'], 
    components: {
        OaHeader
    },
    data () {
        return {
            title: '设置',
            back: 'back',
            modelStat: false,
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

