<template>
    <section class=" title mint-header">
        <div @click="rollback" class="mint-header-button is-left">
            <a href="#/" class="router-link-active">
                <button class="mint-button mint-button--default mint-button--normal">
                    <span class="mint-button-icon">
                        <i class="mintui mintui-back"></i>
                    </span>
                    <label class="mint-button-text">返回</label>
                </button>
            </a>
        </div>
        <h1 class="mint-header-title">{{title}}</h1>
        <div class="mint-header-button is-right"></div>
    </section>
</template>
<script>
export default {
    // 动态改变title顶部文字
    // 接收来自父的title
    props: ["title"],
    // 返回的逻辑处理
    methods: {
        rollback() {
            // 路由有一个方法返回
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="less" scope>
.title {
    background-color: greenyellow;
    border-bottom: 1px solid #ccc;
    color: #fff;
    // position: fixed;
    // top: 40px;
    // z-index: 3;
    // width: 100%;
    // margin-bottom: 40px;
}
</style>


