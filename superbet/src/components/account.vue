<template>
    <div>
        <!-- 头部 -->
        <header>
            <router-link to="/user">
                <img src="../img/big_otto/back.png"/>
            </router-link>
            <h2>账户明细</h2>
        </header>
        <div class="head">
            <div class="xian">
                <ul class="x_list" v-change>
                    <li>
                        <router-link to="/account/x_account">账户</router-link>
                    </li>
                    <li>
                        <router-link to="/account/c_account">充值</router-link>
                    </li>
                    <li>
                        <router-link to="/account/t_account">提款</router-link>
                    </li>
                </ul>
                <p id="border">下滑线</p>
            </div>
                <router-link to="/shouzhimingxi">
                    <ol class="x_lists">
                        <li>收入：<b>￥</b></li>
                        <li>支出：<b>￥</b></li>
                    </ol>
                </router-link>  
            </div>
        <!-- 彩票列表 -->
        <main>  
            <router-view></router-view> 
        </main>
   </div>
</template>
<script>
    import { Scroller , LoadMore } from 'vux'
    export default {
        components : {
            Scroller,
            LoadMore
        },
        data () {
            return {
                ScrollTop : 0
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../less/x_account.less";
</style>

