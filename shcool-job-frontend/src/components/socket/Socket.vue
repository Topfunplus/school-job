<script setup lang="ts">
import { ref } from 'vue'
import { io } from 'socket.io-client'

// 连接到后端 Socket.IO 服务器
const socket = io('http://localhost:3000')

// 记录消息
const messages = ref<{ sender: string, message: string }[]>([])
const newMessage = ref('')
const currentRoom = ref('global-chat') // 当前房间，默认为群聊

// 监听从后端传来的消息
socket.on('message', (msg) => {
    console.log('后端传送过来的消息为:', msg)
    messages.value.push(msg)  // 将新消息添加到消息列表
})

socket.on('privateMessage', (msg) => {
    console.log('私聊传送过来的消息为:', msg)
    messages.value.push(msg)  // 显示私聊消息
})

// 发送消息（群聊或私聊）
const sendMessage = () => {
    if (newMessage.value.trim()) {
        socket.emit('sendMessage', newMessage.value, currentRoom.value)  // 发送消息
        newMessage.value = ''  // 发送后清空输入框
    }
}

// 开启私聊
const startPrivateChat = (receiverId: string) => {
    currentRoom.value = [socket.id, receiverId].sort().join('-')
    socket.emit('privateChat', receiverId) // 让后端处理私聊创建
    messages.value.push({ sender: '系统', message: `你现在与 ${receiverId} 进行私聊` })
}

// 改变房间（群聊与私聊切换）
const switchToRoom = (room: string) => {
    currentRoom.value = room
}
</script>

<template>
    <div class="chat-container">
        <div class="messages">
            <!-- 显示所有聊天消息 -->
            <div v-for="(message, index) in messages" :key="index" class="message">
                <p><strong>{{ message.sender }}:</strong> {{ message.message }}</p>
            </div>
        </div>

        <div class="input-container">
            <input
                v-model="newMessage"
                type="text"
                placeholder="请输入消息..."
                @keyup.enter="sendMessage"
                class="chat-input"
            />
            <button @click="sendMessage" class="send-button">发送</button>
        </div>

        <div class="room-switch">
            <button @click="switchToRoom('global-chat')">全局聊天</button>
            <button @click="startPrivateChat('receiverId')">开始私聊</button>
            <!-- receiverId 是目标用户的 socket.id -->
        </div>
    </div>
</template>

<style scoped lang="scss">
.chat-container {
    width: 100%;
    max-width: 600px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    height: 500px;
    border: 1px solid #ddd;
    border-radius: 15px;
    padding: 15px;
    background-color: #f3f4f8;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.messages {
    flex: 1;
    overflow-y: auto;
    padding: 15px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 15px;
}

.message {
    margin-bottom: 12px;
    padding: 10px;
    background-color: #eef2f7;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.input-container {
    display: flex;
    justify-content: space-between;
    padding: 10px;
}

.chat-input {
    width: 80%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 14px;
    outline: none;
    transition: border-color 0.3s;
}

.chat-input:focus {
    border-color: #007bff;
}

.send-button {
    padding: 12px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
}

.send-button:hover {
    background-color: #0056b3;
}

.room-switch {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    border-top: 1px solid #ccc;
}

.room-switch button {
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
}

.room-switch button:hover {
    background-color: #0056b3;
}
</style>
