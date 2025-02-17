import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue()
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/assets/_system.scss" as *;` // 这里可以指定全局变量
            }
        }
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
