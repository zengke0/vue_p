<template>
    <article class="goods-detail">
        <!-- 标题 -->
        <v-title :title="title"></v-title>
        <!-- 轮播图 -->
        <v-swipe :list="lunbo"></v-swipe>
        <!-- 商品购买 -->
        <div class="mui-card">
            <!-- 名称 -->
            <div class="mui-card-header">{{goodsInfo.title}}</div>
            <!-- 价格 -->
            <div class="mui-card-content mui-card-content-inner">
                <div class="price">
                    <s>市场价:￥{{goodsInfo.market_price}}</s>
                    <span>销售价: </span>
                    <em>￥{{goodsInfo.sell_price}}</em>
                </div>
                <div>
                    <span>购买数量：</span>
                    <!--数字输入框  通过事件监控数量是否变化 让我们知道选择是多少-->
                    <v-numbox :inintVal="total" @change="upTotal"></v-numbox>
                </div>
            </div>
            <!-- 按钮 -->
            <div class="mui-card-footer">
                <router-link to="/shopcar/list/" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">结算</router-link>
                <div></div>
                <button type="button" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined" @click="addShopcart">加入购物车</button>
            </div>
        </div>
    
        <!-- 评论与介绍 -->
        <div class="mui-card">
            <!-- 选项卡 -->
            <mt-navbar v-model="selectedTab">
                <mt-tab-item id="v-comment">商品评论</mt-tab-item>
                <mt-tab-item id="v-info">图文介绍</mt-tab-item>
            </mt-navbar>
            <!-- 显示内容,根据id来切换组件 -->
            <component :id="id" :is="selectedTab"></component>
            <!-- 内容 
            <mt-tab-container v-model="selectedTab">
                <mt-tab-container-item id="comment">
                    <v-comment :id="id"></v-comment>
                </mt-tab-container-item>
                <mt-tab-container-item id="info">
                    <v-info :id="id"></v-info>
                </mt-tab-container-item>
            </mt-tab-container> -->
        </div>
    
    </article>
</template>
<script>
import config from '../../js/config.js';
import title from '../common/title.vue';
import comment from '../common/comment.vue';
import info from './info.vue';
import swipe from '../common/swipe.vue';
import numBox from '../common/numbox.vue';
export default {
    data() {
        return {
            // 标题
            title: "商品详情",
            // 价格信息
            goodsInfo: {},
            // 轮播图
            lunbo: [],
            // 评论与详情
            selectedTab: "",
            // 商品的id
            id: this.$route.params.id,
            // 购买的历史数量
            total: 10
        }
    },
    methods: {
        // 获取商品信息
        getgoodsInfo() {
            let url = config.goodsInfo + this.id;
            this.$http.get(url).then(rep => {
                let body = rep.body;
                if (body.status == 0) {
                    this.goodsInfo = body.message[0];
                }
            })
        },
        // 获取轮播图数据
        getlunBo() {
            let url = config.photoHums + this.id;
            this.$http.get(url).then(rep => {
                let body = rep.body;
                // console.log(body.message)
                if (body.status == 0) {
                    this.lunbo = body.message.map(item => {
                        item.src = config.imgDomain + item.src;
                        // console.log(item);
                        return item;
                    })
                }
            })
        },
        // 更新商品选择的数量
        upTotal(v){
            this.total = v;
            console.log(v);
        },
        // 将选择的数量加入购物车
        addShopcart() {
           document.querySelector(".mui-badge").innerHTML = this.total;
        }
    },
    created() {
        this.getgoodsInfo();
        this.getlunBo();
    },
    components: {
        "v-comment": comment,
        "v-info": info,
        "v-title": title,
        "v-swipe": swipe,
        "v-numbox": numBox
    }
}
</script>
<style lang="less">
.goods-detail {
    .mui-card-content {
        .price {
            color: rgb(51, 51, 51);
            margin-bottom: 4px;
            span {
                margin-left: 6px;
            }
            em {
                font-size: 18px;
                color: red;
            }
        }
    }
    .mui-card-footer {
        div {
            width: 100%;
        }
        .mui-btn {
            padding: 8px 0;
            font-size: 16px;
        }
    }
    .mint-tab-item {
        &.is-selected {
            margin-bottom: 0;
            border-bottom: 3px solid #2ce094;
            color: #2ce094;
        }
    }
    .mint-tab-item-label {
        font-size: 18px;
        color: #2ce094;
    }
}
</style>


