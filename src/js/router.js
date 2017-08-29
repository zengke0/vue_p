// 导入包
import VueRouter from 'vue-router';

// 导入index组件
import Cindex from '../component/index/index.vue';
// 导入新闻列表组件
import Cnewslist from '../component/news/list.vue';
// 导入新闻详情组件
import CnewsDetails from '../component/news/details.vue';


// 导入图片分类组件
import CphotoList from '../component/photo/list.vue';
// 导入图片详情组件
import CphotoDetails from '../component/photo/details.vue';


// 导入商品列表组件
import CgoodsList from '../component/goods/list.vue';
// 导入商品详情组件
import CgoodsDetails from '../component/goods/details.vue';

// 导入购物车组件
import Cshopcar from '../component/shopcar/list.vue';

// 导出一个路由实例
export default new VueRouter({
    routes: [
        // 首页
        { path: '/', redirect: '/index' },
        { path: '/index', component: Cindex },
        // 新闻
        { path: '/news/list', component: Cnewslist },
        { path: '/news/details/:id', component: CnewsDetails },
        // 图片分享
        { path: '/photo/list/:id', component: CphotoList },
        { path: '/photo/details/:id', component: CphotoDetails },
        // 商品购买
        { path: '/goods/list', component: CgoodsList },
        { path: '/goods/details/:id', component: CgoodsDetails },
        // 购物车结算
        { path: '/shopcar/list/', component: Cshopcar },
    ]
});
