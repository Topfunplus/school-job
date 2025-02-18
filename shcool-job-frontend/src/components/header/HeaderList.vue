<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

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
        path: '/search'
    },
    {
        id: 4,
        title: '消息',
        path: '/talking'
    }
])
const router = useRouter()
const activeIndex = ref<number | null>(1)
const handleClickItem = (index: number, path: string) => {
    activeIndex.value = index
    router.push(`${path}`)
}
</script>

<template>
    <div>
        <ul class="header-list">
            <li v-for="item in headerList" :key="item.id" @click="handleClickItem(item.id,item.path)"
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
    color: $primary-200 !important;
}
</style>
