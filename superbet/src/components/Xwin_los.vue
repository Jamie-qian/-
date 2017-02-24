<template>
	<div>
		<header>
			<router-link to="/win_los">
				<img src="../img/big_otto/back.png" alt="">
			</router-link>
		    <h2>胜负彩</h2>
		</header>
		<scroller lock-x>
			<main>
				<div class="box win_los" id="win_los">
					<h3>第 16129期</h3>
					<ol>
						<li>16-11-02  20:30</li>
					</ol>
					<ul>
						<li>8</li>
						<li>8</li>
						<li>8</li>
						<li>8</li>
						<li>8</li>
						<li>8</li>
						<li>8</li>
						<li>8</li>
						<li>8</li>
						<li>8</li>
						<li>8</li>
						<li>8</li>
						<li>8</li>
						<li>8</li>
					</ul>
				</div>
				<div class="box center">
			    	<ul>
			    		<li><span>¥ 3,180,262,912</span>本期销量</li>
			    		<li><span>¥ 0</span>奖池金额</li>
			    	</ul>
			    </div>
			    <ul class="nav_list">
					<li>奖项</li>
					<li>中奖注数</li>
					<li>中奖金额</li>
				</ul>
				<ul class="list num_list">
					<li>一等奖</li>
					<li>10</li>
					<li>¥ 7,114,758</li>
				</ul>
				<ul class="list num_list">
					<li>追加</li>
					<li>10</li>
					<li>¥ 7,114,758</li>
				</ul>
				<ul class="nav_list tops">
					<li>场次</li>
					<li>主队</li>
					<li>赛果</li>
					<li>客队</li>
				</ul>
				<ul class="list">
					<li>01</li>
					<li>就四个字</li>
					<li>0</li>
					<li>中奖金额</li>
				</ul>
				<ul class="list">
					<li>02</li>
					<li>就四个字</li>
					<li>0</li>
					<li>中奖金额</li>
				</ul>
				<ul class="list">
					<li>03</li>
					<li>就四个字</li>
					<li>0</li>
					<li>中奖金额</li>
				</ul>
				<ul class="list">
					<li>04</li>
					<li>就四个字</li>
					<li>0</li>
					<li>中奖金额</li>
				</ul>
			</main>
		</scroller>
		<footer>
			<p id="go-win"><a href="###">去中奖</a></p>
		</footer>
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
  @import "../less/Xwin_los.less";
</style>

