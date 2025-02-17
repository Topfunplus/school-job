<script setup lang="ts">

import RecommendationList from '@/components/main/RecommendationList.vue'
</script>

<template>
  <div>
    <div class="index">
      首页
      <div class="recommendation-list">
        <RecommendationList />
      </div>
    </div>
  </div>
</template>

<style scoped>
.recommendation-list {
  width: 100%;
}
</style>
