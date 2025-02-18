<script setup lang="ts">
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

watchEffect(() => {
    console.log(route.params.jobId)
})
</script>

<template>
    <div>
        <div class="job-detail">
            <div class="job-container">
                <div class="banner">
                    <div class="title">
                        <!-- 职位名称-->
                        <div class="job-name">
                            <h2>
                                Java 开发工程师
                            </h2>
                        </div>
                        <div>
                            <span>
                                薪资：5000-8000
                            </span>
                        </div>
                        <div>
                            <span>
                                北京 朝阳区
                            </span>
                        </div>
                    </div>
                </div>
                <div class="content">
                    职位描述: <br>
                    1. 熟悉 Java 语言，熟悉 Spring、Spring Boot、Spring Cloud、Spring Security 等技术框架。 <br>
                    2. 熟悉 MySQL、Redis 等数据库技术。 <br>
                    3. 熟悉 Linux 操作系统。 <br>
                    4. 熟悉 Git 版本控制工具。 <br>
                    5. 熟悉 HTTP 协议。 <br>
                    6. 熟悉 RESTful API 设计。 <br>
                    7. 熟悉 JWT 技术。 <br>
                    8. 熟悉 Swagger、Postman 等工具。 <br></br>
                </div>

                <el-divider />
                <!--                联系方式-->
                <div class="concat">
                    <div class="info">
                        <div>
                            <el-avatar size="large"
                                       src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                            />
                        </div>
                        <div>
                            姓名：张明
                        </div>
                        <div>
                            电话：12345678901
                        </div>
                        <div>
                            邮箱：ming10655@gmail.com
                        </div>
                    </div>

                    <div class="button">
                        <el-button type="danger">联系ta</el-button>
                    </div>
                </div>
            </div>
        </div>

        <!--        其他岗位推荐-->
        <div class="other-jobs">

        </div>



    </div>
</template>

<style scoped lang="scss">
.job-detail {
    display: flex;
    justify-content: center;
    align-items: center;

    & > .job-container {
        width: $search-bar-width;

        & > .banner {
            width: $search-bar-width;
            background-color: #a8a5a5;

            & > .title {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }

        & > .concat {
            display: flex;
            justify-content: space-between;
            align-items: center;

            & > .info {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: 20px;
            }
        }

    }
}
</style>
