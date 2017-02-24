import Vue from 'vue'
import $ from 'jquery'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

//信息提示框
function s_toggle(){
	$("#prompt_info").fadeOut();
}

//全局地址变量
var overall = "http://120.27.51.77/";

//toggle切换
Vue.directive('showhide',{
	bind:function(el){
		$(el).on('click',function(){
			if($(this).css("backgroundPosition") == "0% 0%"){
				$(this).css("backgroundPosition","left bottom")
			}else{
				$(this).css("backgroundPosition","left top")
			}
			$(this).parents(".show_list").find(".contain").slideToggle();
		})
	}
})

//显示隐藏
Vue.directive('hides',{
	bind:function(el){
		$(el).on("click",function(){
			if($(el).parent("li").hasClass("yes")){
				$(el).parent("li").find(".more").hide();
				$(el).parent("li").removeClass("yes");
				$(el).css('backgroundPosition','left top');
			}else{
				$(el).parent("li").find(".more").show();
				$(el).parent("li").addClass("yes");
				$(el).css('backgroundPosition','left bottom');
			}
		})
		
	}
})

//border动画
Vue.directive("change",{
	bind:function(el){
		var el = el;
		$(el).find("li").on("click",function(){
			var index = $(this).index(),
				width = $(this).width();
			$(this).css("color","#e43134").siblings().css("color","#999");
			$("#border").css({"left":(width/2 + width*index)+"px"});
		})
	}
})

//--------登录页---------
//--判断用户名
Vue.directive('phoneid',{
	bind:function(el){
		$(el).focus(function(){
			$(this).val("");
		})
		$(el).blur(function(){
			var txt = $(this).val();
			if(txt == ""){
				$("#info").text("用户名不能为空");
				$("#prompt_info").fadeIn().text("用户名不能为空");
				setTimeout(s_toggle,1000);
			}else if(!(/^1[34578]\d{9}$/.test(txt))){ 
				$("#info").text("手机号错误,请重新填写!");
				$("#prompt_info").fadeIn().text("手机号错误,请重新填写!");
				setTimeout(s_toggle,1000);
			}else{
				$("#info").text("");
			}
		})
		$(el).keyup(function(){
			var txt = $(this).val();
			if(txt!="" && (/^1[34578]\d{9}$/.test(txt))){
				$("#obtain").removeClass("b_click").addClass("n_click").attr("disabled",false);
			}
		})
	}
})
//--判断密码
Vue.directive('dlpassword',{
	bind:function(el){
		$(el).focus(function(){
			$(this).val("");
			$("#btns").css("background","#e43134").attr("disabled",false);
		})
		$(el).blur(function(){
			var txt = $(this).val();
			if(txt == ""){
				$("#info").text("密码不能为空");
				$("#prompt_info").fadeIn().text("密码不能为空");
				setTimeout(s_toggle,1000);
				return false;
			}else if(!(/\w{6,20}$/.test(txt))){ 
		        $("#info").text("密码为6-20位字母、数字或下划线");
				$("#prompt_info").fadeIn().text("密码格式错误");
				setTimeout(s_toggle,1000);
				return false;
		   }else{
		   		$("#info").text("");
		   }
		})
	}
})

//--点击登录
Vue.directive('captacha',{
	bind:function(el){
		$(el).on("click",function(){
			var phone=$("#usename").val(),
				password=$("#password").val();
			if(phone=="" || password==""){
				$("#btns").attr("disabled",true)
				$("#prompt_info").fadeIn().text("请输入用户信息");
				setTimeout(s_toggle,1000);
			}else{
				var data={
		    		phone:phone,
		    		password:password
		    	}
				$.ajax({
					type:"post",
					url:overall+"ApiUser/login?",
					data:data,
					async:true,
					datatype:"jsonp",
					success:function(res){
						var res=JSON.parse(res),
							ifcode=res.code;
						console.log(ifcode)
						if(ifcode=="10008"){
							$("#prompt_info").fadeIn().text("该手机号尚未注册！");
							setTimeout(s_toggle,1000);
						}else if(ifcode=="10007"){
							$("#prompt_info").fadeIn().text("登录密码错误，请重新填写！");
							setTimeout(s_toggle,1000);
						}else if(ifcode=="10002"){
							$("#prompt_info").fadeIn().text("您已经登陆过了");
							setTimeout(s_toggle,1000);
						}else if(ifcode=="2"){
							$("#prompt_info").fadeIn().text("系统繁忙,请重试");
							setTimeout(s_toggle,1000);
						}else if(ifcode=="1"){
							localStorage.setItem("token",res.data.token)
							localStorage.setItem("userId",res.data.user_id)
							//登陆成功后获取跳转用户信息页
							location.href=location.href.replace("my","user")
							localStorage.setItem("login","true");
						}
					},
					error:function(){
						console.log("错误")
					}
				})
			}
		})
	}
})

