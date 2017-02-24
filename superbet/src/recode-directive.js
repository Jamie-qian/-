import Vue from 'vue'
import $ from 'jquery'



//--------------大乐透---------------------
//购彩专区 列表展开 第一个一直显示 开奖信息
Vue.directive('hidelist',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			if($(this).hasClass("hide")){
				$(this).parent().nextAll().show();
				$(this).removeClass("hide").css("backgroundPosition","left bottom");
			}else{
				$(this).parent().nextAll().hide();
				$(this).addClass("hide").css("backgroundPosition","left top");
			}
			
		})
	}
})

//选择模式
Vue.directive('showmoshi',{
	bind:function(el){
		$(el).on("click",function(){
			$(".moree").toggle();
			
		})
	}
})

Vue.directive('dlt',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			$(el).parent().parent().next().find(".td").hide();
			$(el).parent().parent().next().find(".dlt").show();
			$("ul").find("li").removeClass("active");
			$("#zhu").text(0);
			$("#qian").text(0);
			$(".look").show();
			$(".add_one").hide();
			$(".basket").hide();
		})
	}
})

Vue.directive('td',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			$(el).parent().parent().next().find(".dlt").hide();
			$(el).parent().parent().next().find(".td").show();
			$("ul").find("li").removeClass("active");
			$("#zhu").text(0);
			$("#qian").text(0);
			$(".look").show();
			$(".add_one").hide();
			$(".basket").hide();
		})
	}
})

//更多 游戏模式
Vue.directive('moshi',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			$(el).addClass("active").siblings().removeClass("active").parent().hide();
			$(".moshi").text($(el).html())
			
		})
	}
})

//更多 说明部分
Vue.directive('about',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			if($(this).hasClass("hide")){
				$(this).find(".more").show();
				$(this).removeClass("hide");
			}else{
				$(this).find(".more").hide();
				$(this).addClass("hide");
			}
			
		})
	}
})

//随机数
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
	return arr2;
}

//大乐透
//机选 普通 35红球选择5个 12蓝球选择2个
Vue.directive('jixuand',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			$(".basket").hide();
			var arr = suiji(35,5),a = arr[0],b = arr[1],c = arr[2],d = arr[3],e = arr[4];
			$(el).parent().parent().find("li").removeClass("active");
			$(el).parent().parent().find(".red").find("li").eq(a).addClass("active");
			$(el).parent().parent().find(".red").find("li").eq(b).addClass("active");
			$(el).parent().parent().find(".red").find("li").eq(c).addClass("active");
			$(el).parent().parent().find(".red").find("li").eq(d).addClass("active");
			$(el).parent().parent().find(".red").find("li").eq(e).addClass("active");
			$("#zhu").text(1);
			$("#qian").text(2);
			arr = [0,1,2,3,4,5,6,7,8,9,10,11,12]
			a = sui(12);
			arr.splice(a,1)
			b = sui(11);
			c = arr[b];
			arr.splice(b,1);
			b = c;
			$(el).parent().parent().find(".blue").find("li").eq(a).addClass("active");
			$(el).parent().parent().find(".blue").find("li").eq(b).addClass("active");
			$(".add_one").show();
			$(".look").hide()
		})
	}
})

//选择大乐透
Vue.directive('actd',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			if($(el).hasClass("active")){
				$(el).removeClass("active");
			}else{
				$(el).addClass("active");
			}
			var num1 = $(el).parent().parent().find(".red").find(".active").length;
			var num2 = $(el).parent().parent().find(".blue").find(".active").length;
			var zhu = num1*(num1-1)*(num1-2)*(num1-3)*(num1-4)*num2*(num2-1)/240;
			if(zhu >= 1){
				$(".add_one").show();
				$(".look").hide()
			}else{
				$(".look").show();
				$(".add_one").hide()
			}
			$("#zhu").text(zhu);
			$("#qian").text(zhu*2)
		})
	}
})

