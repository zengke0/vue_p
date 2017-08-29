<template>
    <section class="list">
        <v-title :title="title"></v-title>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
                <router-link :to="'/news/details/'+ item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <p>{{item.title}}</p>
                        <div>
                            <p>创建时间:{{item.add_time | formatDate('YYYY-MM-DD') }}</p>
                            <p>点击数:{{item.click}}</p>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </section>
</template>
<script>
import config from '../../js/config.js';
// 导入title组件
import title from '../common/title.vue'
export default {
    data() {
        return {
            title: "新闻资讯",
            list: []
        }
    },
    methods: {
        getnewslist() {
            let url = config.newslist;
            this.$http.get(url).then(rep => {
                if (rep.body.status == 0)[
                    // console.log(rep),
                    this.list = rep.body.message
                ]
            })
        }
    },
    // 注册子组件,title公用子组件
    components: {
        "v-title": title
    },
    // 生命周期阶段当组件初始化完毕，数据和事件都也绑定好了的时候被自动调用
    created() {
        this.getnewslist();
    }
}
</script>
<style lang="less">
.list {
    p {
        display: inline-block;
    }
    // .lis {
    //     width: 100%;
    //     height: 40px;
    //     padding-top: 40px;
    // }
}
</style>