//--退出登录
Vue.directive('exit',{
	bind:function(el){
		$(el).on("click",function(){
			var data={
	    		token:localStorage.getItem("token")
	    	}
			$.ajax({
				type:"post",
				url:overall + "ApiUser/signout?",
				data:data,
				async:true,
				datatype:"jsonp",
				success:function(data){
					var data=JSON.parse(data),
						ifcode=data.code;
					if(ifcode=="1"){
						location.href=location.href.replace("user","my")
						localStorage.setItem("login","false");
						localStorage.clear();
					}
				}
			})
		})
	}
})
//-----登录成功页面------

//--完整用户信息类
function user_info(){
	var data={
		user_id:localStorage.getItem("userId"),
		token:localStorage.getItem("token")
	}
	$.ajax({
		url:overall+ "Ucenter/overview?",
		type:"post",
		data:data,
		async:true,
		datatype:"jsonp",
		success:function(res){
			var res=JSON.parse(res),
				ifcode=res.code,
				data=res.data.user_info,
				bank=res.data.user_bank,
				u_info=res.data.user_state;
			if(u_info==1){
				$(".info_").eq(0).show()
			}else{
				$(".info_").eq(0).hide()
			}
			if(res.data.user_bank==""){
				$(".info_").eq(1).show()
			}else{
				$(".info_").eq(1).hide()
			}
			if(ifcode=="1"){
				$("#u_name").text(data.nickname)
				//$("#u_money").text(data.balance)
				$("#t_name").text(data.turename)
				$("#id_card").text(data.show_idcard)
				$("#use_phone").text(data.show_mobilephone)
				$("#bankcar").text(bank.show_bank_title)
				$("#u_sex").text(data.show_sex)
				//身份证不为空的时候 已完成实名认证
				if(data.idcard!=""){
					$("#cols").text("已完善")
				}
				if(bank!=""){
					$("#card").text("已绑定")
				}
				if($("#cols").text()=="已完善" && $("#card").text()=="已绑定"){
					$("#one").hide();
					$("#two").show();
					$(".dian").show();
				}else{
					$("#one").show();
					$("#two").hide();
				}
			}
		}
	})
}

//--显示用户信息
Vue.directive('complate',{
	bind:function(el){
		if(localStorage.getItem("userId")!=""){
			user_info();
		}
	}
})

//-------充值页面--------

//--添加删除样式
Vue.directive('active',{
	bind:function(el){
		$(el).on("click",function(){
			$(el).addClass("active").siblings().removeClass("active");
		})
	}
})

//---登录页面忘记密码----

//--忘记密码获取验证码
Vue.directive('x_code',{
	bind:function(el){
		$(el).on("click",function(){
			codes($(el),"smsback")
		})
	}
})

//--忘记密码
Vue.directive('xiugai',{
	bind:function(el){
		$(el).on("click",function(){
			var phone=$("#usename").val(),
				n_password=$("#password").val(),
				verify=$("#verify").val();
			var data={
				phone:phone,
				password:n_password,
				rocode:verify
	    	}
			$.ajax({
				type:"post",
				url:overall + "ApiUser/robackpassword?",
				data:data,
				datatype:"jsonp",
				async:true,
				success:function(data){
					var data=JSON.parse(data),
						ifcode=data.code;
					console.log(ifcode)
					if(ifcode=="10005"){
						$("#info").text("该手机号尚未注册！");
					}else if(ifcode=="10000"){
						$("#info").text("请输入相关信息");
					}else if(ifcode=="10004"){
						$("#info").text("验证码错误");
					}else if(ifcode=="10009"){
						$("#info").text("找回密码失败");
					}else if(ifcode=="1"){
						location.href=location.href.replace("pwd","user")
						location.href=location.href.replace("xiugaidenglumima","mimaguanli")
					}else if(ifcode=="2"){
						$("#info").text("系统繁忙,请重试");
					}
				}
			})
		})
	}
})

//--------注册页---------

