<script setup lang="ts">
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

watchEffect(() => {
    console.log(route.params.jobId)
})
</script>

<template>
    <div>
        <div class="job-detail">
            <div class="job-container">
                {{ route.params.jobId }}
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.job-detail {
    display: flex;
    justify-content: center;
    align-items: center;

    & > .job-container {
        width: $middle;
        background-color: rebeccapurple;
    }
}
</style>
