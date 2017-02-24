<template>
    <div>
        <!-- 头部 -->
        <header>
            <router-link to="/index">
                <img src="../img/login/back.png">
            </router-link>
            <h2>登录</h2>
        </header>
        <!-- 彩票列表 -->
        <main>
            <div id="prompt_info"></div>
            <div class="logo">
                <img src="../img/login/logo.png" >
            </div>
            <!-- <p id="info"></p> -->
            <div class="boxs">
                <label for="usename"><img src="../img/login/zhanghu.png" ></label>
                <input type="text" id="usename" placeholder="输入手机号" v-phoneid>
            </div>
            <div class="boxs">
                <label for="password"><img src="../img/login/suo.png" ></label>
                <input type="password" id="password" placeholder="输入密码" v-dlpassword>
            </div>
            <div class="boxs">
                <router-link to="/pwd">忘记密码？</router-link>
            </div>
            <div class="boxs new">
                <button id="btns" v-captacha>登录</button>
            </div>
            <div class="boxs new1">
                <router-link to="/register" id="register">新用户注册</router-link>
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
  @import "../less/my.less";
</style>


