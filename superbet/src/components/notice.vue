<template>
    <div>
        <!-- 头部 -->
        <header>
            <router-link to="/user">
                <img src="../img/big_otto/back.png" alt="">
            </router-link>
            <h2>消息提醒</h2>
            <span id="all">全部已读</span>
        </header>
        <div class="head">
            <div class="xian">
                <ul class="x_list" v-change>
                    <li>
                        <router-link to="/notice/x_notice">我的消息</router-link>
                    </li>
                    <li>
                        <router-link to="/notice/m_notice">系统消息</router-link>
                    </li>
                </ul>
                <p id="border">下滑线</p>
            </div>
        </div>
            <Scroller lock-x height="600px">
            <!-- 彩票列表 --> 
            <main>
                <router-view></router-view> 
            </main>
        </Scroller>
    
    </div>
</template>
<script>
    import { Scroller} from 'vux'
    export default {
        components : {
            Scroller
        },
        data () {
            return {
                scrollerTop : 0
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../less/notice.less";
</style>