//--加密转换
Vue.directive('eye',{
	bind:function(el){
		$(el).on("click",function(){
			if($("#password").attr("type") == "text"){
				$(this).removeClass("open").addClass("close");
				$("#password").attr("type","password")
			}else{
				$(this).removeClass("close").addClass("open");
				$("#password").attr("type","text")
			}
		})
	}
})
//--已阅读协议
Vue.directive("_remember",{
	bind:function(el){
		$(el).on("click",function(){
			if($(this).hasClass("ok") == true){
				$(this).removeClass("ok").addClass("no");
				//$("#btn").attr("disabled",true).css("background","#ccc");
			}else{//已读
				$(this).removeClass("no").addClass("ok");
				//$("#btn").attr("disabled",false).css("background","#e43134");
			}
		})
	}
})

//--验证码
Vue.directive('verify',{
	bind:function(el){
		$(el).blur(function(){
			var txt = $(this).val();
			if(txt == ""){
				$("#info").text("验证码不能为空");
			}else if(txt!="123456"){ 
		        $("#info").text("验证码错误");
		   }else{
		   		$("#info").text("");
		   }
		})
	}
})

//--获取验证码
function codes(that,type){
   	//获取验证码
   	var data={
		phone:$("#usename").val(),
		smstype:type
	}
	$.ajax({
		type:"post",
		url:overall + "ApiUser/sendmessage?",
		data:data,
		async:true,
		datatype:"jsonp",
		success:function(res){
			var res=JSON.parse(res);
			var ifcode=res.code;
			console.log(ifcode)
			if(ifcode==1){
				$("#btn").attr("disabled",false).css("background","#e43134");
				$("#obtain").removeClass("n_click").addClass("a_click").attr("disabled",true);
				//60s倒计时
   				var i=60;
				var timer=setInterval(function(){
					i--;
			   		that.text(i+"s请重新获取")
			   		if(i<=0){
			   			clearInterval(timer);
			   			that.text("获取验证码")
			   			$("#obtain").removeClass("a_click").addClass("n_click").attr("disabled",false);
			   		}
				},1000);
			}else if(ifcode=="2"){
				$("#info").text("系统错误");
				$("#prompt_info").fadeIn().text("系统错误");
				setTimeout(s_toggle,1000);
				clearInterval(timer);
			}else if(ifcode=="10006"){
				$("#info").text("验证码发送错误");
				$("#prompt_info").fadeIn().text("验证码发送错误");
				setTimeout(s_toggle,1000);
				clearInterval(timer);
			}
		}
	})
}

//--注册获取验证码remembers
Vue.directive('code',{
	bind:function(el){
		$(el).on("click",function(){
			codes($(el),"smslogin")
		})
	}
})

//--点击注册
Vue.directive("register",{
	bind:function(el){
		$(el).on("click",function(){
			var data={
				phone:$("#usename").val(),
				password:$("#password").val(),
				code:$("#verify").val(),
				device_name:"apply",
				system:"android",
				os_version:7.1,
				source:3
			}
			$.ajax({
				type:"post",
				url:overall + "ApiUser/register?",
				data:data,
				async:true,
				datatype:"jsonp",
				success:function(res){
					var res=JSON.parse(res);
					var ifcode=res.code;
					console.log(ifcode)
					if(ifcode=="10000"){
						$("#info").text("手机号格式不对");
					}else if(ifcode=="10001"){
						$("#info").text("密码不够六位");
					}else if(ifcode=="10002"){
						$("#info").text("手机已被注册");
						setTimeout(function(){
							history.go(0);
						},1500)
					}else if(ifcode=="10003"){
						$("#info").text("注册失败,请重试");
						setTimeout(function(){
							history.go(0);
						},1500)
					}else if(ifcode=="10004"){
						$("#info").text("验证码错误");
					}else if(ifcode=="1"){
						localStorage.setItem("token",res.data.token);
						localStorage.setItem("userId",res.data.user_id);
	            		location.href=location.href.replace("register","user");
	            		localStorage.setItem("login","false");
					}
				},
				error:function(){
					console.log("错误")
				}
			})	
		})
	}
})

//实名认证
Vue.directive('idcard',{
	bind : function (el) {
		$(el).blur(function(){
			if($(el).val() == ""){
		   		$("#prompt_info").fadeIn().text("请输入身份证号");
				setTimeout(s_toggle,1000);
		   	}else if(!(/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test($(el).val()))){ 
		        $("#prompt_info").fadeIn().text("身份证号码错误");
				setTimeout(s_toggle,1000);
		   	} 	
		});
	}
})

