<template>
    <mt-popup v-model="modelstat" position="right" class="pop--white">
        <oa-header :title="title" :headertype="headertype" @modelClose="modelClose"></oa-header>
        
    </mt-popup>
</template>

<style lang="scss" scoped>
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
            modelstat: false,
        }
    },
    methods: {
        modelClose () {
            this.$store.commit('changeSettingModelVisible')

        }
    },
    watch: {
        Vuetest (val) {
            this.modelstat = val
        }
    },
    computed: {
        Vuetest () {
            return this.$store.getters.SettingModelVisible
        }
    },
}
</script>

