<template>
	<div>
		<header>
			<router-link to="/lottery">
				<img src="../img/big_otto/back.png" alt="">
			</router-link>
		    <h2>胜负彩历史开奖</h2>
		</header>
		<scroller lock-x>
		<main>
			<div class="box win_los">
				<h3>第 16129期</h3>
				<ol>
					<li>16-11-02  20:30</li>
				</ol>
				<router-link to="/Xwin_los">
					<img src="../img/lottery/back.png" alt="">
				</router-link>
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
			<div class="box win_los">
				<h3>第 16129期</h3>
				<ol>
					<li>16-11-02  20:30</li>
				</ol>
				<router-link to="/Xwin_los">
					<img src="../img/lottery/back.png" alt="">
				</router-link>
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
			<div class="box win_los">
				<h3>第 16129期</h3>
				<ol>
					<li>16-11-02  20:30</li>
				</ol>
				<router-link to="/Xwin_los">
					<img src="../img/lottery/back.png" alt="">
				</router-link>
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
			<div class="box win_los">
				<h3>第 16129期</h3>
				<ol>
					<li>16-11-02  20:30</li>
				</ol>
				<router-link to="/Xwin_los">
					<img src="../img/lottery/back.png" alt="">
				</router-link>
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
  @import "../less/win_los.less";
</style>

