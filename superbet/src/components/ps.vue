<template>
	<div>
		<header class="ps">
			<router-link to="/index">
				<img src="../qietu/fanhui.png"/>
			</router-link>
			<p v-showmoshi>排列三&nbsp;-&nbsp;<span class="moshi">直选</span></p>
			<div class="moree">
				<span class="active" v-moshi v-zhi>直选</span>
				<span v-moshi v-san>组三</span>
				<span v-moshi v-liu>组六</span>
			</div>
			<i v-about class="hide">
				<div class="more">
					<p>显示遗漏</p>
					<p>玩法说明</p>
				</div>
			</i>
		</header>
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
						<span>期次</span>
						<span>开奖号码</span>
						<span>形态</span>
						<span>试机号</span>
					</li>
					<li>
						<span>2016314</span>
						<span>1&nbsp;&nbsp;5&nbsp;&nbsp;7</span>
						<span>组六</span>
						<span>9&nbsp;&nbsp;6&nbsp;&nbsp;8</span>
					</li>
					<li>
						<span>2016314</span>
						<span>1&nbsp;&nbsp;5&nbsp;&nbsp;7</span>
						<span>组六</span>
						<span>9&nbsp;&nbsp;6&nbsp;&nbsp;8</span>
					</li>
					<li>
						<span>2016314</span>
						<span>1&nbsp;&nbsp;5&nbsp;&nbsp;7</span>
						<span>组六</span>
						<span>9&nbsp;&nbsp;6&nbsp;&nbsp;8</span>
					</li>
					<li>
						<span>2016314</span>
						<span>1&nbsp;&nbsp;5&nbsp;&nbsp;7</span>
						<span>组六</span>
						<span>9&nbsp;&nbsp;6&nbsp;&nbsp;8</span>
					</li>
					<li>
						<span>2016314</span>
						<span>1&nbsp;&nbsp;5&nbsp;&nbsp;7</span>
						<span>组六</span>
						<span>9&nbsp;&nbsp;6&nbsp;&nbsp;8</span>
					</li>
				</ol>
			</ul>
			<div class="text zhi">
				每位至少选择1个号码
				<p v-jixuan>机选一注</p>	
			</div>
			<div class="text san">
				每位至少选择1个号码
				<p v-jixuanzs>机选一注</p>				
			</div>
			<div class="text liu">
				每位至少选择1个号码
				<p v-jixuanl>机选一注</p>				
			</div>
			<span class="name zhi">百位</span>
			<ul class="bai zhi">
				<li v-act>0</li>
				<li v-act>1</li>
				<li v-act>2</li>
				<li v-act>3</li>
				<li v-act>4</li>
				<li v-act>5</li>
				<li v-act>6</li>
				<li v-act>7</li>
				<li v-act>8</li>
				<li v-act>9</li>
			</ul>
			<div class="xian zhi"></div>
			<span class="name zhi">十位</span>
			<ul class="shi zhi">
				<li v-act>0</li>
				<li v-act>1</li>
				<li v-act>2</li>
				<li v-act>3</li>
				<li v-act>4</li>
				<li v-act>5</li>
				<li v-act>6</li>
				<li v-act>7</li>
				<li v-act>8</li>
				<li v-act>9</li>
			</ul>
			<div class="xian zhi"></div>
			<span class="name zhi">个位</span>
			<ul class="ge zhi">
				<li v-act>0</li>
				<li v-act>1</li>
				<li v-act>2</li>
				<li v-act>3</li>
				<li v-act>4</li>
				<li v-act>5</li>
				<li v-act>6</li>
				<li v-act>7</li>
				<li v-act>8</li>
				<li v-act>9</li>
			</ul>
			<span class="name san">组三</span>
			<ul class="zs san">
				<li v-acts>0</li>
				<li v-acts>1</li>
				<li v-acts>2</li>
				<li v-acts>3</li>
				<li v-acts>4</li>
				<li v-acts>5</li>
				<li v-acts>6</li>
				<li v-acts>7</li>
				<li v-acts>8</li>
				<li v-acts>9</li>
			</ul>
			<span class="name liu">组六</span>
			<ul class="zl liu">
				<li v-actl>0</li>
				<li v-actl>1</li>
				<li v-actl>2</li>
				<li v-actl>3</li>
				<li v-actl>4</li>
				<li v-actl>5</li>
				<li v-actl>6</li>
				<li v-actl>7</li>
				<li v-actl>8</li>
				<li v-actl>9</li>
			</ul>
			<span class="name">按位猜对开奖号即中&nbsp;<i id="ylll">1040</i>&nbsp;元</span>
		</section>
		<div class="yl">
			若中奖，奖金&nbsp;<span id="yll">1040</span>&nbsp;元，盈利&nbsp;<span id="yl">1040</span>&nbsp;元
		</div>
		<div class="basket">
			<dl>
				<dt class="dd_dt">
					号码篮
					<span class="clear">清空</span>
				</dt>
				<dd>
					<i></i>
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
			<router-link to="/touzhu">
				<button class="ps">确定</button>
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
<style lang="less" scoped>
	@import "../less/ps.less";
</style>