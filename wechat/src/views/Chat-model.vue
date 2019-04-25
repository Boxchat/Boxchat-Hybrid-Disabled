<template>
    <mt-popup v-model="popupVisible" position="right" class="pop--white">
        <oa-header :headertype="headertype" :title="chatuser"></oa-header>
        <mt-tabbar></mt-tabbar>
    </mt-popup>
</template>

<script>
import OaHeader from './Oa-header.vue'
export default {
    data () {
        return {
            popupVisible: false,
            headertype: "integral",
            chatuser: '聊天对象1'
        }
    },
    components: {
        OaHeader
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

<style lang="scss" scoped>
    // .mint-popup {
    //     background: white;
    // }
</style>

