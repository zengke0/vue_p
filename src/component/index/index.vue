<template>
    <article>
        <v-swipe :list="lunbo"></v-swipe>
        <v-nav></v-nav>
    </article>
</template>
<script>
    // 导入轮播模块
    import Cswipe from '../common/swipe.vue';
    import Cnav from './nav.vue';
    import config from '../../js/config.js'
    export default {
        data(){
            return {
                lunbo:[]
            }
        },
        methods:{
           getLunbo(){
               let url = config.navList;
               this.$http.get(url).then(rep =>{
                    let body = rep.body;
                    if(body.status ==0){
                        this.lunbo = body.message.map(function(item,i){
                            // 因为公用的轮播图的地址是src,这里轮播图的地址是img,所以要改成scr
                            item.src = item.img;
                            return item
                        })
                    }
               })
           }
        },
        // 嵌套子组件
        components:{
            "v-swipe":Cswipe,
            "v-nav":Cnav
        },
        created(){
            this.getLunbo();
        }
    }
</script>
<style>
    
</style>