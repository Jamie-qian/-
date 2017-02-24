<template>
	<div>		
		<header>
			<router-link to="/dlt">
				<img src="../qietu/fanhui.png"/>
			</router-link>
			<p>投注单</p>
		</header>
		<section>
			<ul>
				<router-link to="/dlt">
					<li>自选号码</li>
				</router-link>
				<li v-on:click="basket_look">机选一注</li>
				<li>全部删除</li>
			</ul>
			<ol></ol>
		</section>
		<footer>
			<ul class="zb">
				<li>
					<span>追</span>
					<input type="number" name="" id="qi" value="" placeholder="1"/>
					<span>期</span>
				</li>
				<li>
					<span>买</span>
					<input type="number" name="" id="bei" value="" placeholder="1"/>
					<span>倍</span>
				</li>
			</ul>
			<div class="monery">
				<p>共&nbsp;<span id="zhu"></span>&nbsp;注</p>
				<p>共&nbsp;<span id="qian"></span>&nbsp;元</p>
			</div>
			<button>确定</button>
		</footer>
	</div>
</template>
<script>
	import $ from 'jquery';
	export default {
		data () {
			return {

			}
		},
		created () {

		},
		methods : {
			basket_look () {
				function sui(num){
					return Math.floor(num * Math.random());
				}
				function suiji(allnum , num){
					var arr = new Array(allnum),arr2 = new Array(num),a = 0;
					for(var i = 0;i < allnum;i++){
						arr[i] = i;
					}
					for(i = 0;i < num;i++){
						a = sui(allnum - i);
						arr2[i] = arr[a];
						arr.splice(a,1)
					}
					return arr2
				}
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../less/touzhu.less";
</style>
