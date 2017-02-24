<template>
	<div>
		<header>
	        <router-link to="/mimaguanli">
				<img src="../img/big_otto/back.png">
	    	</roouter-link>
	        <h2>找回支付密码</h2>
    	</header>
		<scroller lock-x>
			<main>
				<div id="prompt_info">支付密码为6位数字！</div>
				<p class="p_info">实名信息校验</p>
				<div class="contain">
					<label for="#turename">真实姓名</label>
					<input type="text" id="turename" placeholder="真实姓名">
				</div>
				<div class="contain">
					<label for="#idcard">身份证号码</label>
					<input type="text" placeholder="请输入您预留的身份证号" id="idcard">
				</div>
				<p class="p_info">绑定手机号校验</p>
				 <div class="contain">
		            <label for="#usename">手机号码</label>
		            <input type="number" id="usename" placeholder="输入手机号" v-phoneid>
		        </div>
		        <div class="contain">
		            <label for="#verify">短信验证</label>
		            <input type="text" id="verify" placeholder="输入6位短信验证" v-verify>
		            <button class="b_click" id="obtain" disabled>获取验证码</button>
		        </div>
				<p class="p_info">重置支付密码</p>
				<div class="contain">
					<label >重置密码</label>
					<input type="password" placeholder="请输入6位支付密码" id="paypassword">
				</div>
				<div class="contain">
					<label>确认密码</label>
					<input type="password" placeholder="请确保两次输入一致" id="surepassword">
				</div>
				<div class="contain">
					<button class="sub">重制支付密码</button>
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
