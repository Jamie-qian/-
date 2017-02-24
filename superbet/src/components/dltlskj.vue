<template>
	<div>
		<header>
        	<router-link to="/user">
				<img src="../img/big_otto/back.png" alt="">
        	</router-link>
        	<h2>大乐透历史开奖</h2>
    	</header>
		<Scroller lock-x height="700px">
			<main>
				<ul>
					<li>
						<router-link to="">
							<img src="../img/footer/fanhui@3x.png" alt="">
						</router-link>
						<b>第16129期</b>
						<span>16-11-02&nbsp;&nbsp;20:30</span>
						<ol>
							<li>28</li>
							<li>28</li>
							<li>28</li>
							<li>28</li>
							<li>28</li>
						</ol>
						<dl>
							<li>05</li>
							<li>08</li>
						</dl>
					</li>
					<li>
						<img src="../img/footer/fanhui@3x.png" alt=">"/>
						<b>第16129期</b>
						<span>16-11-02&nbsp;&nbsp;20:30</span>
						<ol>
							<li>28</li>
							<li>28</li>
							<li>28</li>
							<li>28</li>
							<li>28</li>
						</ol>
						<dl>
							<li>05</li>
							<li>08</li>
						</dl>
					</li>
					<li>
						<router-link to="">
							<img src="../img/footer/fanhui@3x.png" alt=">">
						</router-link>
						<b>第16129期</b>
						<span>16-11-02&nbsp;&nbsp;20:30</span>
						<ol>
							<li>28</li>
							<li>28</li>
							<li>28</li>
							<li>28</li>
							<li>28</li>
						</ol>
						<dl>
							<li>05</li>
							<li>08</li>
						</dl>
					</li>
					<li>
						<img src="../img/footer/fanhui@3x.png" alt=">" />
						<b>第16129期</b>
						<span>16-11-02&nbsp;&nbsp;20:30</span>
						<ol>
							<li>28</li>
							<li>28</li>
							<li>28</li>
							<li>28</li>
							<li>28</li>
						</ol>
						<dl>
							<li>05</li>
							<li>08</li>
						</dl>
					</li>
					<li>
						<img src="../img/footer/fanhui@3x.png" alt=">" />
						<b>第16129期</b>
						<span>16-11-02&nbsp;&nbsp;20:30</span>
						<ol>
							<li>28</li>
							<li>28</li>
							<li>28</li>
							<li>28</li>
							<li>28</li>
						</ol>
						<dl>
							<li>05</li>
							<li>08</li>
						</dl>
					</li>
					<li>
						<img src="../img/footer/fanhui@3x.png" alt=">" />
						<b>第16129期</b>
						<span>16-11-02&nbsp;&nbsp;20:30</span>
						<ol>
							<li>28</li>
							<li>28</li>
							<li>28</li>
							<li>28</li>
							<li>28</li>
						</ol>
						<dl>
							<li>05</li>
							<li>08</li>
						</dl>
					</li>
					<li>
						<img src="../img/footer/fanhui@3x.png" alt=">" />
						<b>第16129期</b>
						<span>16-11-02&nbsp;&nbsp;20:30</span>
						<ol>
							<li>28</li>
							<li>28</li>
							<li>28</li>
							<li>28</li>
							<li>28</li>
						</ol>
						<dl>
							<li>05</li>
							<li>08</li>
						</dl>
					</li>
				</ul>
			</main>
		</Scroller>
		<div class="bottom">
			<router-link to="/shimingrenzheng">
				<p>去中奖</p>
			</router-link>
		</div>
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
	@import "../less/dltlskj.less";
</style>
