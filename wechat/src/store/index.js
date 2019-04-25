import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


// 创建 store 对象
const store = new Vuex.Store({

    // 共享数据的容器
    state: {
        settingModelVisible:false
    },

    // 操作共享数据的方法
    mutations: {
        changeSettingModelVisible (state) {
            if (state.settingModelVisible == true){
                state.settingModelVisible = false;
            }
            else {
                state.settingModelVisible = true

            }
        }
    },

    // 获取共享数据的方法
    getters: {
        SettingModelVisible (state) {
            return state.settingModelVisible;
        }
    },
});
 
export default store;