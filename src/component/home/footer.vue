<template>
    <footer class="footer">
        <nav class="mui-bar mui-bar-tab">
            <router-link to="/index" class="mui-tab-item mui-active">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <a class="mui-tab-item" href="#tabbar-with-chat">
                <router-link to="/goods/list">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
                    <span class="mui-tab-label">商品购买</span>
                </router-link>
    
            </a>
            <a class="mui-tab-item" href="#tabbar-with-contact">
                <router-link to="/shopcar/list">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-express">
                        <span class="mui-badge">0</span>
                    </span>
                    <span class="mui-tab-label">购物车</span>
                </router-link>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-map">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">个人中心</span>
            </a>
        </nav>
        <div></div>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style lang="less">
.footer {
    div {
        height: 50px;
    }
}
</style>
