<template>
   <div>
        <!-- 头部 -->
        <header>
            <router-link to="/my">
                <img src="../img/login/back.png">
            </router-link>
            <h2>找回密码</h2>
        </header>
        <!-- 彩票列表 -->
        <main>
            <p id="info"></p>
            <div class="boxs">
                <label for="usename"><img src="../img/login/zhanghu.png"></label>
                <input type="number" id="usename" placeholder="请输入您绑定的手机号" v-phoneid>
            </div>
            <div class="boxs">
                <label for="verify"><img src="../img/login/xinxi.png"></label>
                <input type="text" id="verify" placeholder="输入6位短信验证" v-verify>
                <button class="b_click" id="obtain" disabled v-x_code>获取验证码</button>
            </div>
            <div class="boxs">
                <label for="password"><img src="../img/login/suo.png" alt=""></label>
                <input type="text" id="password" placeholder="请输入新的6-20位密码" v-dlpassword>
                <p id="pwd"></p>
            </div>
            <div class="boxs">
                <button id="btns" disabled v-xiugai>确定修改</button>
            </div>
        </main>
   </div>
</template>
<style lang="less" scoped>
  @import "../less/register.less";
</style>