Vue.directive('actdq',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			var num1 = $(el).parent().parent().find(".redq").find(".active").length;
			if($(el).hasClass("active")){
				$(el).removeClass("active");
			}else{
				if(num1 <= 3){
					$(el).addClass("active");
					var num = $(el).html()-1;
					$(el).parent().parent().find(".redw").find("li").eq(num).removeClass("active");
				}
			}
				num1 = 5 - $(el).parent().parent().find(".redq").find(".active").length;
			var num2 = $(el).parent().parent().find(".redw").find(".active").length;
			var num3 = 2 - $(el).parent().parent().find(".bluee").find(".active").length;
			var num4 = $(el).parent().parent().find(".bluer").find(".active").length;
			var zhu = 1;
			for(var i = 0;i < num1;i++){
				zhu = zhu * (num2 - i) / (i + 1);
			}
			for(var i = 0;i < num3;i++){
				zhu = zhu * (num4 - i) / (i + 1);
			}
			if(zhu >= 1){
				$(".add_one").show();
				$(".look").hide()
			}else{
				$(".look").show();
				$(".add_one").hide()
			}
			$("#zhu").text(zhu);
			$("#qian").text(zhu*2)
			
		})
	}
})

Vue.directive('actdw',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			if($(el).hasClass("active")){
				$(el).removeClass("active");
			}else{
				$(el).addClass("active");
				var num = $(el).html()-1;
				$(el).parent().parent().find(".redq").find("li").eq(num).removeClass("active");
			}
			
			var num1 = 5 - $(el).parent().parent().find(".redq").find(".active").length;
			var num2 = $(el).parent().parent().find(".redw").find(".active").length;
			var num3 = 2 - $(el).parent().parent().find(".bluee").find(".active").length;
			var num4 = $(el).parent().parent().find(".bluer").find(".active").length;
			//console.log(num1+"~"+num2+"~"+num3+"~"+num4)
			var zhu = 1;
			for(var i = 0;i < num1;i++){
				zhu = zhu * (num2 - i) / (i + 1);
			}
			for(var i = 0;i < num3;i++){
				zhu = zhu * (num4 - i) / (i + 1);
			}
			if(zhu >= 1){
				$(".add_one").show();
				$(".look").hide()
			}else{
				$(".look").show();
				$(".add_one").hide()
			}
			$("#zhu").text(zhu);
			$("#qian").text(zhu*2)
		})
	}
})

Vue.directive('actde',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			var num3 = $(el).parent().parent().find(".bluee").find(".active").length;
			
			if($(el).hasClass("active")){
				$(el).removeClass("active");
			}else{
				if(num3 <= 0){
					$(el).addClass("active");
					var num = $(el).html()-1;
					$(el).parent().parent().find(".bluer").find("li").eq(num).removeClass("active");
				}else{
					console.log("chaole")
				}
			}
			var num1 = 5 - $(el).parent().parent().find(".redq").find(".active").length;
			var num2 = $(el).parent().parent().find(".redw").find(".active").length;
				num3 = 2 -$(el).parent().parent().find(".bluee").find(".active").length;
			var num4 = $(el).parent().parent().find(".bluer").find(".active").length;
			//console.log(num1+"~"+num2+"~"+num3+"~"+num4)
			var zhu = 1;
			for(var i = 0;i < num1;i++){
				zhu = zhu * (num2 - i) / (i + 1);
			}
			for(var i = 0;i < num3;i++){
				zhu = zhu * (num4 - i) / (i + 1);
			}
			if(zhu >= 1){
				$(".add_one").show();
				$(".look").hide()
			}else{
				$(".look").show();
				$(".add_one").hide()
			}
			$("#zhu").text(zhu);
			$("#qian").text(zhu*2)
		})
	}
})

