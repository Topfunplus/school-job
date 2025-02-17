<script setup lang="ts">
import appLogo from '@/assets/img.png'
</script>

<template>
    <div>
        <img :src="appLogo" alt="logo" class="app-logo">
    </div>
</template>

<style scoped>
.app-logo {
    display: inline-block;
    height: 60px;
}
</style>
