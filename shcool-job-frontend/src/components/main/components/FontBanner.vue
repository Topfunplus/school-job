<script setup lang="ts">
import { onMounted } from 'vue'

const textToDisplay = '找校园兼职，来找我，就没有问题啦!'
let index = 0

let chatBox: HTMLDivElement | null = null
let cursor: HTMLElement | null = null

// 在组件挂载后再操作 DOM
onMounted(() => {
    chatBox = document.getElementById('chat-box') as HTMLDivElement
    cursor = document.getElementById('cursor') as HTMLElement

    // 确保 DOM 元素已经获取到
    if (chatBox && cursor) {
        function typeText() {
            if (index < textToDisplay.length) {
                //@ts-ignore
                chatBox.textContent += textToDisplay.charAt(index)
                index++
                setTimeout(typeText, 100)
            } else {
                //@ts-ignore
                cursor.style.display = 'none' // 文本输入完后隐藏光标
            }
        }

        typeText()
    }
})
</script>

<template>
    <div>
        <div class="chat-container">
            <div id="chat-box">
                <span id="cursor" class="cursor"></span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.chat-container {
    margin: 0 auto;
    width: $search-bar-width;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

@font-face {
    src: url('@/assets/DingTalk-JinBuTi.ttf');
    font-family: 'topfun';
}

#chat-box {
    font-family: 'topfun', monospace;
    font-size: 30px;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid black;
    padding: 10px;
    display: inline-block;
    line-height: 1.5;
    word-wrap: break-word;
    width: 80%;
}

.cursor {
    display: inline-block;
    width: 3px;
    height: 1em;
    background-color: black;
    animation: blink 0.5s step-end infinite;
}

@keyframes blink {
    50% {
        background-color: transparent;
    }
}
</style>
