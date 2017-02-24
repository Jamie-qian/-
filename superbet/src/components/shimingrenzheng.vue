<template>
	<div>
		<header>
	       <router-link to="/per_details">
	       		<img src="../img/big_otto/back.png">
	       	</router-link>
	        <h2>完善实名认证</h2>
	    </header>
		<scroller lock-x>
			<main>
				<div id="prompt_info"></div>
				<div class="dian">
					<img src="../img/login/youxiaoxi.png"/>
					<p class="p_info">银行卡卡住姓名必须和注册时填写的真实姓名一致！</p>
				</div>
				<div class="contain">
					<label for="#usename">真实姓名</label>
					<input type="text" placeholder="真实姓名" id="t_name">
				</div>
				<div class="contain">
					<label for="#usename">身份证号</label>
					<input type="number" placeholder="输入您的身份证号" id="idcard" v-idcard>
				</div>
				<div class="dian">
					<img src="../img/login/youxiaoxi.png"/>
					<p>设置支付密码，购彩时使用，不等同于登录密码</p>
				</div>
				<div class="contain">
					<label for="#usename">支付密码</label>
					<input type="text" placeholder="请输入六位支付密码" id="one_p" />
				</div>
				<div class="contain">
					<label for="#usename">确认密码</label>
					<input type="text" placeholder="请保证两次输入一致" id="two_p" v-passwords/>
				</div>
				<div class="dian">
					<img src="../img/login/youxiaoxi.png" alt="" v-phoneid/>
					<p>为方便您找回支付密码，请绑定手机号</p>
				</div>
				<div class="contain">
					<label for="#usename">手机号码</label>
					<input type="number" placeholder="输入手机号" v-phoneid id="usename"/>
				</div>
				<div class="contain">
					<label for="#usename">短信验证</label>
					<input type="text" placeholder="请输入6位验证码" id="captacha"/>
					<button class="b_click" id="obtain" v-x_code>获取验证码</button>
				</div>
		   		<div class="contain">
					<button class="sub" v-refer>提交信息</button>
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