Vue.directive('actdr',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			if($(el).hasClass("active")){
				$(el).removeClass("active");
			}else{
				$(el).addClass("active");
				var num = $(el).html()-1;
				$(el).parent().parent().find(".bluee").find("li").eq(num).removeClass("active");
			}
			var num1 = 5 - $(el).parent().parent().find(".redq").find(".active").length;
			var num2 = $(el).parent().parent().find(".redw").find(".active").length;
			var num3 = 2 - $(el).parent().parent().find(".bluee").find(".active").length;
			var num4 = $(el).parent().parent().find(".bluer").find(".active").length;
			//console.log(num1+"~"+num2+"~"+num3+"~"+num4)
			var zhu = 1;
			for(var i = 0;i < num1;i++){
				zhu = zhu * (num2 - i) / (i + 1);
			}
			for(var i = 0;i < num3;i++){
				zhu = zhu * (num4 - i) / (i + 1);
			}
			if(zhu >= 1){
				$(".add_one").show();
				$(".look").hide()
			}else{
				$(".look").show();
				$(".add_one").hide()
			}
			$("#zhu").text(zhu);
			$("#qian").text(zhu*2)
		})
	}
})

//清除选中 垃圾桶
Vue.directive('clear_active',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			$("ul").find("li").removeClass("active");
			$("#yl").text($("#yll").text())
			$("#zhu").text(0);
			$("#qian").text(0);
			$(".look").show();
			$(".add_one").hide();
		})
	}
})

//加入号码篮  大乐透
Vue.directive('add_basket_dlt',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			add_basket_dlt_function()
		})
	}
})


//一位的所有选中的数字
function all_active(obj){
	
	var len = obj.find(".active").length,str = "";
	for(var i = 0;i < len;i++){
		str += obj.find(".active").eq(i).html();
	}
	return str;
}

//-----------------双色球-------------------
//双色球
//机选 普通 33红球选择6个 16蓝球选择1个
Vue.directive('jixuans',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			$(".basket").hide();
			var arr = suiji(33,6),a = arr[0],b = arr[1],c = arr[2],d = arr[3],e = arr[4],f = arr[5];
			$(el).parent().parent().find("li").removeClass("active");
			$(el).parent().parent().find(".red").find("li").eq(a).addClass("active");
			$(el).parent().parent().find(".red").find("li").eq(b).addClass("active");
			$(el).parent().parent().find(".red").find("li").eq(c).addClass("active");
			$(el).parent().parent().find(".red").find("li").eq(d).addClass("active");
			$(el).parent().parent().find(".red").find("li").eq(e).addClass("active");
			$(el).parent().parent().find(".red").find("li").eq(f).addClass("active");
			$("#zhu").text(1);
			$("#qian").text(2);
			arr = suiji(16,1),a = arr[0];
			$(el).parent().parent().find(".blue").find("li").eq(a).addClass("active");
			$(".look").hide();
			$(".add_one").show();
		})
	}
})