//提交信息
Vue.directive('refer',{
	bind : function (el) {
		$(el).on("click",function () {
			var idcard = $("#idcard").val();
			var one_p = $("#one_p").val();
			var two_p = $("#two_p").val();
			var phoneid = $("#phoneid").val();
			var captacha = $("#captacha").val();
			var turename = $("#t_name").val();

			if( idcard =="" || one_p =="" || two_p =="" || phoneid =="" || captacha =="" || turename ==""){
				$("#prompt_info").fadeIn().text("请输入完整信息");
				setTimeout(s_toggle,1000);
			}else{
				var data = {
		    		user_id:localStorage.getItem("userId"),
		    		paypassword:two_p,
		    		turename:turename,
		    		idcard:idcard,
		    		token:localStorage.getItem("token")
		    	}
				$.ajax({
					type:"post",
					url:overall + "/Ucenter/RealnameAuthentication?",
					data:data,
					async:true,
					datatype:"jsonp",
					success:function(res){
						var res = JSON.parse(res);
						var ifcode = res.code;
						console.log(res)
						if(ifcode == 1){
							$("#prompt_info").fadeIn().text("实名认证成功");
							 setTimeout(s_toggle,1000);  
		            		 setTimeout(function(){
		            			location.href = location.href.replace("shimingrenzheng","per_details");
		            		 },2000)
						}else if(ifcode == 40000){
							$("#prompt_info").fadeIn().text("支付密码为6位数字！");
							setTimeout(s_toggle,1000);
						}
					}
				})
			}
		})
	}
})


//修改确认支付密码
Vue.directive('passwords',{
	bind : function (el) {
		$(el).click( function() {
			var one_p=$("#one_p").val(),
				two_p=$("#two_p").val();
			if(one_p =="" || two_p ==""){
				$("#prompt_info").fadeIn().text("密码不能为空");
				setTimeout(s_toggle,1000);
			}else if(!(/^\d{6}/.test(one_p))){ 
		        $("#prompt_info").fadeIn().text("支付密码为6位数字！");
				setTimeout(s_toggle,1000); 
		    }else if(one_p!=two_p){
		    	$("#prompt_info").fadeIn().text("请确认支付密码！");
				setTimeout(s_toggle,1000);
		    }else{
		    	var data={
		    		user_id:localStorage.getItem("userId"),
		    		new_paypass:two_p,
		    		token:localStorage.getItem("token")
		    	}
		    	$.ajax({
	                type:"post",
					url:overall +"Ucenter/alterpaypassword?",
					data:data,
					async:true,
					datatype:"jsonp",
	                success:function(data){
	                	var data=JSON.parse(data),
	                		ifcode=data.code;
	                		console.log(ifcode)
	                	if(ifcode==1){
	                		 $("#prompt_info").fadeIn().text("密码修改成功");
							 setTimeout(s_toggle,1000);  
	                		 setTimeout(function(){
	                			location.href=location.href.replace("xiugaizhifumima","mimaguanli")
	                		 },2000)
	                	}else{
	                		$("#tit").text("密码错误");
	                	}
	                }
	            })
		    }var one_p=$("#one_p").val(),
				two_p=$("#two_p").val();
			if(one_p=="" || two_p==""){
				$("#prompt_info").fadeIn().text("密码不能为空");
				setTimeout(s_toggle,1000);
			}else if(!(/^\d{6}/.test(one_p))){ 
		        $("#prompt_info").fadeIn().text("支付密码为6位数字！");
				setTimeout(s_toggle,1000); 
		    }else if(one_p!=two_p){
		    	$("#prompt_info").fadeIn().text("请确认支付密码！");
				setTimeout(s_toggle,1000);
		    }else{
		    	var data={
		    		user_id:localStorage.getItem("userId"),
		    		new_paypass:two_p,
		    		token:localStorage.getItem("token")
		    	}
		    	$.ajax({
	                type:"post",
					url:overall +"Ucenter/alterpaypassword?",
					data:data,
					async:true,
					datatype:"jsonp",
	                success:function(data){
	                	var data=JSON.parse(data),
	                		ifcode=data.code;
	                		console.log(ifcode)
	                	if(ifcode==1){
	                		 $("#prompt_info").fadeIn().text("密码修改成功");
							 setTimeout(s_toggle,1000);  
	                		 setTimeout(function(){
	                			location.href=location.href.replace("xiugaizhifumima","mimaguanli")
	                		 },2000)
	                	}else{
	                		$("#tit").text("密码错误");
	                	}
	                }
	            })
		    }
		})
	}
})

