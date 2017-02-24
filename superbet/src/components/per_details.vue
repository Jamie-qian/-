<template>
	<div>
		<header>
		    <router-link to="/user">
		    	<img src="../img/big_otto/back.png"/>
			</router-link>
		    <h2>个人信息</h2>
		</header>
		<scroller lock-x height="600px">
			<main v-complate>
				<div class="row rows">
					<span>头像</span>
					<img src="../img/login/mrtx.png" id="user_pic">
				</div>
				<div class="row">
					<span>昵称</span>
					<em id="u_name">用户名</em>
				</div>
				<div class="row">
					<span>性别</span>
					<em id="u_sex">女</em>
				</div>
				<div class="c_row"></div>
				<div id="one">
					<div class="row">
						<span>实名认证</span>
						<router-link to="/shimingrenzheng">
							<img src="../img/footer/fanhui@3x.png">
						</router-link>
						<em class="col" id="cols">未完善</em>
					</div>
					<div class="row">
						<span>银行卡号</span>
						<router-link to="/bangdingyinhangka">
							<img src="../img/footer/fanhui@3x.png">
						</router-link>
						<em class="col" id="card">未绑定</em>
					</div>
				</div>
				<div id="two" >
					<div class="row">
						<span>真实姓名</span>
						<em class="col" id="t_name"></em>
					</div>
					<div class="row">
						<span>手机号码</span>
						<em class="col" id="use_phone"></em>
					</div>
					<div class="row">
						<span>身份证号</span>
						<em class="col" id="id_card"></em>
					</div>
					<div class="row">
						<span>银行卡号</span>
						<router-link to="/xiugaiyinhangka">
							<img src="../img/footer/fanhui@3x.png"/>
						</router-link>
						<em class="col" id="bankcar"></em>
					</div>
				</div>
				<div class="row">
					<span>密码管理</span>
					<router-link to="/mimaguanli">
						<img src="../img/footer/fanhui@3x.png" />
					</router-link>
				</div>
				<div class="dian">
					<h2>注意事项</h2>
					<img src="../img/login/youxiaoxi.png"/>
					<p>如需修改真实姓名和身份证号，请联系人工客服</p>
					<button>呼叫：010-12345678</button>
				</div>
			</main>
		</scroller>
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
  @import "../less/per_details.less";
</style>
