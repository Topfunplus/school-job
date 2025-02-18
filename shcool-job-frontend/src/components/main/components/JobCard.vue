<script setup lang="ts">
import { type Ref, ref } from 'vue'
import RecommendationList from '@/components/main/RecommendationList.vue'
import { Comment, Location } from '@element-plus/icons-vue'

const test = ref<Job | null>({
    id: 1,
    name: '前端工程师',
    tags: ['前端', '工程师'],
    salary: '10k-20k',
    description: '前端工程师非常好太好了赶紧去学前端把哈哈哈哈哈哈',
    location: '北京',
    company: '华为'
}) as Ref<Job>
</script>

<template>
    <div>
        <div class="job-card">
            <div class="job-card-body">
                <div class="card-title">
                    <div class="title">
                        <span class="name">
                            {{ test.name }}
                        </span>
                        <span class="salary">
                            {{ test.salary }}
                        </span>
                    </div>
                    <div class="tags">
                        <div class="tags-container">
                            <RecommendationList />
                        </div>
                    </div>
                </div>
                <!--                岗位介绍-->
                <div class="card-content">
                    <el-icon>
                        <Comment style="color: #b3b3b3;" />
                    </el-icon>
                    {{ test.description }}
                </div>

                <!--                公司名称和城市地点-->
                <div class="card-bottom">
                    <div class="name">
                        {{ test.company }}
                    </div>
                    <div class="location">
                        <el-icon>
                            <Location style="color: #b3b3b3;" />
                        </el-icon>
                        {{ test.location }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.job-card {
    width: 300px;
    height: 150px;
    border-radius: 15px;
    background-color: $text-100;
    cursor: pointer;

    &:hover {
        box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.1);
        transform: translateY(-5px);
        transition: all 0.2s ease-in-out;
    }

    & > .job-card-body {
        margin: 10px;
        padding: 10px; // 岗位标题
        & > .card-title {
            font-size: 20px;

            & > .title {
                display: flex;
                justify-content: space-between;
                align-items: center;

                & > .name {
                    font-weight: 500;
                }

                & > .salary {
                    font-weight: 400;
                    color: $primary-100;
                }
            }

            & > .tags {
                & > .tags-container {
                    overflow: hidden;
                }
            }
        }

        // 岗位介绍
        & > .card-content {
            font-size: 16px;
            color: $bg-200;
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        // 地点
        & > .card-bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 12px;

            & > .name {
                font-size: 16px;
                color: $text-200;
            }

            & > .location {
                display: flex;
                align-items: center;
                font-size: 16px;
                color: $text-200;

                & > el-icon {
                    margin-right: 5px;
                }
            }
        }
    }

}
</style>
