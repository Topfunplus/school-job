<script setup lang="ts">

import RecommendationList from '@/components/main/RecommendationList.vue'
import SearchBar from '@/components/header/SearchBar.vue'
import JobBar from '@/components/main/components/JobBar.vue'
import FontBanner from '@/components/main/components/FontBanner.vue'
</script>

<template>
    <div>
        <div class="index">
            <!--            大图区域-->
            <!--            <div class="img-screen">-->
            <!--                <ImgScreen />-->
            <!--            </div>-->
            <!--            搜索框-->
            <FontBanner />
            <div class="search-bar">
                <SearchBar />
            </div>
            <!--            推荐列表-->
            <div class="recommendation-list">
                <RecommendationList />
            </div>
            <!--            工作职位列表-->
            <div class="container">
                <div class="jobs">
                    <!--                    内部列表-->
                    <JobBar />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.index {
    & > .search-bar {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & > .recommendation-list {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    & > .container {
        margin-top: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

        & > .jobs {
            margin: 30px;
            width: $middle;
        }
    }
}


</style>
