
export default {
  

}

// 目前咱们完成的这个商品选购存取，操作的都是内存，关闭页面，数据丢失
// 还需要和localStorage做一个关联：
// 1.1、在初始化goodsTotal的值的时候，应该先尝试着从localStorage里面取值
// 1.2、在set的时候，需要把goodsTotal的值存储到localStorage里