//选择双色球
Vue.directive('actssq',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			if($(el).hasClass("active")){
				$(el).removeClass("active");
			}else{
				$(el).addClass("active");
			}
			var num1 = $(el).parent().parent().find(".red").find(".active").length;
			var num2 = $(el).parent().parent().find(".blue").find(".active").length;
			var zhu = num1*(num1-1)*(num1-2)*(num1-3)*(num1-4)*(num1-5)*num2/720;
			$("#zhu").text(zhu);
			$("#qian").text(zhu*2);
			if(zhu >= 1){
				$(".look").hide();
				$(".add_one").show();
			}else{
				$(".look").show();
				$(".add_one").hide();
			}
		})
	}
})
Vue.directive('actssqq',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			var num1 = $(el).parent().parent().find(".redq").find(".active").length;
			if($(el).hasClass("active")){
				$(el).removeClass("active");
			}else{
				if(num1 <= 4){
					$(el).addClass("active");
					var num = $(el).html()-1;
					$(el).parent().parent().find(".redw").find("li").eq(num).removeClass("active");
				}
			}
				num1 = 6 - $(el).parent().parent().find(".redq").find(".active").length;
			var num2 = $(el).parent().parent().find(".redw").find(".active").length;
			var num4 = $(el).parent().parent().find(".bluer").find(".active").length;
			var zhu = 1;
			for(var i = 0;i < num1;i++){
				zhu = zhu * (num2 - i) / (i + 1);
			}
			zhu = zhu * num4
			$("#zhu").text(zhu);
			$("#qian").text(zhu*2)
			if(zhu >= 1){
				$(".look").hide();
				$(".add_one").show();
			}else{
				$(".look").show();
				$(".add_one").hide();
			}
		})
	}
})
Vue.directive('actssqw',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			if($(el).hasClass("active")){
				$(el).removeClass("active");
			}else{
				$(el).addClass("active");
				var num = $(el).html()-1;
				$(el).parent().parent().find(".redq").find("li").eq(num).removeClass("active");
			}
			
			var num1 = 6 - $(el).parent().parent().find(".redq").find(".active").length;
			var num2 = $(el).parent().parent().find(".redw").find(".active").length;
			var num4 = $(el).parent().parent().find(".bluer").find(".active").length;
			var zhu = 1;
			for(var i = 0;i < num1;i++){
				zhu = zhu * (num2 - i) / (i + 1);
			}
			zhu = zhu * num4
			$("#zhu").text(zhu);
			$("#qian").text(zhu*2);
			if(zhu >= 1){
				$(".look").hide();
				$(".add_one").show();
			}else{
				$(".look").show();
				$(".add_one").hide();
			}
		})
	}
})
Vue.directive('actssqr',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			if($(el).hasClass("active")){
				$(el).removeClass("active");
			}else{
				$(el).addClass("active");
				var num = $(el).html()-1;
				$(el).parent().parent().find(".bluee").find("li").eq(num).removeClass("active");
			}
			var num1 = 6 - $(el).parent().parent().find(".redq").find(".active").length;
			var num2 = $(el).parent().parent().find(".redw").find(".active").length;
			var num4 = $(el).parent().parent().find(".bluer").find(".active").length;
			var zhu = 1;
			for(var i = 0;i < num1;i++){
				zhu = zhu * (num2 - i) / (i + 1);
			}
			zhu = zhu * num4
			$("#zhu").text(zhu);
			$("#qian").text(zhu*2);
			if(zhu >= 1){
				$(".look").hide();
				$(".add_one").show();
			}else{
				$(".look").show();
				$(".add_one").hide();
			}
		})
	}
})

//------------------七星彩------------

//机选七星彩
Vue.directive('jixuanqx',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			$(".basket").hide();
			$(el).parent().parent().find("li").removeClass("active");
			
			$(el).parent().parent().find(".yi").find("li").eq(sui(10)).addClass("active");
			$(el).parent().parent().find(".er").find("li").eq(sui(10)).addClass("active");
			$(el).parent().parent().find(".san").find("li").eq(sui(10)).addClass("active");
			$(el).parent().parent().find(".si").find("li").eq(sui(10)).addClass("active");
			$(el).parent().parent().find(".wu").find("li").eq(sui(10)).addClass("active");
			$(el).parent().parent().find(".liu").find("li").eq(sui(10)).addClass("active");
			$(el).parent().parent().find(".qi").find("li").eq(sui(10)).addClass("active");
			$(".look").hide();
			$(".add_one").show();
			$("#zhu").text(1);
			$("#qian").text(2);
		})
	}
})

//七星彩 
Vue.directive('actqx',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			if($(el).hasClass("active")){
				$(el).removeClass("active");
			}else{
				$(el).addClass("active");
			}
			$("#zhu").text($(el).parent().parent().find(".yi").find(".active").length*$(el).parent().parent().find(".er").find(".active").length*$(el).parent().parent().find(".san").find(".active").length*$(el).parent().parent().find(".si").find(".active").length*$(el).parent().parent().find(".wu").find(".active").length*$(el).parent().parent().find(".liu").find(".active").length*$(el).parent().parent().find(".qi").find(".active").length);
			if($("#zhu").text()-0 >= 1){
				$(".look").hide();
				$(".add_one").show();
			}else{
				$(".look").show();
				$(".add_one").hide();
			}
			$("#qian").text($("#zhu").text()*2);
		})
	}
})

