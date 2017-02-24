<template>
        <div>
            <main>
                <div>
                    <swiper style="width:100%;margin:0 auto;" height="180px" auto dots-position="center">
                        <swiper-item>
                            <img src="../img/index/banner_01.png" style="width:100%;height:100%">
                        </swiper-item>
                        <swiper-item>
                            <img src="../img/index/banner_01.png" style="width:100%;height:100%">
                        </swiper-item>
                        <swiper-item>
                            <img src="../img/index/banner_01.png" style="width:100%;height:100%">
                        </swiper-item>
                    </swiper>
                </div>
                <div id="marquee">
                    <img src="../img/index/laba.png">
                    <div id="max">
                        <swiper auto height="30px" direction="vertical" :show-dots="false">
                          <swiper-item>
                              <p>彩票新用户注册 即送2元竞彩红包</p>
                          </swiper-item>
                              <swiper-item>
                              <p>老人收藏彩票十万张 体会彩票别样乐趣</p>
                          </swiper-item>
                              <swiper-item>
                              <p>双色球049期开奖 头奖15注599万</p>
                          </swiper-item>
                              <swiper-item>
                              <p>达人中双色球643万 选号方法灵验常中奖</p>
                          </swiper-item>
                              <swiper-item>
                              <p>男子借债几十万买彩 输完在医院门口抢劫</p>
                          </swiper-item>
                              <swiper-item>
                              <p>一号之差错失亿万巨奖 揽308万仍感满足</p>
                          </swiper-item>
                        </swiper>
                    </div>  
                </div>
                <p id="navs">
                    <em class="border">border</em>
                    <span>购彩专区</span>
                </p>
                <scroller lock-x height="400px">
                    <div class="container">
                        <div class="list">
                            <dl>
                                <router-link to="/dlt">
                                    <dt><img src="../img/index/daletou.png" alt=""></dt>
                                    <dd>大乐透<b>正在销售</b></dd>
                                </router-link>
                            </dl>
                            <dl>
                                <router-link to="/ssq">
                                    <dt><img src="../img/index/shuangseqiu.png" alt=""></dt>
                                    <dd>双色球<b>正在销售</b></dd>
                                </router-link>
                            </dl>
                             <dl>
                                <router-link to="/qx">
                                    <dt><img src="../img/index/7xingcai.png" alt=""></dt>
                                    <dd>七星彩<b>正在销售</b></dd>
                                </router-link>
                            </dl>
                        </div>
                        <div class="list">
                            <dl>
                                <router-link to="/ql">
                                    <dt><img src="../img/index/7lecai.png" alt=""></dt>
                                    <dd>七乐彩<b>正在销售</b></dd>
                                </router-link>
                            </dl>
                            <dl>
                                <router-link to="/fc">
                                    <dt><img src="../img/index/3D.png" alt=""></dt>
                                    <dd>福彩3D<b>正在销售</b></dd>
                                </router-link>
                            </dl>
                            <dl>
                                <router-link to="/pw">
                                    <dt><img src="../img/index/pailie5.png" alt=""></dt>
                                    <dd>排列五<b>正在销售</b></dd>  
                                </router-link>
                            </dl>
                        </div>
                        <div class="list">
                            <dl>
                                <router-link to="/ps">
                                    <dt><img src="../img/index/pailie3.png" alt=""></dt>
                                    <dd>排列3<b>正在销售</b></dd>
                                </router-link>
                            </dl>
                            <dl>
                                <dt><img src="../img/index/beidan.png" alt=""></dt>
                                <dd>单场竞猜<span>暂停销售</span></dd>
                            </dl>
                            <dl>
                              <dt><img src="../img/index/renxuan9.png" alt=""></dt>
                              <dd>任选九<span>暂停销售</span></dd>
                            </dl>
                        </div>
                        <div class="list">
                            <dl>
                                <router-link to="/ps">
                                    <dt><img src="../img/index/pailie3.png" alt=""></dt>
                                    <dd>排列3<b>正在销售</b></dd>
                                </router-link>
                            </dl>
                            <dl>
                                <dt><img src="../img/index/beidan.png" alt=""></dt>
                                <dd>单场竞猜<span>暂停销售</span></dd>
                            </dl>
                            <dl>
                              <dt><img src="../img/index/renxuan9.png" alt=""></dt>
                              <dd>任选九<span>暂停销售</span></dd>
                            </dl>
                        </div>
                        <div class="list">
                            <dl>
                                <router-link to="/ps">
                                    <dt><img src="../img/index/pailie3.png" alt=""></dt>
                                    <dd>排列3<b>正在销售</b></dd>
                                </router-link>
                            </dl>
                            <dl>
                                <dt><img src="../img/index/beidan.png" alt=""></dt>
                                <dd>单场竞猜<span>暂停销售</span></dd>
                            </dl>
                            <dl>
                              <dt><img src="../img/index/renxuan9.png" alt=""></dt>
                              <dd>任选九<span>暂停销售</span></dd>
                            </dl>
                        </div>
                        <div class="list">
                            <dl>
                                <router-link to="/ps">
                                    <dt><img src="../img/index/pailie3.png" alt=""></dt>
                                    <dd>排列3<b>正在销售</b></dd>
                                </router-link>
                            </dl>
                            <dl>
                                <dt><img src="../img/index/beidan.png" alt=""></dt>
                                <dd>单场竞猜<span>暂停销售</span></dd>
                            </dl>
                            <dl>
                              <dt><img src="../img/index/renxuan9.png" alt=""></dt>
                              <dd>任选九<span>暂停销售</span></dd>
                            </dl>
                        </div>
                    </div>
                </scroller>
            </main>
            <footer>
                <router-link to="/index">
                    <img src="../img/footer/zhuye_2.png">
                    <span>购彩大厅</span>
                </router-link>
                <router-link to="/lottery">
                    <img src="../img/footer/kaijiang_1.png">
                    <span>中奖公告</span>
                </router-link>
                <a href="" v-success>
                    <img src="../img/footer/wode_1.png" alt="">
                    <span>我的彩票</span>
                </a>
                <router-view></router-view>
            </footer>
        </div>   
</template>
<script>
import {Scroller,Swiper,SwiperItem} from 'vux'

export default {
    name: 'index',
    components:{
        Scroller,
        Swiper,
        SwiperItem
    },
    data () {
        return {
            scrollTop: 0,
        }
    }
}
</script>
<style lang="less" scoped>
    @import "../less/index.less";
    @import "../less/footer.less";
</style>


