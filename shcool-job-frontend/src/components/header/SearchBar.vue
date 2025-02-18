<script setup lang="ts">

</script>

<template>
    <div class="search-bar">
        <input type="text" placeholder="搜索校内小岗位" />
        <button>
            搜索
        </button>
    </div>
</template>

<style scoped lang="scss">
.search-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    width: $search-bar-width;
    height: 50px;
    background-color: #f0f0f0;
    border: 2px solid #f0f0f0;

    input::placeholder {
        color: #c0c0c0;
        font-size: 18px;
        text-indent: 10px;
    }

    & > input {
        width: 70%; /* 让输入框占据更多空间 */
        height: 50px;
        // 定义光标与左侧的距离
        padding-left: 20px;
        border: 2px solid $base-background;
        border-right: none; /* 移除输入框右边的边框 */
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
        caret-color: #ff6347;
        font-size: 19px;
    }

    & > input:focus {
        transition: all 0.3s ease-in-out;
        border: 2px solid $primary-100;
        border-right: none; /* 保证输入框右边没有边框 */
        outline: none;
    }

    & > input:hover {
        transition: all 0.3s ease-in-out;
        border: 2px solid $primary-100;
        border-right: none; /* 保证输入框右边没有边框 */
    }

    & > button {
        width: 30%; /* 让按钮占据剩余空间 */
        height: 55px;
        border: 2px solid $base-background;
        border-left: none; /* 移除按钮左边的边框 */
        background: $bg-100;
        cursor: pointer;
        color: $primary-100;
        font-size: 19px;
        font-weight: bold;
        border-bottom-right-radius: 15px;
        border-top-right-radius: 15px;

        &:hover {
            transition: all 0.3s ease-in-out;
            background: $primary-100;
            color: $bg-100;
        }
    }
}

</style>
