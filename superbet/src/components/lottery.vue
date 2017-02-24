<template>
    <div>
        <!-- 头部 -->
        <header>
            <h2>开奖公告</h2>
            <a href="###"><img src="../img/lottery/info.png"></a>
        </header>
        <!-- 彩票列表 -->
        <scroller lock-x>
            <main>
                <div class="box1">
                    <div class="box big_otto">
                        <h3>大乐透</h3>
                        <ol>
                            <li>第 16129期</li>
                            <li>16-11-02  20:30</li>
                        </ol>
                        <router-link to="/big_otto">
                            <img src="../img/lottery/back.png">
                        </router-link>
                        <ul>
                            <li>08</li>
                            <li>08</li>
                            <li>08</li>
                            <li>08</li>
                            <li>08</li>
                            <li>06</li>
                            <li>06</li>
                        </ul>
                    </div>
                    <div class="box double_ball ">
                        <h3>双色球</h3>
                        <ol>
                            <li>第 16129期</li>
                            <li>16-11-02  20:30</li>
                        </ol>
                        <a href="###"><img src="../img/lottery/back.png" alt=""></a>
                        <ul>
                            <li>08</li>
                            <li>08</li>
                            <li>08</li>
                            <li>08</li>
                            <li>08</li>
                            <li>06</li>
                            <li>06</li>
                        </ul>
                    </div>
                    <div class="box arrange_five">
                        <h3>排列五</h3>
                        <ol>
                        <li>第 16129期</li>
                        <li>16-11-02  20:30</li>
                        </ol>
                        <router-link to="/arrange_five">
                            <img src="../img/lottery/back.png" alt="">
                        </router-link>
                        <ul>
                        <li>8</li>
                        <li>8</li>
                        <li>8</li>
                        <li>8</li>
                        <li>8</li>
                        </ul>
                    </div>
                    <div class="box choose_nine">
                        <h3>任选九</h3>
                        <ol>
                        <li>第 16129期</li>
                        <li>16-11-02  20:30</li>
                        </ol>
                        <a href="###"><img src="../img/lottery/back.png" alt=""></a>
                        <ul>
                            <li>8</li>
                            <li>8</li>
                            <li>8</li>
                            <li>8</li>
                            <li>8</li>
                            <li>8</li>
                            <li>8</li>
                            <li>8</li>
                            <li>8</li>
                            <li>8</li>
                            <li>8</li>
                            <li>8</li>
                            <li>8</li>
                            <li>8</li>
                        </ul>
                    </div>
                    <div class="box win_los">
                        <h3>胜负彩</h3>
                        <ol>
                            <li>第 16129期</li>
                            <li>16-11-02  20:30</li>
                        </ol>
                        <router-link to="/win_los">
                            <img src="../img/lottery/back.png" alt="">
                        </router-link>
                        <ul>
                            <li>8</li>
                            <li>8</li>
                            <li>8</li>
                            <li>8</li>
                            <li>8</li>
                            <li>8</li>
                            <li>8</li>
                            <li>8</li>
                            <li>8</li>
                            <li>8</li>
                            <li>8</li>
                            <li>8</li>
                            <li>8</li>
                            <li>8</li>
                        </ul>
                    </div>
                    <div class="box race_foot">
                        <h3>竞彩足球</h3>
                        <ol>
                        <li>主队 VS 客队</li>
                        <li>16-11-02  20:30</li>
                        </ol>
                        <a href="###"><img src="../img/lottery/back.png" alt=""></a>
                        <ul>
                        <li>达拉斯(-1)</li>
                        <li>2:1</li>
                        <li>西雅图</li>
                        </ul>
                    </div>
                    <div class="box race_basket">
                        <h3>竞彩篮球</h3>
                        <ol>
                        <li>主队 VS 客队</li>
                        <li>16-11-02  20:30</li>
                        </ol>
                        <router-link to="/jclq">
                            <img src="../img/lottery/back.png" alt="">
                        </router-link>
                        <ul>
                        <li>小牛</li>
                        <li>2:1</li>
                        <li>火箭</li>
                        </ul>
                    </div>
                </div>  
            </main>
        </scroller>
        <!-- 底部 -->
        <footer class="footer">
            <router-link to="/index">
                <img src="../img/footer/zhuye_1.png">
                <span>购彩大厅</span>
            </router-link>
            <router-link to="/lottery">
                <img src="../img/footer/kaijiang_2.png">
                <span>中奖公告</span>
            </router-link>
            <a href="" v-success>
                <img src="../img/footer/wode_1.png" alt="">
                <span>我的彩票</span>
            </a>
        </footer>
    </div>
</template>
<script>
    import {Scroller , LoadMore } from 'vux'

    export default {
        name: 'index',
        components:{
            Scroller,
            LoadMore 
    },
    data () {
        return {
                scrollTop: 0
            }
        }
    }
</script>
<style lang="less" scoped>
  @import "../less/lottery.less";
  @import "../less/footer.less";
</style>

