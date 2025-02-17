<script setup lang="ts">
import icon from '@/assets/img_1.png'
</script>

<template>
    <div>
        <div class="self-info">
            <div class="self-info-img">
                <img :src="icon" alt="self-info">
            </div>
            <div class="self-info-name">
                天明
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

.self-info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 5px;

    transition: all 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: $accent-100;
        border-radius: 10px;
    }

    .self-info-img {
        border-radius: 50%;
        border: 2.2px solid $primary-100;
        overflow: hidden;
        width: 35px; /* 确保容器宽度为50px */
        height: 35px; /* 确保容器高度为50px */
    }

    .self-info-img img {
        width: 100%; /* 图片宽度占满容器 */
        height: 100%; /* 图片高度占满容器 */
        object-fit: cover; /* 保持图片的宽高比，裁剪超出的部分 */
    }

    .self-info-name {
        font-size: 16px;
        color: $primary-300;
        font-weight: 400;
    }
}


</style>
