<script setup lang="ts">
import RecommendationList from '@/components/main/RecommendationList.vue'
import { Comment, Location } from '@element-plus/icons-vue'

defineProps(['jobItem'])
</script>

<template>
    <div>
        <div class="job-card">
            <div class="job-card-body">
                <div class="card-title">
                    <div class="title">
                        <div class="name">
                            {{ jobItem.name }}
                        </div>
                        <div class="salary">
                            {{ jobItem.salary }}
                        </div>
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
                    {{ jobItem.description }}
                </div>

                <!--                公司名称和城市地点-->
                <div class="card-bottom">
                    <div class="name">
                        {{ jobItem.company }}
                    </div>
                    <div class="location">
                        <el-icon>
                            <Location style="color: #b3b3b3;" />
                        </el-icon>
                        {{ jobItem.location }}
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
                    width: 60%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
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
