<template>
    <mt-popup v-model="modelStat" position="right" class="pop--white mt-popup">
        <oa-header :where="where" :headertype="headertype" :title="chatuser"></oa-header>
        <mt-tabbar class="tabbar">
            <div class="tabbar-content">
                <mt-field placeholder="请输入发送的消息..." type="text" class="text-input" @blur.native.capture="test"></mt-field>
                <mt-button class="send-button" plain>发送</mt-button>
            </div>
        </mt-tabbar>
    </mt-popup>
</template>

<style lang="scss" scoped>

    .mt-popup {
        background-color: #EDEDED;
    }

    .tabbar {
        height: 15vw;
        width: 100%;
        background-color: #f7f7f7;
        padding-left: 5vw
    }

    .tabbar-content {
        display: flex;
        align-items: center;
        width: 100%;
    }

    .text-input {
        // border: solid 1px gray;
        width: 70%;
        height: 5vw;
    }

    .send-button {
        // align-self: flex-end;
        // float: right;
        width: 16vw;
        height: 10vw;
        font-size: 4vw;
        margin-left: 5vw;
        border: 0;
        background-color: #07c160;
        color:white;
    }

</style>


<script>
import OaHeader from './Oa-header.vue'
export default {
    data () {
        return {
            modelStat: this.$store.getters.chatModelVisible,
            headertype: 'integral',
            chatuser: '聊天对象1',
            where: 'chat'
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
            return this.$store.getters.chatModelVisible
        }
    },
    methods: {
        // send (e) {
        //     e.preventDefault();
        // },
        test () {
            console.log(1)
        }
    },
}
</script>

