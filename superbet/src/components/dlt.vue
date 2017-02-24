<template>
	<div>
		<header class="dlt" >
			<router-link to="/index">
				<img src="../qietu/fanhui.png"/>
			</router-link>
			<p v-showmoshi>大乐透&nbsp;-&nbsp;<span class="moshi">普通玩法</span></p>
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
		<!-- <scroller lock-x height="680px">  -->
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
					至少选择5个红球，2个蓝球
					<p v-jixuand>机选一注</p>
				</div>
				<ul class="red dlt">
					<li v-actd>01</li>
					<li v-actd>02</li>
					<li v-actd>03</li>
					<li v-actd>04</li>
					<li v-actd>05</li>
					<li v-actd>06</li>
					<li v-actd>07</li>
					<li v-actd>08</li>
					<li v-actd>09</li>
					<li v-actd>10</li>
					<li v-actd>11</li>
					<li v-actd>12</li>
					<li v-actd>13</li>
					<li v-actd>14</li>
					<li v-actd>15</li>
					<li v-actd>16</li>
					<li v-actd>17</li>
					<li v-actd>18</li>
					<li v-actd>19</li>
					<li v-actd>20</li>
					<li v-actd>21</li>
					<li v-actd>22</li>
					<li v-actd>23</li>
					<li v-actd>24</li>
					<li v-actd>25</li>
					<li v-actd>26</li>
					<li v-actd>27</li>
					<li v-actd>28</li>
					<li v-actd>29</li>
					<li v-actd>30</li>
					<li v-actd>31</li>
					<li v-actd>32</li>
					<li v-actd>33</li>
					<li v-actd>34</li>
					<li v-actd>35</li>	
				</ul>
				<div class="xian dlt"></div>
				<ul class="blue dlt">
					<li v-actd>01</li>
					<li v-actd>02</li>
					<li v-actd>03</li>
					<li v-actd>04</li>
					<li v-actd>05</li>
					<li v-actd>06</li>
					<li v-actd>07</li>
					<li v-actd>08</li>
					<li v-actd>09</li>
					<li v-actd>10</li>
					<li v-actd>11</li>
					<li v-actd>12</li>
				</ul>
				<div class="text td">
					胆码 - 前区，最多选4个，最少选1个
				</div>
				<ul class="redq td">
					<li v-actdq>01</li>
					<li v-actdq>02</li>
					<li v-actdq>03</li>
					<li v-actdq>04</li>
					<li v-actdq>05</li>
					<li v-actdq>06</li>
					<li v-actdq>07</li>
					<li v-actdq>08</li>
					<li v-actdq>09</li>
					<li v-actdq>10</li>
					<li v-actdq>11</li>
					<li v-actdq>12</li>
					<li v-actdq>13</li>
					<li v-actdq>14</li>
					<li v-actdq>15</li>
					<li v-actdq>16</li>
					<li v-actdq>17</li>
					<li v-actdq>18</li>
					<li v-actdq>19</li>
					<li v-actdq>20</li>
					<li v-actdq>21</li>
					<li v-actdq>22</li>
					<li v-actdq>23</li>
					<li v-actdq>24</li>
					<li v-actdq>25</li>
					<li v-actdq>26</li>
					<li v-actdq>27</li>
					<li v-actdq>28</li>
					<li v-actdq>29</li>
					<li v-actdq>30</li>
					<li v-actdq>31</li>
					<li v-actdq>32</li>
					<li v-actdq>33</li>
					<li v-actdq>34</li>
					<li v-actdq>35</li>
				</ul>
				<div class="text td">
					拖码 - 前区，最少选2个
				</div>
				<ul class="redw td">
					<li v-actdw>01</li>
					<li v-actdw>02</li>
					<li v-actdw>03</li>
					<li v-actdw>04</li>
					<li v-actdw>05</li>
					<li v-actdw>06</li>
					<li v-actdw>07</li>
					<li v-actdw>08</li>
					<li v-actdw>09</li>
					<li v-actdw>10</li>
					<li v-actdw>11</li>
					<li v-actdw>12</li>
					<li v-actdw>13</li>
					<li v-actdw>14</li>
					<li v-actdw>15</li>
					<li v-actdw>16</li>
					<li v-actdw>17</li>
					<li v-actdw>18</li>
					<li v-actdw>19</li>
					<li v-actdw>20</li>
					<li v-actdw>21</li>
					<li v-actdw>22</li>
					<li v-actdw>23</li>
					<li v-actdw>24</li>
					<li v-actdw>25</li>
					<li v-actdw>26</li>
					<li v-actdw>27</li>
					<li v-actdw>28</li>
					<li v-actdw>29</li>
					<li v-actdw>30</li>
					<li v-actdw>31</li>
					<li v-actdw>32</li>
					<li v-actdw>33</li>
					<li v-actdw>34</li>
					<li v-actdw>35</li>
				</ul>
				<div class="xian td"></div>
				<div class="text td">
					胆码 - 后区，最多选1个
				</div>
				<ul class="bluee td">
					<li v-actde>01</li>
					<li v-actde>02</li>
					<li v-actde>03</li>
					<li v-actde>04</li>
					<li v-actde>05</li>
					<li v-actde>06</li>
					<li v-actde>07</li>
					<li v-actde>08</li>
					<li v-actde>09</li>
					<li v-actde>10</li>
					<li v-actde>11</li>
					<li v-actde>12</li>
				</ul>
				<div class="text td">
					拖码 - 后区，最少选2个
				</div>
				<ul class="bluer td">
					<li v-actdr>01</li>
					<li v-actdr>02</li>
					<li v-actdr>03</li>
					<li v-actdr>04</li>
					<li v-actdr>05</li>
					<li v-actdr>06</li>
					<li v-actdr>07</li>
					<li v-actdr>08</li>
					<li v-actdr>09</li>
					<li v-actdr>10</li>
					<li v-actdr>11</li>
					<li v-actdr>12</li>
				</ul>
			</section>
		<!-- </scroller> 		 -->
		<div class="basket">
			<dl>
				<dt class="dd_dt">
					号码篮
					<span class="clear">清空</span>
				</dt>
				<dd>
					<i ></i>
					<p> <em class="red" >[拖码]</em><em class="blue">| </em><em class="blue">[拖码]</em></p>
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
				<button class="dlt">确定</button>
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
import {Scroller} from 'vux'

export default {
    name: 'index',
    components:{
        Scroller
	},
	data () {
    	return {
            scrollTop: 0
        }
    }
}
</script>
<style lang="less" scoped>
  @import "../less/dlt.less";
</style>