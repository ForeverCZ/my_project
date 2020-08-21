// 数据存入到数据库,再取出数据 前面bug解决 但不是最优
// window.onload = function(){
	// 点击按钮跳到登录注册
	(function() {
		let login_register = document.querySelectorAll(".top-bar-right .login-register");
		login_register.forEach((item, index) => {
			item.onclick = function() {
				window.location.href = "../login/login.html";
			}
		})
	})();
	// 判断用户是否已经
	(function() {
		let top_bar_right = document.querySelector("ul.top-bar-right");
		let top_bar_right_img = document.querySelector("div.top-bar-right-img");
		let to_login_register = document.querySelector("div.top-bar-right-img.to-login-register");
		let usertName = Cookies.get("userName");
		console.log("已经登陆的用户名:", usertName);
		// 如果没有登录
		if (!usertName) {
			Message.confirm("你还没有登录，是否跳转至登录!", function() {
				// 直接跳转到登录注册页,用户自己返回
				window.location.href = "../login/login.html";
			})
			return;
		}
		// 成功登陆
		top_bar_right.classList.remove("show");
		top_bar_right_img.classList.add("show");
		// 跳转至用户中心
		to_login_register.onclick = function() {
			window.location.href = "../userHome/userHome.html";
		}
	})();
	
	// 分类数据
	let categoryDatas = JSON.parse(sessionStorage.seoDatas).menuList;
	// console.log(categoryDatas)
	
	// 下拉箭头事件
	
	function showArrow() {
		document.querySelector("ul.top-bar-left>li.chinese>ul").style.display = "block";
		
	}
	document.querySelector("ul.top-bar-left>li.chinese").onmouseleave = function() {
		this.querySelector("ul").style.display = "none";
		
	}
	
	// 选择语言
	function selectLanguage(language) {
		alert(`你选择了${language}`)
		var r = confirm("正在翻译");
		if (r == true) {
			x = "翻译成功";
		} else {
			x = "你\"取消\"了翻译!";
		}
		alert(x)
	}
	
	// 渲染导航菜单
	// 获取分类ul包裹
	// var liEl = document.createElement('li');
	// liEl.classList.add("v-middle")
	// liEl.innerHTML =
	// 				`
	// 				<span class="menu-icon" style="background-position:0 -${ index * 33}px"></span>
	// 				<span>${item.name}</span>
	// 				`;
	
	// 分类菜单创建
	categoryDatas.filter((item, index) => item.fid === 0).forEach((item, index) => {
		// ul储备好
		let catelogoryUlEl = document.querySelector(".nav-bar>div>ul");
	
		// 最外部li贮备好
		let lioneEl = document.createElement("li");
		if (index === 0) {
			lioneEl.innerHTML = `
			<a href="../index/index.html">
				${item.name}
			<a/>
			`
		} else {
			lioneEl.innerHTML = `
			<a href="javascript:;">
				${item.name}
			<a/>
			`
		}
		// 创建二级菜单总div
		let divoneEl_wrap = document.createElement("div");
		divoneEl_wrap.classList.add("divoneEl_wrap");
		let divoneEl = document.createElement("div");
	
		divoneEl.classList.add("category-wrap");
		divoneEl.classList.add("w");
		// 创建二级菜单第一个div
		let divtwoEl = document.createElement("div");
		divtwoEl.classList.add("category-wrap-left");
	
		let uloneEl = document.createElement("ul");
	
	
		// 创建二级菜单第二个div
		let divthreeEl = document.createElement("div");
		divthreeEl.classList.add("category-wrap-right");
	
		let ultwoEl = document.createElement("Ul");
	
		// 筛选二级分类
		var categoryDs = categoryDatas.filter((item2, index2) => item2.fid == item.id)
		if (categoryDs.length === 0) {
			console.log(`${item.name}分类下什么也没有,不添加分类数据`)
			// divoneEl.innerHTML = "还没有任何数据哦!";
			divtwoEl.innerHTML ="<span style='font-size:16px; color: red; display: inline-block; margin-top: 10px;'>该分类下还没有数据哦!</span>";
		} else {
			// 往第一个小div里放入p标签
			divtwoEl.innerHTML =
				`
			<p>${categoryDs[0].classification.name}</p>
			
			
			`
	
			// 第一个ul循环
			categoryDs[0].classification.items.forEach((item3, index3) => {
				uloneEl.innerHTML += `
				
				<li>
					<a href="../list/list.html?cid=${item3.cid?item3.cid:1}">
						${item3.name}
					</a>
				</li>
				`;
			})
	
	
			// 往第2个小div里放入p标签
			divthreeEl.innerHTML =
				`
			<p>${categoryDs[0].brand.name}</p>
			
			`
			// 第二个ul循环
			// 创建ul
			var ulthreeEl = document.createElement("Ul");
	
			categoryDs[0].brand.items.forEach((item3, index3) => {
	
				ultwoEl.innerHTML += `
				
				<li>
					<a href="../list/list.html?cid=${item3.cid?item3.cid:1}">
						${item3.name}
					</a>
				</li>
				
				`;
			})
	
		}
		// console.log("筛选的二级分类:",categoryDs)
	
		divtwoEl.appendChild(uloneEl)
		divoneEl.appendChild(divtwoEl)
		divthreeEl.appendChild(ultwoEl)
		divoneEl.appendChild(divthreeEl)
		
		divoneEl_wrap.appendChild(divoneEl)
		// 二级菜单div放到li里
		lioneEl.appendChild(divoneEl_wrap);
		// li添加到ul
		catelogoryUlEl.appendChild(lioneEl)
	
	})
	
	// 置顶
	// var toTop = document.querySelector(".toTop");
	// // 监听窗口滚动事件
	// window.onscroll = function() {
	// 	let topDistance = document.documentElement.scrollTop || document.body.scrollTop;
	// 	if (topDistance > 300) {
	// 		toTop.style.display = "block";
	// 	} else {
	// 		toTop.style.display = "none";
	// 	}
	// }
	
	// var topTimer;
	// var timeCount = 1;
	// // 置顶事件
	// toTop.onclick = function() {
	// 	topTimer = setInterval(function() {
	// 		toTopFunction(document.documentElement.scrollTop)
	// 	}, 40)
	// }
	
	// 置顶函数 实现过渡效果
	// function toTopFunction(distance) {
	// 	if (document.documentElement.scrollTop <= 0) {
	// 		document.documentElement.scrollTop = 0;
	// 		timeCount = 1;
	// 		// 清除计时器
	// 		clearInterval(topTimer);
	// 	} else {
	// 		document.documentElement.scrollTop = document.documentElement.scrollTop - 30 * timeCount;
	// 	}
	// 	// 每次滚动距离加倍
	// 	timeCount++;
	// }
	
// }