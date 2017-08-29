<template>
    <section class="list">
        <!-- 图片分类 -->
        <div id="wrapper">
            <ul>
                <!-- <li>全部</li> -->
                <li v-for="item in categoryList" :key="item.id">
                    <router-link :to="'/photo/list/' + item.id">{{ item.title }}</router-link>
                </li>
            </ul>
        </div>
        <!-- 图片列表 -->
        <div class="mui-card" v-for="item in photoList" :key="item.id">
            <router-link :to="'/photo/details/' + item.id">
                <div class="mui-card-header">
                    <img v-lazy="item.img_url" :src="item.img_url">
                </div>
            </router-link>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>{{item.title}}</p>
                    <p style="color: #333;">{{item.zhaiyao}}</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import config from '../../js/config.js';
// 引入iscroll文件
import iScroll from '../../lib/iscroll.js'
export default {
    data() {
        return {
            // 分类列表数据
            categoryList: [],
            // 图片列表数据
            photoList: []
        }
    },
    watch: {
        // 监听路由的变化,一但变化,重新渲染对应id的列表
        $route() {
            this.getphotoList(this.$route.params.id);
        }
    },
    methods: {
        // 获取图片分类列表
        getcategoryList() {
            let url = config.photoCategoryList;
            this.$http.get(url).then(rep => {
                if (rep.body.status == 0) {
                    this.categoryList = rep.body.message;
                    // console.log(this.categoryList);
                    // 自计算宽度
                    this.$el.querySelector("#wrapper ul").style.width = 90 * this.categoryList.length + "px";
                    new iScroll('#wrapper', {
                        scrollX: true,
                        scrollY: false
                    })

                }
            })
        },
        // 获取图片列表
        getphotoList(id) {
            let url = config.photoList + id;
            this.$http.get(url).then(rep => {
                let body = rep.body;
                if (body.status == 0) {
                    // 请求成功时 遍历photoList数组,修改每一个img_url的地址
                    this.photoList = body.message.map(function (photo, i) {
                        photo.img_url = config.imgDomain + photo.img_url;
                        return photo;
                    })
                }
            })
        },
        // 获取图片列表的背景图
        getStyle(item) {
            return 'height:40vw; background-image:url("' + item.img_url + '")';
        }
    },
    created() {
        // 页面一进来就要渲染分类列表,然后根据url中的数据带着id渲染对应图片列表
        this.getcategoryList();
        this.getphotoList(this.$route.params.id);
    }
}
</script>
<style lang="less" scope>
.list {
    #wrapper {
        position: relative;
        overflow: hidden;
        ul {
            margin: 5px 0, 0, 0;
            padding: 0;
            list-style: none;
            text-align: center;
            li {
                width: 90px;
                height: 40px;
                line-height: 40px;
                background-color: #fff;
                float: left;
                a {
                    color: dimgray;
                }
            }
        }
    }
    .mui-card-header img {
        width: 100%;
        height: 100%;
        &[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
        }
    }
}
</style>


