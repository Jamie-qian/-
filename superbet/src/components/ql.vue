<template>
	<div>
		<header class="ql">
			<router-link to="/index">
				<img src="../qietu/fanhui.png"/>
			</router-link>
			<p v-showmoshi>七乐彩&nbsp;-&nbsp;<span class="moshi">普通玩法</span></p>
			<div class="moree">
				<span class="active" v-moshi v-dlt>普通玩法</span>
				<span v-moshi v-td>胆拖玩法</span>
			</div>
			<i v-about class="hide">
				<div class="more">
					<p>显示遗漏</p>
					<p>玩法说明</p>
				</div>
			</i>
		</header>
		<!-- <scroller> -->
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
						<span>奖池滚存：</span>
						<span class="gc">1234567890</span>
						<span class="col6">元</span>
					</li>
				</ol>
			</ul>
			<div class="text dlt">
				至少选择7个号码
				<p v-jixuanql>机选一注</p>
			</div>
			<ul class="red dlt">
				<li v-actql>01</li>
				<li v-actql>02</li>
				<li v-actql>03</li>
				<li v-actql>04</li>
				<li v-actql>05</li>
				<li v-actql>06</li>
				<li v-actql>07</li>
				<li v-actql>08</li>
				<li v-actql>09</li>
				<li v-actql>10</li>
				<li v-actql>11</li>
				<li v-actql>12</li>
				<li v-actql>13</li>
				<li v-actql>14</li>
				<li v-actql>15</li>
				<li v-actql>16</li>
				<li v-actql>17</li>
				<li v-actql>18</li>
				<li v-actql>19</li>
				<li v-actql>20</li>
				<li v-actql>21</li>
				<li v-actql>22</li>
				<li v-actql>23</li>
				<li v-actql>24</li>
				<li v-actql>25</li>
				<li v-actql>26</li>
				<li v-actql>27</li>
				<li v-actql>28</li>
				<li v-actql>29</li>
				<li v-actql>30</li>
			</ul>
			<div class="text td">
				胆码 - 前区，最多选6个，最少选1个
			</div>
			<ul class="redq td">
				<li v-actqlq>01</li>
				<li v-actqlq>02</li>
				<li v-actqlq>03</li>
				<li v-actqlq>04</li>
				<li v-actqlq>05</li>
				<li v-actqlq>06</li>
				<li v-actqlq>07</li>
				<li v-actqlq>08</li>
				<li v-actqlq>09</li>
				<li v-actqlq>10</li>
				<li v-actqlq>11</li>
				<li v-actqlq>12</li>
				<li v-actqlq>13</li>
				<li v-actqlq>14</li>
				<li v-actqlq>15</li>
				<li v-actqlq>16</li>
				<li v-actqlq>17</li>
				<li v-actqlq>18</li>
				<li v-actqlq>19</li>
				<li v-actqlq>20</li>
				<li v-actqlq>21</li>
				<li v-actqlq>22</li>
				<li v-actqlq>23</li>
				<li v-actqlq>24</li>
				<li v-actqlq>25</li>
				<li v-actqlq>26</li>
				<li v-actqlq>27</li>
				<li v-actqlq>28</li>
				<li v-actqlq>29</li>
				<li v-actqlq>30</li>
			</ul>
			<div class="text td">
				拖码 - 前区,最少选2个
			</div>
			<ul class="redw td">
				<li v-actqlw>01</li>
				<li v-actqlw>02</li>
				<li v-actqlw>03</li>
				<li v-actqlw>04</li>
				<li v-actqlw>05</li>
				<li v-actqlw>06</li>
				<li v-actqlw>07</li>
				<li v-actqlw>08</li>
				<li v-actqlw>09</li>
				<li v-actqlw>10</li>
				<li v-actqlw>11</li>
				<li v-actqlw>12</li>
				<li v-actqlw>13</li>
				<li v-actqlw>14</li>
				<li v-actqlw>15</li>
				<li v-actqlw>16</li>
				<li v-actqlw>17</li>
				<li v-actqlw>18</li>
				<li v-actqlw>19</li>
				<li v-actqlw>20</li>
				<li v-actqlw>21</li>
				<li v-actqlw>22</li>
				<li v-actqlw>23</li>
				<li v-actqlw>24</li>
				<li v-actqlw>25</li>
				<li v-actqlw>26</li>
				<li v-actqlw>27</li>
				<li v-actqlw>28</li>
				<li v-actqlw>29</li>
				<li v-actqlw>30</li>
			</ul>
		</section>
		<!-- </scroller> -->
		<div class="basket">
			<dl>
				<dt class="dd_dt">
					号码篮
					<span class="clear" >清空</span>
				</dt>
				<dd>
					<i></i>
					<p></p>
					<p></p>
					<router-link to="/dlt"></router-link>
				</dd>
			</dl>
		</div>
		<footer>
			<i v-clear_active></i>
			<div class="monery">
				<p>共&nbsp;<span id="zhu">0</span>&nbsp;注</p>
				<p>共&nbsp;<span id="qian">0</span>&nbsp;元</p>
			</div>
			<router-link to="touzhu">
				<button class="ql">确定</button>
			</router-link>
			<div class="car look">查看号码篮
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
	@import "../less/ql.less";
</style>
