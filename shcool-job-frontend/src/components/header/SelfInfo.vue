<script setup lang="ts">
import icon from '@/assets/img_1.png'
import { ArrowDownBold } from '@element-plus/icons-vue'
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
            <div class="self-info-option">
                <el-icon>
                    <ArrowDownBold />
                </el-icon>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

.self-info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .self-info-img {
        border-radius: 50%;
        border: 2.2px solid $primary-100;
        overflow: hidden;
        width: 50px; /* 确保容器宽度为50px */
        height: 50px; /* 确保容器高度为50px */
    }

    .self-info-img img {
        width: 100%; /* 图片宽度占满容器 */
        height: 100%; /* 图片高度占满容器 */
        object-fit: cover; /* 保持图片的宽高比，裁剪超出的部分 */
    }

    .self-info-name {
        font-size: 20px;
        color: $bg-300;
        font-weight: bolder;
    }

    .self-info-option {
        font-size: 20px;
        color: $bg-300;
        transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;

        &:hover {
            color: $primary-100;
            cursor: pointer;
            transform: rotate(180deg); /* 旋转180度 */
            transform-origin: center; /* 设置旋转中心为元素的中心 */
        }
    }

}


</style>
