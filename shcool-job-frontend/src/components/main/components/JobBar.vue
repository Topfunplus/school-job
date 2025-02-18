<script setup lang="ts">

import JobCard from '@/components/main/components/JobCard.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const jobs = ref<Job[]>([
    {
        id: 1,
        name: '前端开发工程师',
        tags: ['Vue', 'JavaScript', 'React', 'HTML', 'CSS'],
        description: '负责公司官网和管理系统的前端开发，参与产品功能的设计与实现。',
        salary: '15K-20K',
        location: '上海市',
        company: '腾讯'
    },
    {
        id: 2,
        name: '高级Java后端开发工程师',
        tags: ['Spring Boot', 'MySQL', 'Java', '微服务', 'Linux'],
        description: '负责公司核心服务的后端开发，数据库设计与优化，接口对接。',
        salary: '18K-25K',
        location: '北京市',
        company: '字节跳动'
    },
    {
        id: 3,
        name: 'UI设计师',
        tags: ['设计', 'Figma', 'Sketch', 'Photoshop'],
        description: '负责公司产品的UI设计，提升用户体验，制作界面原型和高保真设计图。',
        salary: '12K-18K',
        location: '广州市',
        company: '阿里巴巴'
    },
    {
        id: 4,
        name: '产品经理兼职数据分析师',
        tags: ['需求分析', '项目管理', '团队协作', '产品设计'],
        description: '负责产品的规划与设计，协调开发、设计与运营团队，推动项目进展。',
        salary: '20K-30K',
        location: '深圳市',
        company: '美团'
    },
    {
        id: 5,
        name: '数据分析师',
        tags: ['Python', 'SQL', 'Excel', '数据挖掘'],
        description: '通过数据分析帮助公司做出决策，负责报告制作与数据可视化。',
        salary: '14K-20K',
        location: '杭州市',
        company: '京东'
    }
])

function handleCheckJob(item: Job) {
    router.push({
        name: 'job',
        params: {
            jobId: item.id
        }
    })
}
</script>

<template>
    <div>
        <div class="job-main">
            <h1 class="title-one">精选小岗位</h1>
            <el-divider />
            <div class="job-container">
                <div class="jobs-list">
                    <div v-for="item in jobs" :key="item.id">
                        <JobCard :job-item="item" @click.native="handleCheckJob(item)" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.job-main {
    width: 100%;

    & > .job-container {
        width: 100%;
        margin: 20px;

        & > .jobs-list {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            width: $middle;
        }
    }

    & > .title-one {
        font-weight: bolder;
        text-align: center;
    }


}
</style>
