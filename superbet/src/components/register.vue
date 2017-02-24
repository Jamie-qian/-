<template>
   <div>
        <!-- 头部 -->
        <header>
            <router-link to="/my">
                <img src="../img/login/back.png" alt=""></router-link>
            <h2>注册</h2>
        </header>
        <!-- 彩票列表 -->
        <main>
            <p id="info"></p>
            <div class="boxs">
                <label for="usename"><img src="../img/login/zhanghu.png" alt=""></label>
                <input type="text" id="usename" placeholder="输入手机号" v-phoneid>
            </div>
            <div class="boxs">
                <label for="password"><img src="../img/login/suo.png" alt=""></label>
                <input type="password" id="password" placeholder="输入6-20位密码" v-dlpassword>
                <p id="pwd" class="close" v-eye></p>
            </div>
            <div class="boxs">
                <label for="verify"><img src="../img/login/xinxi.png" alt=""></label>
                <input type="text" id="verify" placeholder="输入6位短信验证" v-verify>
                <button class="b_click" id="obtain"  disabled="disabled" v-code>获取验证码</button>
            </div>
            <div class="boxs">
                <button id="btn" v-register>注册</button>
            </div>
            <div class="boxs">
                <b class="ok" id="sure" v-_remember></b>
                <p>我已阅读并同意<a href="###">《速博彩票用户服务条款》</a></p>
            </div>
            <div class="bottom">
                <ol class="thirdparty">
                    <li></li>
                    <li>使用社交账号登录</li>
                    <li></li>
                </ol>
                <ul class="thirdpartys">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </main>
   </div>
</template>
<style lang="less" scoped>
  @import "../less/register.less";
</style>