//-----------------七乐彩----------------------

//七乐彩
Vue.directive('jixuanql',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){			
			var arr = suiji(30,7),a = arr[0],b = arr[1],c = arr[2],d = arr[3],e = arr[4],f = arr[5],g = arr[6];
			$(el).parent().parent().find("li").removeClass("active");
			$(el).parent().parent().find(".red").find("li").eq(a).addClass("active");
			$(el).parent().parent().find(".red").find("li").eq(b).addClass("active");
			$(el).parent().parent().find(".red").find("li").eq(c).addClass("active");
			$(el).parent().parent().find(".red").find("li").eq(d).addClass("active");
			$(el).parent().parent().find(".red").find("li").eq(e).addClass("active");
			$(el).parent().parent().find(".red").find("li").eq(f).addClass("active");
			$(el).parent().parent().find(".red").find("li").eq(g).addClass("active");
			$("#zhu").text(1);
			$("#qian").text(2);
			$(".look").hide();
			$(".add_one").show();
		})
	}
})

//选择七乐彩
Vue.directive('actql',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			if($(el).hasClass("active")){
				$(el).removeClass("active");
			}else{
				$(el).addClass("active");
			}
			var num1 = $(el).parent().parent().find(".red").find(".active").length;
			var zhu = num1*(num1-1)*(num1-2)*(num1-3)*(num1-4)*(num1-5)*(num1-6)/5040;
			$("#zhu").text(zhu);
			if(zhu >= 1){
				$(".look").hide();
				$(".add_one").show();
			}else{
				$(".look").show();
				$(".add_one").hide();
			}
			$("#qian").text(zhu*2)
		})
	}
})

Vue.directive('actqlq',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			var num1 = $(el).parent().parent().find(".redq").find(".active").length;
			if($(el).hasClass("active")){
				$(el).removeClass("active");
			}else{
				if(num1 <= 5){
					$(el).addClass("active");
				}
				
			}
			num1 = 7 - $(el).parent().parent().find(".redq").find(".active").length;
			var num2 = $(el).parent().parent().find(".redw").find(".active").length;
			var zhu = 1;
			for(var i = 0;i < num1;i++){
				zhu = zhu * (num2 - i) / (i + 1)
			}
			$("#zhu").text(zhu);
			$("#qian").text(zhu*2);
			if(zhu >= 1){
				$(".look").hide();
				$(".add_one").show();
			}else{
				$(".look").show();
				$(".add_one").hide();
			}
		})
	}
})

Vue.directive('actqlw',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			
			if($(el).hasClass("active")){
				$(el).removeClass("active");
			}else{
				$(el).addClass("active");
			}
			var num1 = 7 - $(el).parent().parent().find(".redq").find(".active").length;
			var num2 = $(el).parent().parent().find(".redw").find(".active").length;
			var zhu = 1;
			for(var i = 0;i < num1;i++){
				zhu = zhu * (num2 - i) / (i + 1)
			}
			$("#zhu").text(zhu);
			$("#qian").text(zhu*2);
			if(zhu >= 1){
				$(".look").hide();
				$(".add_one").show();
			}else{
				$(".look").show();
				$(".add_one").hide();
			}
		})
	}
})

//-----------------福彩3D------------------
Vue.directive('zhi',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			$(el).parent().parent().next().find(".zhi").show();
			$(el).parent().parent().next().find(".san").hide();
			$(el).parent().parent().next().find(".liu").hide();
			$(".look").css("display","block");
			$(".add_one").css("display","none");
			$("ul").find("li").removeClass("active");
			$(".basket").hide();
	    		$(".yl").show();
			$("#yl").text(1040);
			$("#yll").text(1040);
			$("#ylll").text(1040);
		})
	}
})

