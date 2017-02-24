<template>
	<div>
		<header class="qx">
			<router-link to="/index">
				<img src="../qietu/fanhui.png"/>
			</router-link>
			<p>七星彩</p>
			<i v-about class="hide">
				<div class="more">
					<p>显示遗漏</p>
					<p>玩法说明</p>
				</div>
			</i>
		</header>
		<scroller lock-x height="680px">
			<section>
				<ul>
					<li>
						<p>
							第2016315期 11-17 19:20 截止投注
						</p>
						<i v-hidelist class="hide"></i>
					</li>
					<ol class="list">
						<li>
							<span>035期</span>
							<span>08</span>
							<span>08</span>
							<span>08</span>
							<span>08</span>
							<span>08</span>
							<span>08</span>
							<span>08</span>
						</li>
						<li>
							<span>035期</span>
							<span>08</span>
							<span>08</span>
							<span>08</span>
							<span>08</span>
							<span>08</span>
							<span>08</span>
							<span>08</span>
						</li>
						<li>
							<span>035期</span>
							<span>08</span>
							<span>08</span>
							<span>08</span>
							<span>08</span>
							<span>08</span>
							<span>08</span>
							<span>08</span>
						</li>
						<li>
							<span>035期</span>
							<span>08</span>
							<span>08</span>
							<span>08</span>
							<span>08</span>
							<span>08</span>
							<span>08</span>
							<span>08</span>
						</li>
						<li>
							<span>035期</span>
							<span>08</span>
							<span>08</span>
							<span>08</span>
							<span>08</span>
							<span>08</span>
							<span>08</span>
							<span>08</span>
						</li>
						<li>
							<span>035期</span>
							<span>08</span>
							<span>08</span>
							<span>08</span>
							<span>08</span>
							<span>08</span>
							<span>08</span>
							<span>08</span>
						</li>
					</ol>
				</ul>
				<div class="text zhi">
					每位至少选择1个号码
					<p v-jixuanqx>机选一注</p>
				</div>
				<span class="name">一</span>
				<ul class="yi">
					<li v-actqx>0</li>
					<li v-actqx>1</li>
					<li v-actqx>2</li>
					<li v-actqx>3</li>
					<li v-actqx>4</li>
					<li v-actqx>5</li>
					<li v-actqx>6</li>
					<li v-actqx>7</li>
					<li v-actqx>8</li>
					<li v-actqx>9</li>
				</ul>
				<div class="xian"></div>
				<span class="name">二</span>
				<ul class="er">
					<li v-actqx>0</li>
					<li v-actqx>1</li>
					<li v-actqx>2</li>
					<li v-actqx>3</li>
					<li v-actqx>4</li>
					<li v-actqx>5</li>
					<li v-actqx>6</li>
					<li v-actqx>7</li>
					<li v-actqx>8</li>
					<li v-actqx>9</li>
				</ul>
				<div class="xian"></div>
				<span class="name">三</span>
				<ul class="san">
					<li v-actqx>0</li>
					<li v-actqx>1</li>
					<li v-actqx>2</li>
					<li v-actqx>3</li>
					<li v-actqx>4</li>
					<li v-actqx>5</li>
					<li v-actqx>6</li>
					<li v-actqx>7</li>
					<li v-actqx>8</li>
					<li v-actqx>9</li>
				</ul>
				<div class="xian"></div>
				<span class="name">四</span>
				<ul class="si">
					<li v-actqx>0</li>
					<li v-actqx>1</li>
					<li v-actqx>2</li>
					<li v-actqx>3</li>
					<li v-actqx>4</li>
					<li v-actqx>5</li>
					<li v-actqx>6</li>
					<li v-actqx>7</li>
					<li v-actqx>8</li>
					<li v-actqx>9</li>
				</ul>
				<div class="xian"></div>
				<span class="name">五</span>
				<ul class="wu">
					<li v-actqx>0</li>
					<li v-actqx>1</li>
					<li v-actqx>2</li>
					<li v-actqx>3</li>
					<li v-actqx>4</li>
					<li v-actqx>5</li>
					<li v-actqx>6</li>
					<li v-actqx>7</li>
					<li v-actqx>8</li>
					<li v-actqx>9</li>
				</ul>
				<div class="xian"></div>
				<span class="name">六</span>
				<ul class="liu">
					<li v-actqx>0</li>
					<li v-actqx>1</li>
					<li v-actqx>2</li>
					<li v-actqx>3</li>
					<li v-actqx>4</li>
					<li v-actqx>5</li>
					<li v-actqx>6</li>
					<li v-actqx>7</li>
					<li v-actqx>8</li>
					<li v-actqx>9</li>
				</ul>
				<div class="xian"></div>
				<span class="name">七</span>
				<ul class="qi">
					<li v-actqx>0</li>
					<li v-actqx>1</li>
					<li v-actqx>2</li>
					<li v-actqx>3</li>
					<li v-actqx>4</li>
					<li v-actqx>5</li>
					<li v-actqx>6</li>
					<li v-actqx>7</li>
					<li v-actqx>8</li>
					<li v-actqx>9</li>
				</ul>
			</section>
		</scroller>
		<div class="basket">
			<dl>
				<dt class="dd_dt">
					号码篮
					<span class="clear">清空</span>
				</dt>
				<dd>
					<i></i>
					<p></p>
					<router-link to='/dlt'></router-link>
				</dd>
			</dl>
		</div>
		<footer>
			<i v-clear_active></i>
			<div class="monery">
				<p>共&nbsp;<span id="zhu">0</span>&nbsp;注</p>
				<p>共&nbsp;<span id="qian">0</span>&nbsp;元</p>
			</div>
			<router-link to='/touzhu'>
				<button class="qx">确定</button>
			</router-link>
			<div class="car look" >查看号码篮
				<span>0</span>
			</div>
			<div class="car add_one">加入号码篮
				<span>0</span>
			</div>
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
@import "../less/qx.less";
</style>