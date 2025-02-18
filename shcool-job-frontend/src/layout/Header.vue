<script setup lang="ts">

import IconApp from '@/components/icons/IconApp.vue'
import HeaderList from '@/components/header/HeaderList.vue'
import SelfInfo from '@/components/header/SelfInfo.vue'
</script>

<template>
    <div>
        <div class="header">
            <div class="header-body">
                <div class="header-left">
                    <!--                    这里后期可以加入logo-->
                    <!--                    <IconApp />-->
                    <HeaderList />
                </div>
                <div class="header-right">
                    <SelfInfo />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.header {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    height: 60px;
    background-color: $bg-200;

    & > .header-body {
        width: $middle;
        display: flex;
        justify-content: space-between;

        & > .header-left {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        & > .header-right {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }


}
</style>
