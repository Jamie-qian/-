<template>
	<div>
		<header>
			<router-link to="/user">
				<img src="../img/big_otto/back.png">
			</router-link>
	        <h2>充值</h2>
    	</header>
		<scroller lock-x height="600px">
			<main>
				<div class="name">
					当前账户：
					<span>用户名字</span>
				</div>
				<p>请输入充值金额</p>
				<div class="monery">
					<div>
						<input type="text" placeholder="100"/>
					</div>
					<div class="radio active" v-active>100</div>
					<div class="radio" v-active>200</div>
					<div class="radio" v-active>500</div>
					<div class="radio" v-active>1000</div>
				</div>
				<p>请选择支付方式</p>
				<ul>
					<div class="zuo"></div>
					<li>
						<img src="../img/login/zfb.png"/>
						<span>支付宝支付</span>
						<img src="../img/footer/fanhui@3x.png"/>
					</li>
					<li>
						<img src="../img2/wx.png"/>
						<span>微信支付</span>
						<img src="../img/footer/fanhui@3x.png"/>
					</li>
					<li>
						<img src="../img2/QQ.png"/>
						<span>QQ钱包支付</span>
						<img src="../img/footer/fanhui@3x.png"/>
					</li>
				</ul>
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
@import "../less/chongzhi.less";
</style>
