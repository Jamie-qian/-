<template>
	<div>
		<header>
		    <router-link to="/mimaguanli">
				<img src="../img/big_otto/back.png" >
			</router-link>
		    <h2>修改登录密码</h2>
		</header>
		<scroller lock-x height="600px">
			<main>
				<div id="prompt_info"></div>
				<div class="contain" v-p_default>
					<label for="#usename">手机号码</label>
					<input type="text" id="usename" v-p_default>
				</div>.
				<div class="contain">
					<label for="verify">短信验证</label>
		            <input type="text" id="verify" placeholder="输入6位短信验证">
		            <button class="b_click" id="obtain" v-d_code>获取验证码</button>
				</div>
				<div class="contain">
		            <label for="password">修改密码</label>
		            <input type="password" id="password" placeholder="6~20位字母、数字、下划线" v-dlpassword>
		            <p id="pwd" class="close" v-eye></p>
		        </div>
				<div class="contain">
					<button class="sub" v-x_login>确认修改</button>
				</div>
			</main>
		</scroller>
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
  @import "../less/zhaohuizhifumima.less";
</style>
