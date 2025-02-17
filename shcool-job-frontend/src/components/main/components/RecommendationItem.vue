<script setup lang="ts">

defineProps(['title'])
console.log()
</script>

<template>
    <div class="item">
        {{ title }}
    </div>
</template>

<style scoped lang="scss">


.item {
    display: inline-block;
    margin: 5px;
    padding-left: 4px;
    padding-right: 4px;
    background-color: $base-background;
    border-radius: 10px;
    color: $primary-200;
    height: 25px;
    font-size: 14px;
    line-height: 25px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        font-weight: bold;
    }
}
</style>
