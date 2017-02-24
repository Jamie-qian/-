<template>
	<div>
		<header>
			<router-link to="/lottery">
				<img src="../img/big_otto/back.png" alt="">
			</router-link>
		    <h2>大乐透</h2>
		</header>
		<scroller lock-x height="570px">
			<main>
				<div class="box big_otto">
					<h3>第 16129期</h3>
					<ol>
						<li>16-11-02  20:30</li>
					</ol>
					<ul>
						<li>08</li>
						<li>08</li>
						<li>08</li>
						<li>08</li>
						<li>08</li>
						<li>06</li>
						<li>06</li>
					</ul>
			    </div>
			    <div class="box center">
			    	<ul>
			    		<li><span>¥ 3,180,262,912</span>本期销量</li>
			    		<li><span>¥ 3,180,262,912</span>奖池金额</li>
			    	</ul>
			    </div>
			    <ul class="nav_list">
					<li>奖项</li>
					<li>中奖注数</li>
					<li>中奖金额</li>
				</ul>
				<ul class="list">
					<li>一等奖</li>
					<li>10</li>
					<li>¥ 7,114,758</li>
				</ul>
				<ul class="list num_list">
					<li>追加</li>
					<li>10</li>
					<li>¥ 7,114,758</li>
				</ul>
				<ul class="list">
					<li>二等奖</li>
					<li>10</li>
					<li>¥ 7,114,758</li>
				</ul>
				<ul class="list num_list">
					<li>追加</li>
					<li>10</li>
					<li>¥ 7,114,758</li>
				</ul>
				<ul class="list">
					<li>三等奖</li>
					<li>10</li>
					<li>¥ 7,114,758</li>
				</ul>
				<ul class="list num_list">
					<li>追加</li>
					<li>10</li>
					<li>¥ 7,114,758</li>
				</ul>
				<ul class="list">
					<li>四等奖</li>
					<li>10</li>
					<li>¥ 7,114,758</li>
				</ul>
				<ul class="list num_list">
					<li>追加</li>
					<li>10</li>
					<li>¥ 7,114,758</li>
				</ul>
				<ul class="list">
					<li>五等奖</li>
					<li>10</li>
					<li>¥ 7,114,758</li>
				</ul>
				<ul class="list num_list">
					<li>追加</li>
					<li>10</li>
					<li>¥ 7,114,758</li>
				</ul>
				<ul class="list">
					<li>六等奖</li>
					<li>10</li>
					<li>¥ 7,114,758</li>
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
  @import "../less/big_otto.less";
</style>
