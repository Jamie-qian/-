<template>
	<div>
		<!--排五历史开奖头部-->
		<header>
			<router-link to="/lottery">
				<img src="../img/big_otto/back.png" alt="">
			</router-link>
		    <h2>排五历史开奖</h2>
		</header>
		<scroller lock-x>
			<main>
			<!--彩票期数列表-->
			<div class="list_all">
				<div class="show_list" >
					<div class="box arrange_five">
			            <h3>第2017027期</h3>
			            <ol>
			            	<li>2017-02-03 20:30</li>
			            </ol>
			            <p id="img" v-showhide></p>
			            <ul>
				            <li>8</li>
				            <li>7</li>
				            <li>3</li>
			            </ul>
		        	</div>
		        	<div class="box arrange_five">
			            <h3>第2017026期</h3>
			            <ol>
			            	<li>2017-01-26 20:30</li>
			            </ol>
			            <p id="img" v-showhide></p>
			            <ul>
				            <li>2</li>
				            <li>5</li>
				            <li>9</li>
			            </ul>
		        	</div>
		        	<div class="box arrange_five">
			            <h3>第2017025期</h3>
			            <ol>
			            	<li>2017-01-25 20:30</li>
			            </ol>
			            <p id="img" v-showhide></p>
			            <ul>
				            <li>3</li>
				            <li>5</li>
				            <li>9</li>
			            </ul>
		        	</div>
		        	<div class="box arrange_five">
			            <h3>第2017024期</h3>
			            <ol>
			            	<li>2017-01-24 20:30</li>
			            </ol>
			            <p id="img" v-showhide></p>
			            <ul>
				            <li>7</li>
				            <li>0</li>
				            <li>9</li>
			            </ul>
		        	</div>
		        	<div class="contain">
			        	<p id="one_nums">本期销量 <span></span></p>
			        	<ul class="nav_list">
							<li>奖项</li>
							<li>中奖注数</li>
							<li>中奖金额</li>
						</ul>
						<ul class="list">
							<li>福彩直选</li>
							<li></li>
							<li>¥ 1040</li>
						</ul>
						<ul class="list">
							<li>福彩组三</li>
							<li></li>
							<li>¥ 346</li>
						</ul>
						<ul class="list">
							<li>福彩组六</li>
							<li></li>
							<li>¥ 173</li>
						</ul>
			        </div>
				</div>
			</div>	
			</main>
		</scroller>
		<!--去中奖-->
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
  @import "../less/arrange_five.less";
</style>

