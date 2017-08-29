<template>
    <section>
        <!-- 图片详情的模板 -->
        <v-title :title="title"></v-title>
        
        <div class="mui-card">
            <div class="mui-card-header">
                <h4>{{info.title}}</h4>
            </div>
            <div class="mui-card-content-inner">
                <span>创建时间:{{info.add_time| formatDate }}</span>
                <span>点击量:{{info.click}}</span>
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <ul class="mui-table-view mui-grid-view">
                        <li class="mui-table-view-cell mui-media mui-col-xs-4" v-for="item in hums" :key="item.id">
                            <img class="mui-media-object" :src="item.src" v-preview="item.src">
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mui-card-footer" v-html="info.content"></div>
        </div>
    </section>
</template>
<script>
import config from '../../js/config.js';
import title from '../common/title.vue'
export default {
    data() {
        return {
            info: {},
            hums: [],
            title: "图片详情"
        }
    },
    methods: {
        // 获取图片详情的数据
        getInfo() {
            let url = config.photoInfo + this.$route.params.id;
            this.$http.get(url).then(rep => {
                let body = rep.body;
                if (body.status == 0) {
                    this.info = body.message[0];
                }
            })
        },
        // 获取缩略图
        getphoto() {
            let url = config.photoHums + this.$route.params.id;
            this.$http.get(url).then(rep => {
                console.log(rep);
                let body = rep.body;
                if (body.status == 0) {
                    this.hums = body.message.map(function (photo, i) {
                        photo.src = config.imgDomain + photo.src;
                        return photo;
                    })
                }
            })
        }
    },
    created() {
        this.getInfo();
        this.getphoto();
    },
    components: {
        "v-title": title
    }
}
</script>
<style>

</style>


