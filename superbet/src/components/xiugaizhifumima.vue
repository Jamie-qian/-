<template>
	<div>
		<header>
	        <router-link to="/mimaguanli">
				<img src="../img/big_otto/back.png">
	    	</router-link>
	        <h2>修改支付密码</h2>
    	</header>
		<scroller lock-x height="600px">
			<main>
				<div id="prompt_info">请确认支付密码！</div>
				<div class="contain">
					<label for="#usename">重制密码</label>
					<input type="password" placeholder="请输入6位支付密码" id="one_p">
				</div>
				<div class="contain">
					<label for="#usename">确认密码</label>
					<input type="password" placeholder="请确保两次输入一致" id="two_p">
				</div>
				<div class="contain sub">
					确认完成
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

