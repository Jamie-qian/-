<template> 
    <div>
        <!-- 功能区 -->
        <main>
            <div class="user_info" v-complate>
                <router-link to="/xitongshezhi">
                    <img src="../img/login/shezhi.png" id="shezhi">
                </router-link>
                <dl>
                    <dt><img src="../img/login/mrtx.png" id="user_pic"></dt>
                    <dd>
                        <p>欢迎您, <b id="u_name">***</b></p>
                        <p><span>用户余额: </span><b id="u_money">**元</b></p>
                    </dd>
                </dl>
                <ul>
                    <li id="qianbao">
                        <router-link to="/chongzhi">
                            <img src="../img/login/qianbao.png">
                            <p>充值</p>
                        </router-link>
                    </li>
                    <li id="yinhangka">
                        <router-link to="/tixian">
                            <img src="../img/login/yinhangka.png">
                            <p>提现</p>
                        </router-link> 
                    </li>
                </ul>
            </div>
            <scroller lock-x height="600px">
                <div>
                    <div class="lists">
                        <img src="../img/login/goucaijilu.png" class="icon">
                        <p>购彩记录</p>
                        <router-link to="/records/p_records">
                            <img src="../img/lottery/back.png" class="go">
                        </router-link>
                    </div>
                    <div class="lists">
                        <img src="../img/login/zhanghumingxi.png" alt=""class="icon">
                        <p>账户明细</p>
                        <router-link to="/account/x_account">
                            <img src="../img/lottery/back.png" alt="" class="go">
                        </router-link>
                    </div>
                    <div class="lists">
                        <img src="../img/login/xinxitixing.png" alt="" class="icon">
                        <p>消息提醒</p>
                        <router-link to="/notice/x_notice">
                            <img src="../img/lottery/back.png" class="go">
                        </router-link>
                        <span class="info_"></span>
                    </div>
                    <div class="lists">
                        <img src="../img/login/zhanghubangding.png" class="icon">
                        <p>信息验证</p>
                        <router-link to="/per_details">
                            <img src="../img/lottery/back.png" class="go">
                        </router-link>
                        <span class="info_"></span>
                    </div>
                    <button id="log_outs" v-exit>退出登录</button>
                </div>
            </scroller>
        </main>
        <!-- 底部 -->
        <footer class="footer">
            <router-link to="/index">
                <img src="../img/footer/zhuye_1.png">
                <span>购彩大厅</span>
            </router-link>
            <router-link to="/lottery">
                <img src="../img/footer/kaijiang_1.png">
                <span>中奖公告</span>
            </router-link>
            <router-link to="/user">
                 <img src="../img/footer/wode_2.png">
                <span>我的彩票</span>
            </router-link>
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
            swiperItemIndex: 1
        }
    }
}
</script>
<style lang="less" scoped>
  @import "../less/user.less";
  @import "../less/footer.less";
</style>