Vue.directive('san',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			$(el).parent().parent().next().find(".zhi").hide();
			$(el).parent().parent().next().find(".san").show();
			$(el).parent().parent().next().find(".liu").hide();
			$(".look").css("display","block");
			$(".add_one").css("display","none");
			$("ul").find("li").removeClass("active");
			$(".basket").hide();
	    		$(".yl").show();
			$("#yl").text(346);
			$("#yll").text(346);
			$("#ylll").text(346);
		})
	}
})

Vue.directive('liu',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			$(el).parent().parent().next().find(".zhi").hide();
			$(el).parent().parent().next().find(".san").hide();
			$(el).parent().parent().next().find(".liu").show();
			$(".look").css("display","block");
			$(".add_one").css("display","none");
			$("ul").find("li").removeClass("active");
			$(".basket").hide();
	    		$(".yl").show();
			$("#yl").text(173);
			$("#yll").text(173);
			$("#ylll").text(173);
		})
	}
})

//机选一注 直选
Vue.directive('jixuan',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			$(".basket").hide();
			$(el).parent().parent().find("li").removeClass("active");
			
			$(el).parent().parent().find(".bai").find("li").eq(sui(10)).addClass("active");
			$(el).parent().parent().find(".shi").find("li").eq(sui(10)).addClass("active");
			$(el).parent().parent().find(".ge").find("li").eq(sui(10)).addClass("active");
			
			$("#zhu").text($(el).parent().parent().find(".bai").find(".active").length * $(el).parent().parent().find(".shi").find(".active").length * $(el).parent().parent().find(".ge").find(".active").length);
			$("#qian").text($(el).parent().parent().find(".bai").find(".active").length * $(el).parent().parent().find(".shi").find(".active").length * $(el).parent().parent().find(".ge").find(".active").length * 2);
			$("#yl").text(1040 - $(el).parent().parent().find(".bai").find(".active").length * $(el).parent().parent().find(".shi").find(".active").length * $(el).parent().parent().find(".ge").find(".active").length * 2);
			if($("#zhu").text() == "0"){
				$(".look").css("display","block");
				$(".add_one").css("display","none")
			}else{
				$(".look").css("display","none");
				$(".add_one").css("display","block")
			}
		})
	}
})

//机选一注 组三
Vue.directive('jixuanzs',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			$(".basket").hide();
			var arr = suiji(10,2);
			var a = arr[0],b = arr[1];
			$(el).parent().parent().find("li").removeClass("active");
			$(el).parent().parent().find(".zs").find("li").eq(a).addClass("active");
			$(el).parent().parent().find(".zs").find("li").eq(b).addClass("active");
			$("#zhu").text(2);
			$("#qian").text(4);
			$("#yl").text(342);
			if($("#zhu").text() == "0"){
				$(".look").css("display","block");
				$(".add_one").css("display","none")
			}else{
				$(".look").css("display","none");
				$(".add_one").css("display","block")
			}
		})
	}
})

//机选一注 组六
Vue.directive('jixuanl',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			$(".basket").hide();
			var arr = suiji(10,3),a = arr[0],b = arr[1],c = arr[2];
			$(el).parent().parent().find("li").removeClass("active");
			$(el).parent().parent().find(".zl").find("li").eq(a).addClass("active");
			$(el).parent().parent().find(".zl").find("li").eq(b).addClass("active");
			$(el).parent().parent().find(".zl").find("li").eq(c).addClass("active");
			
			$("#zhu").text(1);
			$("#qian").text(2);
			$("#yl").text(171);
			if($("#zhu").text() == "0"){
				$(".look").css("display","block");
				$(".add_one").css("display","none")
			}else{
				$(".look").css("display","none");
				$(".add_one").css("display","block")
			}
		})
	}
})

