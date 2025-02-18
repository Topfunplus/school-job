<script setup lang="ts">
import { ref } from 'vue'
import RecommendationItem from '@/components/main/components/RecommendationItem.vue'

// todo 标签最多两个 并且 每个标签最多五个字
const recommendations = ref<Recommendation[]>([
    {
        id: 1,
        title: '洗碗工'
    },
    {
        id: 2,
        title: '西瓜店门看店'
    },
    {
        id: 3,
        title: '校园代跑'
    },
    {
        id: 4,
        title: '家教'
    }
])
</script>

<template>
    <div>
        <div class="recommendation-list">
            <RecommendationItem v-for="(item,index) in recommendations" :key="index" :title="item.title">
            </RecommendationItem>
        </div>
    </div>
</template>

<style scoped lang="scss">
.recommendation-list {
    width: $search-bar-width;
}
</style>
