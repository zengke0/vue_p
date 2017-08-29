// 打包文件入口
// 导入第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import MintUI from 'mint-ui';
// 导入mint-ui的css样式库
import "mint-ui/lib/style.css";
// 导入mui的css样式库
import 'mui/dist/css/mui.css'; 
// 引入mui的扩展图标样式
import 'mui/examples/hello-mui/css/icons-extra.css';

// 启用路由插件
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(MintUI);

// 导入我们自己写的东西
// 导入我们的组件
// 图片预览组件
import ImgPicture from '../component/plugin/img_preview_install.js';
Vue.use(ImgPicture);

import App from '../component/App.vue';
// 导入我们配置好的路由对象
import router from './router.js';
// 导入过滤器
import './filter.js';

// 创建一个Vue实例,关联视图,把跟组件渲染到视图中去
var vm = new Vue({
    el:"#app",
    // 把跟组件渲染到视图中去
    render:function(c){
        return c(App);
    },
    // 配置路由
    router:router
})