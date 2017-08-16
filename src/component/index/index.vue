<template>
    <article>
        <v-swipe></v-swipe>
        <v-nav></v-nav>
    </article>
</template>
<script>
    // 导入轮播模块
    import Cswipe from './swipe.vue';
    import Cnav from './nav.vue';
    export default {
        // 嵌套子组件
        components:{
            "v-swipe":Cswipe,
            "v-nav":Cnav
        }
    }
</script>
<style>
    
</style>