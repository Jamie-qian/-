<template>
	<div>
		<header class="ssq">
			<router-link to="/index">
				<img src="../img/qietu/fanhui.png"/>
			</router-link>
			<p  v-showmoshi>双色球&nbsp;-&nbsp;<span class="moshi">普通玩法</span></p>
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
				至少选择6个红球，1个蓝球
				<p v-jixuans>机选一注</p>
			</div>
			<ul class="red dlt">
				<li v-actssq>01</li>
				<li v-actssq>02</li>
				<li v-actssq>03</li>
				<li v-actssq>04</li>
				<li v-actssq>05</li>
				<li v-actssq>06</li>
				<li v-actssq>07</li>
				<li v-actssq>08</li>
				<li v-actssq>09</li>
				<li v-actssq>10</li>
				<li v-actssq>11</li>
				<li v-actssq>12</li>
				<li v-actssq>13</li>
				<li v-actssq>14</li>
				<li v-actssq>15</li>
				<li v-actssq>16</li>
				<li v-actssq>17</li>
				<li v-actssq>18</li>
				<li v-actssq>19</li>
				<li v-actssq>20</li>
				<li v-actssq>21</li>
				<li v-actssq>22</li>
				<li v-actssq>23</li>
				<li v-actssq>24</li>
				<li v-actssq>25</li>
				<li v-actssq>26</li>
				<li v-actssq>27</li>
				<li v-actssq>28</li>
				<li v-actssq>29</li>
				<li v-actssq>30</li>
				<li v-actssq>31</li>
				<li v-actssq>32</li>
				<li v-actssq>33</li>	
			</ul>
			<div class="xian dlt"></div>
			<ul class="blue dlt">
				<li v-actssq>01</li>
				<li v-actssq>02</li>
				<li v-actssq>03</li>
				<li v-actssq>04</li>
				<li v-actssq>05</li>
				<li v-actssq>06</li>
				<li v-actssq>07</li>
				<li v-actssq>08</li>
				<li v-actssq>09</li>
				<li v-actssq>10</li>
				<li v-actssq>11</li>
				<li v-actssq>12</li>
				<li v-actssq>13</li>
				<li v-actssq>14</li>
				<li v-actssq>15</li>
				<li v-actssq>16</li>
			</ul>
			<div class="text td">
				胆码 - 前区，最多选5个，最少选1个
			</div>
			<ul class="redq td">
				<li v-actssqq>01</li>
				<li v-actssqq>02</li>
				<li v-actssqq>03</li>
				<li v-actssqq>04</li>
				<li v-actssqq>05</li>
				<li v-actssqq>06</li>
				<li v-actssqq>07</li>
				<li v-actssqq>08</li>
				<li v-actssqq>09</li>
				<li v-actssqq>10</li>
				<li v-actssqq>11</li>
				<li v-actssqq>12</li>
				<li v-actssqq>13</li>
				<li v-actssqq>14</li>
				<li v-actssqq>15</li>
				<li v-actssqq>16</li>
				<li v-actssqq>17</li>
				<li v-actssqq>18</li>
				<li v-actssqq>19</li>
				<li v-actssqq>20</li>
				<li v-actssqq>21</li>
				<li v-actssqq>22</li>
				<li v-actssqq>23</li>
				<li v-actssqq>24</li>
				<li v-actssqq>25</li>
				<li v-actssqq>26</li>
				<li v-actssqq>27</li>
				<li v-actssqq>28</li>
				<li v-actssqq>29</li>
				<li v-actssqq>30</li>
				<li v-actssqq>31</li>
				<li v-actssqq>32</li>
				<li v-actssqq>33</li>
			</ul>
			<div class="text td">
				拖码 - 前区,最少选2个
			</div>
			<ul class="redw td">
				<li v-actssqw>01</li>
				<li v-actssqw>02</li>
				<li v-actssqw>03</li>
				<li v-actssqw>04</li>
				<li v-actssqw>05</li>
				<li v-actssqw>06</li>
				<li v-actssqw>07</li>
				<li v-actssqw>08</li>
				<li v-actssqw>09</li>
				<li v-actssqw>10</li>
				<li v-actssqw>11</li>
				<li v-actssqw>12</li>
				<li v-actssqw>13</li>
				<li v-actssqw>14</li>
				<li v-actssqw>15</li>
				<li v-actssqw>16</li>
				<li v-actssqw>17</li>
				<li v-actssqw>18</li>
				<li v-actssqw>20</li>
				<li v-actssqw>21</li>
				<li v-actssqw>22</li>
				<li v-actssqw>23</li>
				<li v-actssqw>24</li>
				<li v-actssqw>25</li>
				<li v-actssqw>26</li>
				<li v-actssqw>27</li>
				<li v-actssqw>28</li>
				<li v-actssqw>29</li>
				<li v-actssqw>30</li>
				<li v-actssqw>31</li>
				<li v-actssqw>32</li>
				<li v-actssqw>33</li>	
			</ul>
			<div class="xian td"></div>
			<div class="text td">
				请至少选1个
			</div>
			<ul class="bluer td">
				<li v-actssqr>01</li>
				<li v-actssqr>02</li>
				<li v-actssqr>03</li>
				<li v-actssqr>04</li>
				<li v-actssqr>05</li>
				<li v-actssqr>06</li>
				<li v-actssqr>07</li>
				<li v-actssqr>08</li>
				<li v-actssqr>09</li>
				<li v-actssqr>10</li>
				<li v-actssqr>11</li>
				<li v-actssqr>12</li>
				<li v-actssqr>13</li>
				<li v-actssqr>14</li>
				<li v-actssqr>15</li>
				<li v-actssqr>16</li>
			</ul>
		</section>
		<!-- </scroller> -->
		<div class="basket">
			<dl>
				<dt class="dd_dt">
					号码篮
					<span class="clear">清空</span>
				</dt>
				<dd>
					<i></i>
					<p><em class="red" >[拖码]</em><em class="blue">| </em><em class="blue">[拖码]</em></p>
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
			<router-link to="/touzhu">
				<button class="ssq">确定</button>
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
	@import "../less/ssq.less";
</style>
