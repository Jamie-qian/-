<template>
	<div>
		<header>
	        <router-link to="/user">
	        	<img src="../img/big_otto/back.png">
	    	</router-link>
	        <h2>提现</h2>
    	</header>
		<scroller lock-x>
			<main>
				<div class="monery">
					<span>可提金额</span>
					<p></p>
				</div>
				<ul>
					<li>
						<span>账户余额</span>
						<p></p>
					</li>
					<li>
						<span>等待处理</span>
						<p></p>
					</li>
					<div class="shu"></div>
				</ul>
				<div class="name">
					<span id="name">
						
					</span>
					<span id="idcard">
					</span>
				</div>
				<ol>
					<li>
						<span class="bank">
						</span>
						<span>
							<router-link to="/bangdingyinhangka">修改</router-link>
						</span>
					</li>
					<li>
						<p>提现金额</p>
						<span>¥</span>
						<input type="number" id="money" />
					</li>
					<li>
						提示：最少提款金额为1元
					</li>
				</ol>
				<footer>
					<div>提款</div>
					<ul>
						<p>注意事项</p>
						<li>
							<img src="../img/my/youxiaoxi.png"/>
						</li>
						<li>
							<img src="../img/my/youxiaoxi.png"/>
						</li>
					</ol>
				</footer>
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
  @import "../less/tixian.less";
</style>
