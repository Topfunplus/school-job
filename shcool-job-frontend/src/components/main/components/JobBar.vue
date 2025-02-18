<script setup lang="ts">

import JobCard from '@/components/main/components/JobCard.vue'
</script>

<template>
    <div>
        <div class="job-main">
            <h1 class="title-one">精选小岗位</h1>
            <el-divider />
            <div class="job-container">
                <div class="jobs-list">
                    <div v-for="item in 30" :key="item">
                        <JobCard />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.job-main {
    width: 100%;

    & > .job-container {
        width: 100%;
        margin: 20px;

        & > .jobs-list {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            width: $middle;
        }
    }

    & > .title-one {
        font-weight: bolder;
        text-align: center;
    }


}
</style>
