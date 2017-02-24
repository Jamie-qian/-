<template>
	<div>
		<header>
       		<router-link to="/per_details">
       			<img src="../img/big_otto/back.png">
       		</router-link>
        	<h2>密码管理</h2>
    	</header>
		<scroller lock-x height="600px">
			<main>
				<div class="row">
					<span>修改登录密码</span>
					<router-link to="/xiugaidenglumima">
						<img src="../img/footer/fanhui@3x.png">
					</router-link>
				</div>
				<div class="row">
					<span>修改支付密码</span>
					<router-link to="/xiugaizhifumima">
						<img src="../img/footer/fanhui@3x.png">
					</router-link>
				</div>
				<div class="row">
					<span>找回支付密码</span>
					<router-link to="/zhaohuizhifumima">
						<img src="../img/footer/fanhui@3x.png">
					</router-link>
				</div>
				<div class="dian dians">
					<p>如有问题请致电人工客服</p>
					<button >呼叫：010-12345678</button>
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
	@import "../less/per_details.less";
</style>
