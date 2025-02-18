<script setup lang="ts">

import Footer from '@/layout/Footer.vue'
</script>

<template>
    <div>
        <div class="main">
            <RouterView />
            <Footer />
        </div>
    </div>
</template>

<style scoped>
.main {
    width: 100%;
    background-color: #f6f4f1;
}
</style>