//选择按钮 选中添加class 直选
Vue.directive('act',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			if($(el).hasClass("active")){
				$(el).removeClass("active");
			}else{
				$(el).addClass("active");
			}
			$("#zhu").text($(el).parent().parent().find(".bai").find(".active").length * $(el).parent().parent().find(".shi").find(".active").length * $(el).parent().parent().find(".ge").find(".active").length);
			$("#qian").text($(el).parent().parent().find(".bai").find(".active").length * $(el).parent().parent().find(".shi").find(".active").length * $(el).parent().parent().find(".ge").find(".active").length * 2);
			$("#yl").text(1040 - $(el).parent().parent().find(".bai").find(".active").length * $(el).parent().parent().find(".shi").find(".active").length * $(el).parent().parent().find(".ge").find(".active").length * 2);
			
			if($("#zhu").text() == "0"){
				$(".look").css("display","block");
				$(".add_one").css("display","none")
			}else{
				$(".look").css("display","none");
				$(".add_one").css("display","block")
			}
		})
	}
})

//选择按钮 选中添加class 组三
Vue.directive('acts',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			if($(el).hasClass("active")){
				$(el).removeClass("active");
			}else{
				$(el).addClass("active");
			}
			var num = $(el).parent().find(".active").length * ($(el).parent().find(".active").length -1)
			$("#zhu").text(num);
			$("#qian").text(num * 2);
			$("#yl").text(346 - num * 2);
			if($("#zhu").text() == "0"){
				$(".look").css("display","block");
				$(".add_one").css("display","none")
			}else{
				$(".look").css("display","none");
				$(".add_one").css("display","block")
			}
		})
	}
})

//选择按钮 选中添加class 组六
Vue.directive('actl',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			if($(el).hasClass("active")){
				$(el).removeClass("active");
			}else{
				$(el).addClass("active");
			}
			var num = $(el).parent().find(".active").length;
			$("#zhu").text(num * (num -1) * (num - 2) / 6);
			$("#qian").text(num * (num -1) * (num - 2) / 3);
			$("#yl").text(173 - num * (num -1) * (num - 2) / 3);
			if($("#zhu").text() == "0"){
				$(".look").css("display","block");
				$(".add_one").css("display","none")
			}else{
				$(".look").css("display","none");
				$(".add_one").css("display","block")
			}
		})
	}
})

//机选排五
Vue.directive('jixuanpw',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			$(".basket").hide();
			$(el).parent().parent().find("li").removeClass("active");
			
			$(el).parent().parent().find(".yi").find("li").eq(sui(10)).addClass("active");
			$(el).parent().parent().find(".er").find("li").eq(sui(10)).addClass("active");
			$(el).parent().parent().find(".san").find("li").eq(sui(10)).addClass("active");
			$(el).parent().parent().find(".si").find("li").eq(sui(10)).addClass("active");
			$(el).parent().parent().find(".wu").find("li").eq(sui(10)).addClass("active");
			
			$(".look").hide();$(".add_one").show();
			$("#zhu").text(1);
			$("#qian").text(2);
		})
	}
})

//排五
Vue.directive('actpw',{
	bind:function(el){
		var el=el;
		$(el).on("click",function(){
			if($(el).hasClass("active")){
				$(el).removeClass("active");
			}else{
				$(el).addClass("active");
			}
			$("#zhu").text($(el).parent().parent().find(".yi").find(".active").length*$(el).parent().parent().find(".er").find(".active").length*$(el).parent().parent().find(".san").find(".active").length*$(el).parent().parent().find(".si").find(".active").length*$(el).parent().parent().find(".wu").find(".active").length);
			$("#qian").text($("#zhu").text()*2);
			if($("#zhu").text()-0 >= 1){
				$(".look").hide();
				$(".add_one").show();
			}else{
				$(".look").show();
				$(".add_one").hide();
			}
		})
	}
})
