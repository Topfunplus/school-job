<script setup lang="ts">

import IconApp from '@/components/icons/IconApp.vue'
import HeaderList from '@/components/header/HeaderList.vue'
import SelfInfo from '@/components/header/SelfInfo.vue'
</script>

<template>
    <div>
        <div class="header">
            <div class="header-left">
                <IconApp />
                <HeaderList />
            </div>
            <div class="header-right">
                <SelfInfo />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-around;
    align-content: center;
    width: 100%;
    height: 60px;
    //background-color: $base-background;
    background-color: $bg-200;

    .header-left {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .header-right {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
