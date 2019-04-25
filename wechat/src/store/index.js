import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


// 创建 store 对象
const store = new Vuex.Store({

    // 共享数据的容器
    state: {
        settingModelVisible:false,
        chatModelVisible:false,
        testData: 5
    },

    // 操作共享数据的方法
    mutations: {

        // 将来可能会删除此方法，请尽量使用 changeModelMode 完成模态框的开启或关闭（代码非重用问题）
        settingModelVisible (state) {
            if (state.settingModelVisible == true){
                state.settingModelVisible = false;
            }
            else {
                state.settingModelVisible = true
            }
        },

        // Soft-Vuex
        // 该子项目之后可能开源使用
        // 开关组件 => 控制组件中只有 true 和 false 的状态
        switch (state, dataName) {
            if (state[dataName] == true){
                state[dataName] = false;
            }
            else {
                state[dataName] = true;
                
            }
        },

        // 简单计算组件 => 完成数据的简单增加减
        simCal (state, dataName, val) {
            state[dataName] += val;
        }
    },

    // 获取共享数据的方法
    getters: {
        settingModelVisible (state) {
            return state.settingModelVisible;
        },
        chatModelVisible (state) {
            return state.chatModelVisible;
        }
    },
});
 
export default store;