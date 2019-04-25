<template>
    <div id="app">
        <div class="main-content">
            
            <!-- <Me-setting-model :popupVisible="settingModelVisible" :headertype="headertype"></Me-setting-model> -->
            <Me-setting-model :headertype="headertype"></Me-setting-model>
            <div class="card">
                <div class="card-item" @click="modelOpen">
                    <div class="icon">
                        <img src="@/assets/img/icon/Setting.png" alt="Icon-Setting">
                    </div>
                    <div class="font">
                        设置
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MeSettingModel from './Me-setting-model.vue'
export default {
    components: {
        MeSettingModel
    },
    data () {
        return {
            headertype: 'integral',
        }
    },
    methods: {
        modelOpen () {
            this.$store.commit('switch', 'settingModelVisible')
        }
    },
}
</script>

<style lang="scss" scoped>


    .icon {
        height: 3.5vh;
        // width: 20%;
        img {
            height: 100%;
        }
    }

    .font {
        height: 3.5vh;
        line-height: 22px;
        padding-left: 6vw;
    }

    .header {
        height: 8vh;
        background-color: #fff;
    }

    .more {
        height: 4vh;
        margin-right: 10%;
        margin-top: 3vh;
    }

    .card {
        display: flex;
        flex-wrap:wrap;

        .card-item {
            margin:0;
            background-color: white;
            font-size: 18px;
            width: 100%;
            padding: 3vh 10vh 3vh 4vh;
            display: flex;
        }
        .go {
            height: 3vh;
            margin-top: 8vh;
            margin-left: -10vw;
            img{
                height: 100%;
            }
        }
    }
</style>
