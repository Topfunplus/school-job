const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const cors = require('cors')

const app = express()
const server = http.createServer(app)
const io = socketIo(server, {
    cors: {
        origin: 'http://localhost:5173', // 允许的前端来源地址
        methods: ['GET', 'POST']
    }
})

app.use(cors())

// 存储用户信息
let users = []

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id)

    // 用户加入群聊房间（默认群聊房间）
    socket.join('global-chat')

    // 监听群聊消息
    socket.on('sendMessage', (message, room) => {
        if (room === 'global-chat') {
            // 向全体成员广播消息（群聊）
            io.to('global-chat').emit('message', { sender: socket.id, message })
        } else {
            // 私聊
            socket.to(room).emit('message', { sender: socket.id, message })
        }
    })

    // 监听私聊创建
    socket.on('privateChat', (receiverId) => {
        const roomId = [socket.id, receiverId].sort().join('-') // 用参与者的ID生成唯一房间ID
        socket.join(roomId) // 加入私聊房间
        io.to(receiverId).emit('privateMessage', {
            sender: socket.id,
            message: `You have a new message from ${socket.id}`
        })
    })

    // 监听断开连接
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id)
        // 从所有房间退出
        socket.leave('global-chat')
        users = users.filter(user => user.id !== socket.id)
    })
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
