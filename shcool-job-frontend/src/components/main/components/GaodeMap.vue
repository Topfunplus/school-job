<template>
    <div id="root">
        <div id="container"></div>
    </div>
</template>
<script setup lang="ts">

import { onMounted } from 'vue'
import AMapLoader from '@amap/amap-jsapi-loader'

onMounted(() => {
    window._AMapSecurityConfig = {
        securityJsCode: 'ed59690950621ee03c08f8fe5228edf4'
    }

    AMapLoader.load({
        key: 'eb0b50fccd9a1067e9e1975845a15a88', //申请好的Web端开发者 Key，调用 load 时必填
        version: '2.0' //指定要加载的 JS API 的版本，缺省时默认为 1.4.15
    })
        .then((AMap) => {
            const map = new AMap.Map('container')
        })
        .catch((e) => {
            console.error(e) //加载错误提示
        })
})


</script>
<style lang="scss">
#container {
    margin: 0 auto;
    width: $search-bar-width;
    height: 230px;
    border: 1px solid #ccc;
}
</style>

