<template>
    <section class="swipe">
        <mt-swipe :auto="1500">
            <mt-swipe-item v-for="(item,i) in list" :key="i">
                <a :href="item.url">
                    <img :src="item.src" />
                </a>
            </mt-swipe-item>
        </mt-swipe>
    </section>
</template>
<script>
export default {
    // 定义轮播图的数据
    // 传入来自父组件的轮播图数据
    props: ["list"],
}
</script>
<style lang="less">
.swipe {
    height: 200px;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>

