<template>
    <div>
        <!-- 头部 -->
        <header>
            <router-link to="/user">
                <img src="../img/big_otto/back.png"/>
            </router-link>
            <h2>购彩记录</h2>
        </header>
        <div class="head">
            <div class="xian">
                <ul class="x_list" v-change>
                    <li>
                        <router-link to="/records/p_records">全部</router-link>
                    </li>
                    <li>
                        <router-link to="/records/c_records">中奖</router-link>
                    </li>
                    <li>
                        <router-link to="/records/t_records">待开奖</router-link>
                    </li>
                </ul>
            <p id="border">下滑线</p>
            </div>
        </div>
        <!-- 彩票列表 -->
        <main>
             <router-view></router-view>            
        </main>
    </div>
</template>
<script>
    import { Scroller,LoadMore} from 'vux'
    export default {
        components : {
            Scroller,
            LoadMore
        },
        data () {
            return {
                
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../less/p_records.less";
</style>

