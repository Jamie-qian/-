<template>
	<div>
		<header>
	        <router-link to="/per_details">
				<img src="../img/big_otto/back.png"/>
	    	</router-link>
	        <h2>绑定银行卡</h2>
    	</header>
		<scroller lock-x height="600px">
			<main>
				<div id="prompt_info"></div>
				<div class="dian">
					<img src="../img/login/youxiaoxi.png" alt="" />
					<p>银行卡卡住姓名必须和注册时填写的真实姓名一致！</p>
				</div>
				<div class="contain">
					<label for="#kaihu_name">开户姓名</label>
					<input type="text" placeholder="请输入真实姓名" id="kaihu_name">
				</div>
				<div class="contain">
					<label for="#bank_card">银行卡号</label>
					<input type="number" placeholder="输入准确的银行卡号" id="bank_car">
				</div>
				<div class="contain">
					<label for="#card_type">卡类型／发卡行</label>
					<input type="text" placeholder="储蓄卡／农业银行" id="dcard_type">
				</div>
				<div class="contain">
					<label for="#obligate_phone">银行卡预留手机号</label>
					<input type="number" placeholder="输入准确的预留手机号" id="obligate_phone" v-phoneid>
				</div>
				<div class="contain">
					<button class="sub" v-bound>立刻绑定</button>
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
