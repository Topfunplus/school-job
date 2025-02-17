<script setup lang="ts">
import { ref } from 'vue'

const headerList = ref<HeaderItem[]>([
    {
        id: 1,
        title: '首页',
        path: '/'
    },
    {
        id: 2,
        title: '推荐',
        path: '/like'
    },
    {
        id: 3,
        title: '搜索',
        path: '/'
    }
])
const activeIndex = ref<number | null>(1)
const handleClickItem = (index: number) => {
    activeIndex.value = index
}
</script>

<template>
    <div>
        <ul class="header-list">
            <li v-for="item in headerList" :key="item.id" @click="handleClickItem(item.id)"
                :class="{'active':activeIndex===item.id}">
                {{ item.title }}
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.header-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    list-style: none;
    width: 100%;

    & > li {
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        color: $primary-100;

        &:hover {
            color: $primary-200;
        }
    }
}

.active {
    border-bottom: 2px solid $primary-200;
}
</style>
