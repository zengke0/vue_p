<template>
    <section class="comment">
        <!-- 提交评论 -->
        <div class="mui-card">
            <div class="mui-card-header">
                <h3>提交评论</h3>
            </div>
            <div class="mui-card-content">
                <textarea v-model="content" id="textarea" rows="5" placeholder="请发表您滴看法..."></textarea>
                <button @click="submitComment" type="button" class="mui-btn mui-btn-success mui-btn-block">发表</button>
            </div>
        </div>
        <!--  评论列表  -->
         <div class="mui-card">
            <div class="mui-card-header">
                <h3>评论列表</h3>
            </div>
            <div class="mui-card-content">
                <ul class="mui-table-view">
                    <li v-for="(item, i) in list" :key="i" class="mui-table-view-cell">
                        <div>
                            <span>第{{ i + 1 }}楼 </span>
                            <span>用户:{{ item.user_name }} </span>
                            <span>发表时间:{{ item.add_time | formatDate }} </span>
                        </div>
                        <p>{{ item.content }}</p>
                    </li>
                </ul>
                <button ref="loadMoreBtn" @click="getComment" type="button" class="mui-btn mui-btn-success mui-btn-block">加载更多</button>
            </div>
        </div> 
    </section>
</template>
<script>
import config from '../../js/config.js';
// 引入一个样式变量
import { Toast } from 'mint-ui';
export default {
    // 评论数据
    data() {
        return {
            // 发表评论的内容
            content: "",
            pageindex: 1,
            // 评论列表数据
            list: []
        }
    },
    // 获取父组件上的id
    props: ["id"],
    methods: {
        // 发表评论的方法
        submitComment() {
            let url = config.commentPut + this.id;
            // 发表评论的数据 
            let data = { content: this.content };
            this.$http.post(url, data, { emulateJSON: true }).then(rep => {
                // 请求的数据
                let body = rep.body;
                if (body.status == 0) {
                    // 提示 mui上的样式
                    Toast({
                        message: '操作成功',
                        iconClass: 'icon icon-success'
                    });
                    // 成功后将数据添加到评论列表的最前面
                    this.list.unshift({
                        user_name: '匿名用户',
                        add_time: Date.now(),
                        content: this.content
                    });
                    // 发表完评论后清空输入框内容
                    this.content = '';
                }
            })
        },
        // 获取评论列表
        getComment() {
            let url = `${config.commentList + this.id}?pageindex=${this.pageindex}`;
            this.$http.get(url).then(rep => {
                let body = rep.body;
                // 如果当前页已经么有数据了，那么不用push也不用pageindex++了
                if (body.status == 0 && body.message.length > 0) {
                    this.list.push(...body.message);
                    this.pageindex++;
                } else {
                    this.$refs.loadMoreBtn.disabled = true;
                }
            });
        }
    },
    created(){
        this.getComment();
    }
}
</script>
<style lang = 'less'>
.comment {
    .mui-card-content {
        padding: 4px 8px;
        p {
            background-color: rgba(0, 0, 0, .3);
            color: #333;
        }
    }
    .mui-btn-success {
        background-color: #1be4db;
        border-color: #1be4db;
    }
}
</style>