//绑定银行卡提交
Vue.directive('bound',{
	bind: function(el){
		$(el).on('click',function () {
			var kaihu_name = $("#kaihu_name").val();
			var bank_car = $("#bank_car").val();
			var dcard_type = $("#dcard_type").val();
			var obligate_phone=$("#obligate_phone").val();
			if((kaihu_name == "") || (bank_car == "") || (dcard_type == "") || (obligate_phone == "")){
				$("#prompt_info").fadeIn().text("请输入完整信息");
				setTimeout(s_toggle,1000);
			}else{
				var data = {
		    		user_id:localStorage.getItem("userId"),
		    		turename:kaihu_name,
		    		bankcard:bank_car,
		    		bankname:dcard_type,
		    		token:localStorage.getItem("token")
		    	}
				$.ajax({
					type:"post",
					url:overall + "Ucenter/BoundBankCard?",
					data:data,
					async:true,
					datatype:"jsonp",
					success:function(res){
						var res = JSON.parse(res);
						var ifcode = res.code;
						
						console.log(ifcode);
						if(ifcode == 1){
							$("#prompt_info").fadeIn().text("实名认证成功");
							 setTimeout(s_toggle,1000);  
		            		 setTimeout(function(){
		            			location.href = location.href.replace("bangdingyinhangka","per_details");
		            			$("#card").text("已绑定")
		            		 },2000)
						}else if(ifcode == 40001){
							$("#prompt_info").fadeIn().text("银行卡号有误！");
							setTimeout(s_toggle,1000);
						}
					}
				})
			}
		})
	}
})

//修改登录密码页面
//获取用户的默认信息
Vue.directive('p_default',{
	bind : function (el) {
		var data = {
	    		user_id:localStorage.getItem("userId"),
	    		code:$("#verify").val(),  //短信验证码
	    		new_number:$("#usename").val(),
	    		token:localStorage.getItem("token")
	    	}
		$.ajax({
			type:"post",
			url:overall + "Ucenter/GetDefault?",
			data:data,
			async:true,
			datatype:"jsonp",
			success:function(res){
				var res = JSON.parse(res);
				var ifcode = res.code;
				if(ifcode == 1){
					$(el).val(res.data.mobilephone)
					if($("#usename").val()!=""){
						$("#obtain").removeClass("b_click").addClass("n_click").attr("disabled",false);
					}
				}
			}
		})
	}	
})

//修改登录密码获取验证码
Vue.directive('d_code',{
	bind :function(el){
		$(el).on('click',function () {
			codes($(el),"alertlogin")
		})
	}
})

//修改登录密码 
Vue.directive('x_login',{
	bind : function (el) {
		$(el).on('click',function (){
			var phone = $("#usename").val(),
				verify = $("#verify").val(),
				password = $("#password").val();
			if(phone == "" || verify == "" || password == ""){
				$("#prompt_info").fadeIn().text("请输入完整信息");
				setTimeout(s_toggle,1000);
			}else{
				var data={
		    		user_id:localStorage.getItem("userId"),
		    		code:verify,
		    		password:password,
		    		token:localStorage.getItem("token")
		    	}
				$.ajax({
					type:"post",
					url:overall +"Ucenter/AlterLoginPassword?",
					data:data,
					async:true,
					datatype:"jsonp",
					success:function(res){
						var res = JSON.parse(res),
							ifcode = res.code;
							console.log(ifcode)
							if(ifcode == "1"){
								$("#prompt_info").fadeIn().text("密码修改成功,请重新登录");
								setTimeout(s_toggle,1000);
								setTimeout(function(){
		                			location.href = location.href.replace("xiugaidenglumima","my")
		                		 },2000)
							}else if(ifcode == "2"){
								$("#prompt_info").fadeIn().text("系统繁忙,请重试");
								setTimeout(s_toggle,1000);
							}
					}
				})
			}
		})
	}
})


Vue.directive('success',{
	bind : function (el) {
		$(el).on("click",function(){
			if(localStorage.getItem("login")){
				location.href = location.href.replace("index","user");
				location.href = location.href.replace("lottery","user");
			}else{
				location.href = location.href.replace("index","my");
				location.href = location.href.replace("lottery","my");
			}
		})
	}
})