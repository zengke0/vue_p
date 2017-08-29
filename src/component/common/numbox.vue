<template>
    <div class="mui-numbox">
        <button class="mui-btn mui-btn-numbox-minus" @click="subtract">-</button>
        <input class="mui-input-numbox" type="number" v-model="value">
        <button class="mui-btn mui-btn-numbox-plus" @click="add">+</button>
    </div>
</template>
<script>
export default {
    // 从父组件传来默认值
    props: ['initVal'],
    data() {
        // 初始值 有初始值就读取,没有就赋值0
        return {
            value: this.initVal || 0
        }
    },
    methods: {
        // 减少
        subtract() {
            // if(this.value >0){
            //     this.value--;
            // }else {
            //     value:0;
            // }
            this.value && this.value--;
        },
        // 增加
        add() {
            this.value++;
        },
    },
    // 当值变化时，通过事件的方式传给父
    watch: {
        value() {
            // 通过$emit事件传给父
            this.$emit('change', this.value);
        }
    }
}
</script>
<style>

</style>


